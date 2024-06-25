const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

const COOKIES = "PUT_HERE_YOUR_BING_COOKIES"; //Add here your cookies, if you don't have any, you can get it from here: www.bing.com 

//Thank you for using my apis, if you have any problem, you can contact me on discord: 


app.get('/api/bing', async (req, res) => {
  try {
    const prompt = req.query.prompt;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const response = await axios.get(`https://bing-v1.onrender.com/api/bing?prompt=${prompt}&cookie=${COOKIES}`);

    const images = response.data.images;

    res.json({ url: images });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
