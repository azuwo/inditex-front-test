import { IPodcastSlice } from '@/core/zustand/slices/podcast-slice'
import axios from 'axios'
import { XMLParser } from 'fast-xml-parser'
import { StateCreator } from 'zustand'

export interface IRestClientSlice {
  queryDate: Date
  loading: boolean
  fetchAll: () => void
  fetchPodcast: (id: string) => void
  fetchEpisodes: (feedUrl: string) => void
}

// const CORS_PROXY = 'https://api.allorigins.win/get?url='
const CORS_PROXY = 'https://corsproxy.io/?'

export const restClientSlice: StateCreator<
  IRestClientSlice & IPodcastSlice,
  [],
  [],
  IRestClientSlice
> = (set) => ({
  queryDate: new Date(),
  loading: false,
  fetchAll: async () => {
    set({ loading: true })
    const url =
      CORS_PROXY +
      encodeURIComponent(
        'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
      )
    await axios.get(url).then((response) => {
      const podcasts: IFeed = response.data.feed
      let podlist: IEntry[] = []
      podcasts.entry.forEach((entry) => {
        podlist.push(entry)
      })
      set({ podcasts: podlist })
      set({ loading: false })
    })
  },

  fetchPodcast: async (id: string) => {
    set({ loading: true })
    const uri = encodeURIComponent(`https://itunes.apple.com/lookup?id=${id}`)
    await axios.get(`${CORS_PROXY}${uri}`).then((response) => {
      const podcast = response.data.results[0]
      set({ podcast: podcast })
      set({ loading: false })
    })
  },

  fetchEpisodes: async (feedUrl: string) => {
    set({ loading: true })
    const rss = await axios.get(`${CORS_PROXY}${encodeURIComponent(feedUrl)}`)
    const options = {
      ignoreAttributes: false,
      ignoreNameSpace: false,
      attributeNamePrefix: '_'
    }
    const parser = new XMLParser(options)
    const parsedRss = parser.parse(rss.data)
    if (parsedRss?.rss?.channel !== undefined)
      set({ rss: parsedRss?.rss?.channel })
    set({ loading: false })
  }
})
