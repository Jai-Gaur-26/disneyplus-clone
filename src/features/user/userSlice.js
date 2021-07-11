import {createSlice} from '@reduxjs/toolkit';

//when the app starts, keep everything empty ""
const initialState = {
    name:"",
    email:"",
    photo:"",
}

const userSlice = createSlice({
    name:'user',
    initialState, 
    reducers: {
        setUserLoginDetails: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
        },

        setsignOutState: state => {
            state.name = null;
            state.email = null;
            state.photo = null;
        }
    },
});