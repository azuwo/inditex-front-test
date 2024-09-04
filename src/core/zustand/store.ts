import {
  IRestClientSlice,
  restClientSlice
} from '@/common/network/rest/rest-slice'
import { create } from 'zustand'
import { IPodcastSlice, podcastSlice } from './slices/podcast-slice'

export const useBoundStore = create<IRestClientSlice & IPodcastSlice>(
  (...a) => ({
    ...restClientSlice(...a),
    ...podcastSlice(...a)
  })
)
