export const getData = async (URL: string) => {
  try {
    const data = await fetch(URL);
    return await data.json();
  } catch (e) {
    console.log(e);
  }
};
