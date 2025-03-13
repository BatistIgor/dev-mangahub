import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AuthState {
    token: string | null
}

const initialState: AuthState = {
    token: null,
}

interface CredentialsPayload {
    accessToken: string
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<CredentialsPayload>) => {
            const { accessToken } = action.payload
            state.token = accessToken
        },
        logOut: (state) => {
            state.token = null
        },
    },
})

export const { setCredentials, logOut } = authSlice.actions
export default authSlice.reducer

import { RootState } from "@/store/store"

export const selectCurrentToken = (state: RootState) => state.auth.token