export function getImage(inputValue) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api';
  const params = new URLSearchParams({
    key: '43094925-102acc99687b818cc3e092daf',
    q: inputValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `${BASE_URL}${END_POINT}?${params}`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
