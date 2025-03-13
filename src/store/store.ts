import { authApi } from "@/services/authApi"
import { mangaApi } from "@/services/mangaApi"
import authReducer from "@/store/authSlice"
import mangaReducer from "@/store/mangaSlice"
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
  reducer: {
    [mangaApi.reducerPath]: mangaApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    manga: mangaReducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(mangaApi.middleware, authApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
