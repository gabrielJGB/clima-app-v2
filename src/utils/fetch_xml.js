// utils/api.js


const PROXY_URL = 'https://api.allorigins.win/raw?url';


export default async (URL,req) => {


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
