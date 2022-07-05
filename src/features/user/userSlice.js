import { createSlice } from '@reduxjs/toolkit';

// get user from local storage
const user = JSON.parse(localStorage.getItem("user"));


const initialState = {
    user: user || null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    msg: ''
}

// create slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetUser: (state) => {
            state.accessToken = null;
            state.expiresIn = null;
            state.loginTime = null;
            state.user = null;
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.msg = '';
        },
        setUser: (state, action) => {
            const data = {
                accessToken: action.payload.accessToken,
                expiresIn: action.payload.expiresIn,
                loginTime: Date.now().toString()
            }

            state.user = data;
            localStorage.setItem("user", JSON.stringify(data));
        }
    }, 
});


// export reducer
export const { resetUser, setUser } = userSlice.actions;
export default userSlice.reducer;