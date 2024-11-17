import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user:null,
    mode:'light',
    token:null,
    posts:[]
}

export const slice = createSlice({
    name:'paperplane',
    initialState,
    reducers: {
        setMode: function ( state ) {
            state.mode = state.mode === 'light'? 'dark': 'light';
        }
    }
});

export const { setMode } = slice.actions;
export default slice.reducer