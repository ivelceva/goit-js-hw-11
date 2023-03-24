import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '34676679-0f1cc162f6f579de89d9fb21c';

export async function fetchArticles(query, page, perPage) {
  const response = await axios.get(
    `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  );
  return response;
}
