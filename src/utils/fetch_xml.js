// utils/api.js


const PROXY_URL = 'https://api.allorigins.win/raw?url';
const req = { headers: { 'X-Requested-With': 'XMLHttpRequest' } }

// Función para realizar una solicitud GET a la API
export default async (URL) => {
  try {
    const response = await fetch(`${PROXY_URL}=${URL}`,req);

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const str = await response.text();
    const data =  (new window.DOMParser()).parseFromString(str, "text/xml")

    return data;

  } catch (error) {
    console.error('Error during GET request:', error);
    throw error;
  }
};
