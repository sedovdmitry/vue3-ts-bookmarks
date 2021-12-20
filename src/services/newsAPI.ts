import axios from 'axios';
import { NewsAPITypes } from '@/types/NewsApi.Interface';

async function fetchBookmarks(page: number, max: number): Promise<NewsAPITypes | null> {
  try {
    const response = await axios.get('https://gnews.io/api/v4/top-headlines?country=us', {
      params: {
        token: process.env.VUE_APP_GNEWS,
        page,
        max,
      },
    });
    return response.data;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export default fetchBookmarks;
