# TUTORIAL README

## Table of Contents
1. [How to Get This Project](#how-to-get-this-project)
2. [Features](#features)
3. [Details and Endpoints](#details-and-endpoints)
4. [File Structure and Usage](#file-structure-and-usage)
5. [Tutorial: Hosting on Render.com](#tutorial-hosting-on-rendercom)
6. [Additional Information](#additional-information)
   - [PM2 Process Manager](#pm2-process-manager)
   - [Customizing Visual Effects](#customizing-visual-effects)
   - [Error Handling and Logging](#error-handling-and-logging)
   - [Environment Variables](#environment-variables)
   - [Security Considerations](#security-considerations)
   - [Contributing](#contributing)
   - [Support](#support)

## How to Get This Project

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo/image-search-app.git
   cd image-search-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up SSL Certificates**:
   - Place your SSL certificate files (`server.key` and `server.cert`) in the `certs` directory.

4. **Add Bing Cookies**:
   - Update `cookies.json` with your Bing cookies.

## Features

- **Image Search**: Allows users to search for images and displays results with visual effects.
- **Multiple Cookies Support**: Utilizes multiple cookies for fetching images, automatically switching if one fails.
- **Data Persistence**: Saves retrieved image URLs and prompts in `bingData.json`.
- **Logging**: Logs server and error messages using Winston.
- **HTTPS Server**: Secure server setup with status check endpoint.

## Details and Endpoints

- **Endpoint**: `/api/bing`
  - **Method**: GET
  - **Parameters**: `prompt` (required) - The search term for images.
  - **Response**: JSON containing image URLs.

- **Status Check**: `/status`
  - **Method**: GET
  - **Response**: JSON indicating the server status.

## File Structure and Usage

- **`index.js`**: Main server setup, initializes routes and middleware.
- **`routes/bing.js`**: Handles image search requests, manages cookies, and saves image data.
- **`httpsServer.js`**: Sets up an HTTPS server with a status endpoint.
- **`logger.js`**: Configures Winston for logging.
- **`cookies.json`**: Stores Bing cookies.
- **`bingData.json`**: Persists image URLs and prompts.
- **`certs/`**: Contains SSL certificate files.

## Tutorial: Hosting on Render.com

1. **Create a New Web Service**:
   - Sign up at [Render.com](https://render.com) and create a new web service.
   - Link your GitHub repository to the service.
   - Put some information like
   - npm install
   - node index js

2. **Environment Configuration**:
   - Set environment variables if needed, such as `PORT`.

3. **Deploy**:
   - Render will automatically build and deploy your project.

4. **SSL Configuration**:
   - Use Render's built-in SSL feature or provide your own certificates.

## Additional Information

### PM2 Process Manager

- **Install PM2**:
  ```bash
  npm install pm2 -g
  ```

- **Start Your Application with PM2**:
  ```bash
  pm2 start app.js --name "my-app"
  ```

- **Ensure PM2 Restart on Server Reboot**:
  ```bash
  pm2 startup
  pm2 save
  ```

### Customizing Visual Effects

- **CSS Styles**:
  - Edit styles in the HTML file (`index.html`) to change image box appearance and effects.

### Error Handling and Logging

- **Winston Logging**:
  - Adjust logging levels and formats in `logger.js` for production needs.

### Environment Variables

- **Configure Environment Variables**:
  - Use `.env` files or set directly in your hosting platform for sensitive data like API keys.

### Security Considerations

- **SSL Certificates**:
  - Always use HTTPS in production for secure data transmission.

- **Input Validation**:
  - Implement input validation to prevent injection attacks and handle user errors gracefully.

To update the tutorial with detailed steps on how users can obtain the (_U) cookie from Bing.com using the "Edit This Cookie" extension on the Kiwi Browser for Android, follow these comprehensive instructions:

### Tutorial: Obtaining Bing Cookies (_U) Using "Edit This Cookie" Extension in Kiwi Browser

#### Step 1: Install Kiwi Browser and "Edit This Cookie" Extension

1. **Install Kiwi Browser**:
   - Visit the Google Play Store on your Android device.
   - Search for "Kiwi Browser" and install it.

2. **Install "Edit This Cookie" Extension**:
   - Open Kiwi Browser and go to the Kiwi Web Store (accessible via Kiwi Browser's menu or directly through a search engine).
   - Search for "Edit This Cookie" extension and add it to Kiwi Browser.

#### Step 2: Enable Desktop Mode and Access Bing.com

1. **Enable Desktop Mode**:
   - Launch Kiwi Browser on your Android device.
   - Tap on the three vertical dots (menu) in the top right corner.
   - Select "Desktop site" from the menu to enable desktop mode.

2. **Navigate to Bing.com**:
   - Enter [bing.com](https://www.bing.com) into the address bar and press Enter to visit the Bing homepage.

#### Step 3: Access Bing Images Creator

1. **Navigate to Bing Images Creator**:
   - Go to [bing.com/images/creator](https://www.bing.com/images/creator) using the Kiwi Browser.

#### Step 4: Use "Edit This Cookie" Extension to Obtain _U Cookie

1. **Open "Edit This Cookie" Extension**:
   - Click on the "Edit This Cookie" extension icon in the Kiwi Browser toolbar.

2. **Search for _U Cookie**:
   - In the "Edit This Cookie" extension popup, click on the search icon or use the search field to find the _U cookie.
   - Look for a cookie named "_U" associated with "bing.com".

3. **Lock _U Cookie**:
   - Once located, click on the lock icon next to the _U cookie. This prevents the cookie from expiring or being modified inadvertently.

4. **Copy the _U Cookie Value**:
   - Click on the _U cookie value to select it.
   - Right-click (or long-press) and choose "Copy" to copy the _U cookie value to your clipboard.

#### Step 5: Usage of the _U Cookie

1. **Paste and Use _U Cookie**:
   - Paste the copied _U cookie value into your application or `cookies.json` file where required to authenticate requests to Bing's APIs.

### Additional Tips

- **Privacy and Security**:
  - Treat the _U cookie as sensitive information and store it securely.
  - Avoid sharing or exposing cookies in public or unsecured environments to prevent unauthorized access to your Bing account.

- **Browser Extensions**:
  - Kiwi Browser supports a range of Chrome extensions, enhancing functionality and customization options for users.

By following these detailed steps, users can effectively obtain the _U cookie from Bing.com using the "Edit This Cookie" extension in Kiwi Browser on their Android devices. This process ensures secure access to Bing's services and facilitates seamless integration into applications requiring Bing API authentication.

### Contributing

- **Contributions Welcome**:
  - Fork the repository, make changes, and submit pull requests for feature enhancements or bug fixes.

### Support

- **Contact for Help**:
  - Reach out to the project maintainer via email or GitHub issues for assistance.

**Email**: aryanchauhan78577@gmail.com 

**Phone**: +919317171638
 
