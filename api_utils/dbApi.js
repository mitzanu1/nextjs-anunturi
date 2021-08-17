export async function getAnunturi() {
  const localhost = "http://localhost:3000/api/anunt";
  const vercel = "https://nextjs-anunturi.vercel.app/api/anunt";

  var res = await fetch("https://nextjs-anunturi.vercel.app/api/anunt", {
    method: "GET",
    headers: {
      Accept: "application/json, text/plain, */*",
      "User-Agent": "*",
    },
  });

  const data = await res.json();
  return data;
}
