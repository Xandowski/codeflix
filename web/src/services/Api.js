import axios from 'axios';
const KEY = 'AIzaSyAsf96_LYlum-nRDjHZDz8J-sOl69y6fJw';

const api =  axios.create({
  baseURL: 'https://developers.google.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});

export default api;