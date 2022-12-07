import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reLoading } from "./Loading.js";
import { reSearch } from "./Search.js";


const reducer = combineReducers({
    loading: reLoading,
    search: reSearch,
});

export const Store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false,
        }),
});
