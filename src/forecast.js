const request = require("request");

const forecast = (latitude, longitude, callback) => {
    var url = "http://api.weatherstack.com/current?access_key=b70700823e1a4c2fe1c968da897305b1&query=" + encodeURIComponent(latitude) + "," + encodeURIComponent(longitude);
    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback("Unable to connect to the server.", undefined);
        }
        else if(body.current === undefined) {
            callback("Error not found", undefined);
        }
        else {
            var ss = "It's " + body.current.temperature + " degress out there. It feels like " + body.current.feelslike + " degress out there."
            callback(undefined, ss);
        }
    });
}

module.exports = forecast;