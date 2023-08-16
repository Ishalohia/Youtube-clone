import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";
import SearchSlice from "./SearchSlice";
import videoReducer from './VideoSlice';
import chatSlice from "./ChatSlice";

const store = configureStore(
    {
        reducer: {
            app: AppSlice,
            video: videoReducer,
            search: SearchSlice, 
            chat: chatSlice,
        }
    }
)

export default store;

