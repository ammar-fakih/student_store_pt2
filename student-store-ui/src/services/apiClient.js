import axios from 'axios';

class ApiClient {
  constructor(remoteHostUrl) {
    this.remoteHostUrl = remoteHostUrl;
    this.token = null;
  }
  setToken(token) {
    this.token = token;
  }
  async request({ endpoint, method = 'GET', data = null }) {
    const headers = {
      ContentType: 'application/json',
    };

    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
    }
    try {
      const res = await axios({
        method,
        url: this.remoteHostUrl + endpoint,
        data,
        headers,
      });
      return { data: res, error: null };
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ApiClient(
  process.env.REACT_APP_REMOTE_HOST_URL || 'http://localhost:3001'
);