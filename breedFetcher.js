const request = require("request");

const breedName = process.argv.slice(2); // Get the breed name from command-line arguments

if (!breedName) {
  console.log("Please provide a breed name as a command-line argument.");
} else {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (err, response, body) => {
    if (err) {
      console.log("Error occurred while making the request:", err);
    } else {
      const data = JSON.parse(body);

      if (data.length === 0) {
        console.log(`Breed '${breedName}' not found.`);
      } else {
        const breedInfo = data[0];
        console.log(breedInfo.description);
      }
    }
  });
}
