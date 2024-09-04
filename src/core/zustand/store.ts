import { IRestClientSlice, restClientSlice } from "@/common/network/rest/rest-slice";
import { create } from "zustand";


export const useBoundStore = create<IRestClientSlice>((...a) => ({
  ...restClientSlice(),
}))