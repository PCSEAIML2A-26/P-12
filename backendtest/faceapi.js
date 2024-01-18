const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");

const api_key = "I1vFf_DDlR3UjecFfv9VubwUrGVIdqyJ";
const api_secret = "Ayej1Hy6vNyTU0fLGM6DS-kRpL2hOtjh";

// Provide the paths to the image files you want to compare
const imageFile1Path =
  "/Users/nikhi/OneDrive/Desktop/SIH/SIH/testserver/test profiles/virat1.png";
const imageFile2Path =
  "/Users/nikhi/OneDrive/Desktop/SIH/SIH/testserver/test profiles/virat3.png";

const endpoint = "https://api-us.faceplusplus.com/facepp/v3/compare";

const formData = new FormData();
formData.append("api_key", api_key);
formData.append("api_secret", api_secret);

// Append image files to the form data
formData.append("image_file1", fs.createReadStream(imageFile1Path));
formData.append("image_file2", fs.createReadStream(imageFile2Path));

axios
  .post(endpoint, formData, {
    headers: {
      ...formData.getHeaders(),
    },
  })
  .then((response) => {
    console.log("Comparison result:", response.data.confidence);
    // Handle the comparison result here
  })
  .catch((error) => {
    console.error("Error:", error);
    // Handle errors here
  });
