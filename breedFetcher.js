const req = require("request");

let url = "https://api.thecatapi.com/v1/breeds/Siberian";

req(url, (err, response, body) => {
  if (err) {
    console.log(err);
  } else {
    const data = JSON.parse(body);
    console.log(data);
    console.log(typeof data);
    console.log(response);
  }
});
