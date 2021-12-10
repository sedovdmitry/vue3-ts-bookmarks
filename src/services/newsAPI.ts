import axios from 'axios';
import { NewsAPITypes } from '@/types/NewsApi.Interface';

async function fetchBookmarks(page: number, pageSize: number): Promise<NewsAPITypes | null> {
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us', {
      params: {
        apiKey: process.env.VUE_APP_NEWSAPIKEY,
        page,
        pageSize,
      },
    });
    return response.data;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export default fetchBookmarks;
