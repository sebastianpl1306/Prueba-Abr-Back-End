import axios from 'axios';
import { getEnvironments } from '../helpers';

const { VITE_API_URL } = getEnvironments();

const schoolApi = axios.create({
    baseURL: VITE_API_URL
});

export default chiriviApi;