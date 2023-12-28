import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../types/dataTypes";
// import { ErrorPayload } from "vite/types/hmrPayload.js";


type InitialStateType = {
    user?: UserType,
    isLoading?: boolean,
    isError?: boolean,
    isSuccess?: boolean,
    error?: string
}

const initialState: InitialStateType = {
    user: {
        fullName: "",
        email: "",
        _id: ""
    },
    isLoading: false,
    isError: false,
    isSuccess: false,
    error: ''
}

export const fetchUser = createAsyncThunk('user/fetchUser', async (token) => {
    const response = await fetch(`${process.env.SERVER_API}/user/me`, {
        headers: {
            authorization: `Bearer ${token}`,
        },
    });
    const data = await response.json();
    return data?.data;
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logOut: (state) => {
            state.user = {
                email: '',
                fullName: "",
                _id: ""
            };
        },
        setUser: (state, action: PayloadAction<UserType>) => {
            state.user = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.isSuccess = false;
                state.error = '';
            })
            .addCase(fetchUser.fulfilled, (state, action: PayloadAction<UserType>) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.user = action.payload;
                state.error = '';
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = false;
                state.error = action.error.message;
            });
    },
});


export const { logOut, setUser } = userSlice.actions;
export default userSlice.reducer;