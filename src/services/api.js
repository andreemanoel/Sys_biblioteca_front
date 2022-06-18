import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost/AppFacilita_test/backend/public'
});

export default instance;
