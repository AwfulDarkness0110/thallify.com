import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import listService from './listService'


const initialState = {
    artists: null,
    tracks: null,
    recent: null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    msg: ''
}





// Create list 
export const topArtists = createAsyncThunk(
    "list/topArtists",
    async (data, thunkAPI) => {
        try {
            const token = thunkAPI.getState().user.user.accessToken;
            const { timeRange } = data;
            return await listService.topArtists({timeRange, token});
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.msg) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);


// Create list 
export const topTracks = createAsyncThunk(
    "list/topTracks",
    async (data, thunkAPI) => {
        try {
            const token = thunkAPI.getState().user.user.accessToken;
            const { timeRange } = data;
            return await listService.topTracks({timeRange, token});
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.msg) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);


// Create list 
export const recentlyPlayed = createAsyncThunk(
    "list/recentlyPlayed",
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().user.user.accessToken;
            return await listService.recentlyPlayed(token);
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.msg) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);


// Create slice
const listSlice = createSlice({
    name: "list",
    initialState,
    reducers: {
        // Reset state
        resetList: (state) => {
            state.artists = null;
            state.tracks = null;
            state.recent = null;
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.msg = '';
        }
    },
    extraReducers: (builder) => {
        builder.addCase(topArtists.fulfilled, (state, action) => {
            state.artists = action.payload.items;
        });
        builder.addCase(topTracks.fulfilled, (state, action) => {
            state.tracks = action.payload.items;
        });
        builder.addCase(recentlyPlayed.fulfilled, (state, action) => {
            state.recent = action.payload.items;
        });
    }
});


// Export reducer
export const { resetList } = listSlice.actions;
export default listSlice.reducer;