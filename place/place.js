const axios = require('axios');

const getPlaceLatLng = async ( direction ) => {

  const encodeUrl = encodeURI(direction);

  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
    headers: {'x-rapidapi-key': '92c8c1564emshc98a91892d0d766p167e16jsnd218a2814f28'}
  });

  const resp = await instance.get()

  if(resp.data.Results.length === 0) {
    throw new Error(`No result available for ${direction}`);
  }

  const data = resp.data.Results[0];
  const address = data.name;
  const lat = data.lat;
  const lng = data.lon;

  return {
    direction: address,
    lat,
    lng
  }
//
};

module.exports = {
  getPlaceLatLng
};

