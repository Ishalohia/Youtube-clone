import { createSlice } from '@reduxjs/toolkit';
import { LIVE_CHAT_COUNT } from './config';

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        message: [],
        },
    reducers: {
        addMessage: (state, action) => {
           state.message.splice(LIVE_CHAT_COUNT, 1);   // to remove the top  message from the array after every 10 messages to make the UI look cool
            state.message.unshift(action.payload);   //using unsift to make the UI look cool for live chat like it is coming from top and make the column reverse
        }
    }
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;