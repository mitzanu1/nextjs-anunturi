import React, { useState, useRef } from "react";
import classes from "./addEvent.module.css";
import { addEvent } from "../../firebase/firebase";
import { useRouter } from "next/router";
import Button from "../ui/button";
import { uploadImage } from "../../firebase/firebase";
import axios from "axios";

function EventForm() {
  const [preview, setPreview] = useState();
  const [image, setImage] = useState();
  const titluRef = useRef();
  const orasRef = useRef();
  const contactRef = useRef();
  const pretRef = useRef();
  const categorieRef = useRef();
  const detaliiRef = useRef();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imageUrl = await uploadImage(image);

    const anunt = {
      title: titluRef.current.value,
      city: orasRef.current.value,
      contact: contactRef.current.value,
      price: pretRef.current.value,
      category: categorieRef.current.value,
      description: detaliiRef.current.value,
      image: imageUrl,
    };

    if (
      anunt.title &&
      anunt.contact &&
      anunt.price &&
      anunt.category &&
      anunt.description &&
      anunt.image &&
      anunt.city
    ) {
      // addEvent(anunt);
      axios.post("/api/postAnunt", anunt);
      router.push("/");
    }
  };

  const selectImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className={classes.admin}>
      <div className={classes.uploadBox}>
        <img src={preview || "images/insert.png"} alt="" />
        <div className={classes.imputLabel}>
          <label htmlFor="imageUpload"> Alege o imagine </label>
        </div>
        <input
          id="imageUpload"
          className={classes.hide}
          type="file"
          accept="image/*"
          onChange={selectImage}
        />
      </div>
      <form type="submit" className={classes.form}>
        <div>
          <label htmlFor="title">Titlul anuntului</label>
          <input
            type="text"
            id="title"
            ref={titluRef}
            placeholder=""
            required
          />
        </div>
        <div>
          <label htmlFor="city">Oras</label>
          <input type="text" id="city" ref={orasRef} placeholder="" required />
        </div>
        <div>
          <label htmlFor="contact">Telefon</label>
          <input
            type="number"
            id="contact"
            ref={contactRef}
            placeholder=""
            required
          />
        </div>
        <div>
          <label htmlFor="pret">Pret</label>
          <input
            type="number"
            id="pret"
            ref={pretRef}
            placeholder=""
            required
          />
        </div>
        <div className={classes.options}>
          <label htmlFor="categirie">Categorie</label>
          <select id="categirie" ref={categorieRef}>
            <option value="Cursuri">Cursuri</option>
            <option value="Meditatii">Meditatii</option>
            <option value="Diverse">Diverse</option>
          </select>
        </div>
        <div className={classes.description}>
          <label htmlFor="Description">Detalii</label>
          <textarea
            id="Description"
            cols="37"
            rows="10"
            ref={detaliiRef}
            placeholder=""
            required
          />
        </div>
        <div className={classes.button}>
          <Button onClick={handleSubmit}>Posteaza anunt</Button>
        </div>
      </form>
    </div>
  );
}

export default EventForm;
