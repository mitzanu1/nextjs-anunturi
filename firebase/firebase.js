import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCQ8zIvOcpjbrIM-gJE0UjTEsR64c51TJA",
  authDomain: "nextjs-mitz.firebaseapp.com",
  databaseURL:
    "https://nextjs-mitz-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nextjs-mitz",
  storageBucket: "nextjs-mitz.appspot.com",
  messagingSenderId: "978529708811",
  appId: "1:978529708811:web:20c96be88c862afba4d00e",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export async function getEventsData() {
  let data = [];
  const dataRef = firebase.database().ref("/");
  dataRef.on("value", (snapshot) => {
    const response = snapshot.val();
    const _data = Object.values(response).map((item) => Object.values(item));
    data = _data.reduce((acc, value) => acc.concat(value));
  });
  return data;
}

export async function addEvent(anunt) {
  const newPostKey = firebase
    .database()
    .ref()
    .child(anunt.categorie)
    .push().key;
  const _anunt = { ...anunt, id: newPostKey };
  let updates = {};
  updates[`/${anunt.categorie}/${newPostKey}`] = _anunt;

  return firebase.database().ref().update(updates);
}

export async function uploadImage(image) {
  const file = image || {};
  const storageRef = firebase.storage().ref();
  const fileRef = storageRef.child(`images/${file.name}`);
  fileRef.put(file);
  const fileUrl = fileRef.getDownloadURL();
  return fileUrl;
}
