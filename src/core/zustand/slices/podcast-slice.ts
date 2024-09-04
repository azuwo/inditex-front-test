import { IRestClientSlice } from '@/common/network/rest/rest-slice'
import { StateCreator } from 'zustand'

export interface IPodcastSlice {
  podcasts: IEntry[]
  podcast: IEntry
  episode: any //TODO: create episode Interface based on fetched data
}

export const podcastSlice: StateCreator<
  IRestClientSlice & IPodcastSlice,
  [],
  [],
  IPodcastSlice
> = (get, set) => ({
  podcasts: [],
  podcast: {} as IEntry,
  episode: {}
})
