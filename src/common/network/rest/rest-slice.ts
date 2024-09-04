
import axios from 'axios';

export interface IRestClientSlice {
  fetchAll: () => void,
  fetchPodcast: (id: string) => void,
  fetchEpisodes: (feedUrl: string) => void
}

const CORS_PROXY = "https://api.allorigins.win/get?url=";

export const restClientSlice = () => ({
    fetchAll: async () => {
        const response = await axios.get(`${CORS_PROXY}https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`);
        console.log("fetchAll: ", response.data);
    },
    fetchPodcast: async (id:string) => {
        const response = await axios.get(`${CORS_PROXY}https://itunes.apple.com/lookup?id=${id}`);
        console.log("fetchPodcast: ", response.data);
    },
  fetchEpisodes: async (feedUrl: string) => {
        const rss = await axios.get(`${CORS_PROXY}${feedUrl}`);
        console.log("fetchEpisodes: ", rss);
    }

 })