import { IPodcastSlice } from '@/core/zustand/slices/podcast-slice'
import axios from 'axios'
import { StateCreator } from 'zustand'

export interface IRestClientSlice {
  loading: boolean
  fetchAll: () => void
  fetchPodcast: (id: string) => void //TODO: change return type to promise<>
  fetchEpisodes: (feedUrl: string) => void //TODO: change return type to promise<>
}

const CORS_PROXY = 'https://api.allorigins.win/get?url='

export const restClientSlice: StateCreator<
  IRestClientSlice & IPodcastSlice,
  [],
  [],
  IRestClientSlice
> = (set) => ({
  loading: false,
  fetchAll: async () => {
    console.log('LOADING...')
    set({ loading: true })
    const response = await axios.get(
      `${CORS_PROXY}https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`
    )
    console.log('LOADED!!!')
    set({ loading: false })
    const podcasts: IFeed = JSON.parse(response.data.contents).feed
    console.log('FETCH ALL: ', podcasts)
    let podlist: IEntry[] = []
    podcasts.entry.forEach((entry) => {
      podlist.push(entry)
    })
    console.log('PODLIST: ', podlist)
    set((state) => ({ podcasts: podlist }))
  },
  fetchPodcast: async (id: string) => {
    const response = await axios.get(
      `${CORS_PROXY}https://itunes.apple.com/lookup?id=${id}`
    )
    console.log('fetchPodcast: ', response.data)
  },
  fetchEpisodes: async (feedUrl: string) => {
    console.log('LOADING...')
    set({ loading: true })
    const rss = await axios.get(`${CORS_PROXY}${feedUrl}`)
    console.log('LOADED!!!')
    set({ loading: false })
    const episodes = JSON.parse(rss.data.contents)
    return episodes
  }
})
