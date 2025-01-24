const express = require('express');
const querystring = require('querystring');
const axios = require('axios');
require('dotenv').config({ path: '.env.local' });

const app = express();
const PORT = 3001;

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = `http://localhost:${PORT}/callback`;
const SCOPE = 'user-read-recently-played user-top-read';

app.get('/login', (req, res) => {
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: CLIENT_ID,
      scope: SCOPE,
      redirect_uri: REDIRECT_URI,
    }));
});

app.get('/callback', async (req, res) => {
  const code = req.query.code || null;

  try {
    const response = await axios({
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      params: {
        code: code,
        redirect_uri: REDIRECT_URI,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    const { access_token, refresh_token } = response.data;
    
    res.send(`
      <h1>Success! Here are your tokens:</h1>
      <p>Add this refresh token to your .env.local file:</p>
      <pre>SPOTIFY_REFRESH_TOKEN=${refresh_token}</pre>
      <p>Keep this token safe and never share it publicly!</p>
    `);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error);
    res.send('Error getting tokens');
  }
});

app.listen(PORT, () => {
  console.log(`
  🎵 Spotify Token Generator is running!
  
  1. Make sure your Spotify app has http://localhost:${PORT}/callback
     set as a Redirect URI in your Spotify Developer Dashboard
     
  2. Visit http://localhost:${PORT}/login to start the authorization process
  
  3. After authorizing, you'll get your refresh token to add to .env.local
  `);
});
