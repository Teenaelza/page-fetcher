const fs = require("fs");
const request = require("request");
const urlArray = process.argv.slice(2);
console.log(urlArray);

request(urlArray[0], (error, response, body) => {
  console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response
  fileWrite(body); //write into file
});

const fileWrite = function (fileData) {
  fs.writeFile(urlArray[1], fileData, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    //file written successfully
  });
};
