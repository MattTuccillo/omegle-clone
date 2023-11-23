import { configureStore } from "@reduxjs/toolkit";
import webSocketSlice from "@/features/websockets/webSocketSlice";
import userSlice from "@/features/websockets/userSlice";
import messageSlice from "@/features/websockets/messageSlice";
// ...

export const store = configureStore({
  reducer: {
    webSocketReducer: webSocketSlice,
    userReducer: userSlice,
    messageReducer: messageSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
