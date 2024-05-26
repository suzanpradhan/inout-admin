import { createSlice } from "@reduxjs/toolkit";

// API response
type LoginResponse = {
    token: string;
    userEmail: string;
    userName: string;
    id: string;
};

type InitialState = {
    value: AuthState;
}

type AuthState = {
    isAuth: boolean;
    username: string;
    uid: string;
    token: string;
}

const initialState: Partial<LoginResponse> = {};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: () => {
            return
        }
    },
});

export const authReducer = authSlice.reducer;
