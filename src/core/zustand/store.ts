import {
  IRestClientSlice,
  restClientSlice
} from '@/common/network/rest/rest-slice'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { IPodcastSlice, podcastSlice } from './slices/podcast-slice'

export const useBoundStore = create<IRestClientSlice & IPodcastSlice>()(
  persist(
    (...a) => ({
      ...restClientSlice(...a),
      ...podcastSlice(...a)
    }),
    {
      name: 'podcast store',
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) =>
            ['podcasts', 'podcast', 'rss', 'queryDate'].includes(key)
          )
        )
    }
  )
)
