const API_KEY = '19045018-7ef62a7ed2607017cbe478eaf';
const API_URL = 'https://pixabay.com/api/';

async function fetchImages(query, page) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    page: page,
    per_page: 12,
    image_type: 'photo',
    orientation: 'horizontal',
  });

  const url = `${API_URL}?${searchParams}`;

  const fetchImg = await fetch(url);
  const images = await fetchImg.json();

  return images;
}

const imageApi = { fetchImages };

export default imageApi;
