const limit = 10;

export const getGifs = async( category ) => {

  const url = `https://api.giphy.com/v1/gifs/search?api_key=BzpLVJiPSSLYyt8mbxq3bGx2EG72itim&q=${category}&limit=${limit}`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map( gif => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url,
  }));

  return gifs;
}