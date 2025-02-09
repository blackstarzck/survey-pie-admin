import axios from 'axios';
import useSWR from 'swr';

axios.defaults.baseURL = 'http://localhost:3001';

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default fetcher;
