import { IRss } from '@/common/interfaces/rss'
import { IRestClientSlice } from '@/common/network/rest/rest-slice'
import { StateCreator } from 'zustand'

export interface IPodcastSlice {
  podcasts: IEntry[]
  podcast: IPodcast
  rss: IRss
}

export const podcastSlice: StateCreator<
  IRestClientSlice & IPodcastSlice,
  [],
  [],
  IPodcastSlice
> = (get, set) => ({
  podcasts: [],
  podcast: {} as IPodcast,
  rss: {} as IRss
})
