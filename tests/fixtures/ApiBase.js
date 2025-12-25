import config from '../config/config.js';
import axios from 'axios';

export class ApiBase {
  async getToken(query, variables) {
    try {
      const response = await axios.post(
        config.API_URL,
        {
          query: query,
          variables: variables
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      const token = response.data?.data?.accountLogin?.accessToken;
      return token;
    } catch (error) {
      if (error.response) {
        console.error('Error Data:', error.response.data);
        console.error('Error Status:', error.response.status);
        console.error('Error Headers:', error.response.headers);
      } else {
        console.error('Error Message:', error.message);
      }
      throw error; // nên throw lại để test/framework bắt được lỗi
    }
  }
}
