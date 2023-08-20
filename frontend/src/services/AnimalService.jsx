const BASE_URL = 'https://localhost:7289';
const API_ENDPOINT = '/api/animals';

export async function fetchAnimals() {
  const response = await fetch(BASE_URL + API_ENDPOINT);

  if (!response.ok) {
    // Handle network error
    throw new Error('Failed to fetch animals. Server might be unavailable.');
  }

  try {
    const data = await response.json();
    return data;
  } catch (error) {
    // Handle non-network error
    throw new Error('Error parsing response data: ' + error.message);
  }
}
