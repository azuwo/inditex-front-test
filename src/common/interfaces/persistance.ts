import { IPodcastSlice } from '../../core/zustand/slices/podcast-slice'
import { IRestClientSlice } from '../network/rest/rest-slice'

export interface IPersistance {
  state: IRestClientSlice & IPodcastSlice
}
