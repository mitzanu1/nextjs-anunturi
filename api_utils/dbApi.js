export async function getAnunturi() {
  const localhost = "http://localhost:3000/api/getAnunt";
  const vercel = "https://nextjs-anunturi.vercel.app/api/getAnunt";
  var res = await fetch(vercel, {
    method: "GET",
    headers: {
      Accept: "application/json, text/plain, */*",
      "User-Agent": "*",
    },
  });

  const _data = await res.json();
  const { data } = _data;
  return data;
}
