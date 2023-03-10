import axios from 'axios';

const baseURL = 'https://exxpress-server-for-ai-chat-app.onrender.com';

export const restClient = axios.create({
  baseURL,
  timeout: 30000,
});
