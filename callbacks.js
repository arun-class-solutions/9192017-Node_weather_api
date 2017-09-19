const request = require("request");

const getWeather = (callback) => {
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
      return callback(err, null);
    }

    return callback(null, body);
  });
}

// Call the function with an anonymous callback
getWeather((err, body) => {
  console.log(body);
});
