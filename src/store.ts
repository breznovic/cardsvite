import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../src/features/posts/postsSlice';
import usersReducer from '../src/features/users/usersSlice';

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer
    }
})