export const GiftGrid = ({ category }) => {
  const getGifts = async () => {
    const url = `api.giphy.com/v1/gifs/search?api_key=xSz35fny2Uxmw0Dye9acBeSzRg3BmWH0&q=${category}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    console.log(data);
  };

  getGifts();
  return (
    <>
      <h3> {category} </h3>
    </>
  );
};
