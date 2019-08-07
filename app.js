
const argv = require('yargs').options({
  direction: {
    alias: 'd',
    desc: 'City address to get weather',
    demand: true
  }
}).argv;

const place = require('./place/place');
const weather = require('./weather/weather');

const getInfo = async (direction) => {
  try {
    const coord = await place.getPlaceLatLng(direction);
    const temp  = await weather.getWeather(coord.lat, coord.lng);
    return `The weather of ${direction} is ${temp}`;
  }catch (e) {
    return `Error retrieving weather of ${direction}`;
  }

    // .then(resp => {
    //   weather.getWeather(resp.lat, resp.lng)
    //     .then(temp => console.log(`Temperature (${direction}): ` + temp))
    //     .catch(err => console.log('Error retrieving weather'))
    //   ;
    // })
    // .catch(err => console.log('Error retrieving weather'))
  ;
};

getInfo(argv.direction).then(resp => console.log(resp));