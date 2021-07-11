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

//export functions to use them in other files
export const { setUserLoginDetails, setsignOutState } = userSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;