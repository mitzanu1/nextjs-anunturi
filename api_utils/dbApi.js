export async function getAnunturi() {
  var res = await fetch("http://localhost:3000/api/getAnunt", {
    method: "GET",
    headers: {
      Accept: "application/json, text/plain, */*",
      "User-Agent": "*",
    },
  });
  const data = await res.json();
  return data;
}
