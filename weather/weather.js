const axios = require('axios');

const getWeather = async ( lat, lon ) => {
  const resp = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?APPID=f86862f4c7f306531f19fe0c8d743ed7&lat=${lat}&lon=${lon}&units=metric`
  );
  return resp.data.main.temp;

};

module.exports = {
  getWeather
};
