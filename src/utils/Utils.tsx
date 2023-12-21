import axios from 'axios';
import {getApiUrl} from '../services/ApiService';
export const fetchData = async () => {
  const apiUrl = getApiUrl();
  try {
    const response = await axios.get(apiUrl);
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
