const express = require('express');
const axios = require ('../../web/node_modules/axios');
const app = expres();
const cors = require('cors');

app.use(cors());

app.get('/search', (req, res) => {
  axios.post(
    'baseURL: https://developers.google.com/youtube/v3',{
    params: {
      part: 'snippet',
      maxResults: 5,
      key: KEY,
    },
    headers: {"Access-Control-Allow-Origin": "*"}
  }).then(function(response){
    console.log(response.data);
  });
  return res.json({teste:1})
});

app.listen(3333);