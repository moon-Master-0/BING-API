const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Read cookies from cookies.json
const cookiesPath = path.join(__dirname, 'cookies.json');
let cookiesList = [];

if (fs.existsSync(cookiesPath)) {
  const cookiesData = fs.readFileSync(cookiesPath);
  cookiesList = JSON.parse(cookiesData).cookies || [];
}

const bingRoute = require('./routes/bing');

app.use('/api/bing', bingRoute(cookiesList));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
