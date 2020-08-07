import axios from 'axios';

const apiUrl = 'https://api.giphy.com/v1/gifs';
const apiKey = 'gKGxykKe4GBq5mhCxdQflK124tsUCVQ5';

const fetchTrendingGifs = async ({ limit = 25, rating = 'g' }) => {
  try {
    const response = await axios
      .get(`${apiUrl}/trending?api_key=${apiKey}&limit=${limit}&rating=${rating}`)
      .catch((e) => {
        throw e.message;
      });

    return response;
  } catch (error) {
    return { error, data: null };
  }
};

const searchGifs = async ({ limit = 25, offset = 0, q, rating = 'g' }) => {
  try {
    console.log(offset);
    const response = await axios
      .get(`${apiUrl}/search?api_key=${apiKey}&q=${1}&offset=${offset}&limit=${limit}&rating=${rating}`)
      .catch((e) => {
        throw e.message;
      });

    return response;
  } catch (error) {
    return { error, data: null };
  }
};
const giphyAPI = { fetchTrendingGifs, searchGifs };

export default giphyAPI;
