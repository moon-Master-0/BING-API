const express = require('express');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const bingDataPath = path.join(__dirname, '../bingData.json');

// Ensure bingData.json exists
if (!fs.existsSync(bingDataPath)) {
  fs.writeFileSync(bingDataPath, JSON.stringify([]));
}

const saveImageData = (data) => {
  const existingData = JSON.parse(fs.readFileSync(bingDataPath));
  existingData.push(data);
  fs.writeFileSync(bingDataPath, JSON.stringify(existingData, null, 2));
};

module.exports = (cookiesList) => {
  router.get('/', async (req, res) => {
    try {
      const prompt = req.query.prompt;

      if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
      }

      let response;
      let images;
      let success = false;

      for (const cookie of cookiesList) {
        try {
          response = await axios.get(`https://bing-v2.onrender.com/api/bing?prompt=${prompt}&cookie=${cookie}`);
          images = response.data.images;
          success = true;
          break;  // Exit loop if request is successful
        } catch (error) {
          console.error(`Error with cookie ${cookie}: ${error.message}`);
          continue;  // Try the next cookie
        }
      }

      if (!success) {
        return res.status(500).json({ error: 'All cookies failed. Internal server error' });
      }

      // Save image data to bingData.json
      saveImageData({ prompt, images });

      res.json({ imageUrls: images });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  return router;
};
