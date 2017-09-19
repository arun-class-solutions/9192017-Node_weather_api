const request = require("request");

const getWeather = () => {
  return new Promise((resolve, reject) => {
    request({
      method: "GET",
      uri: "https://api.openweathermap.org/data/2.5/weather",
      qs: {
        units: "imperial",
        q: "San Francisco, CA",
        appid: "0ceda40f34407a7f88d4657fdf79f91d"
      }
    }, (err, response, body) => {
      if (err) {
        return reject(err);
      }

      return resolve(body);
    });
  });
}

const showWeather = async () => {
  try {
    const weatherPromise = await getWeather();

    console.log(weatherPromise);
  } catch(err) {
    console.log(err);
  }
}

showWeather();
