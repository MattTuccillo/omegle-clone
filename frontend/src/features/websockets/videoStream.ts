import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";

interface VideoInterface {
  stream: MediaStream | null;
}

interface PayloadInterface {
  stream: MediaStream;
}

let VideoState: VideoInterface = {
  stream: null,
};

const videoSlice = createSlice({
  name: "video",
  initialState: VideoState,
  reducers: {
    addStream: (state, action: PayloadAction<PayloadInterface>) => {
      state.stream = action.payload.stream;
    },
  },
});

export const { addStream } = videoSlice.actions;
export const selectVideoStream = (state: RootState) =>
  state.videoReducer.stream;
export default videoSlice.reducer;
