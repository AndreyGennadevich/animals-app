import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {animalsAPI} from "../services/AnimalService";
import {authenticationAPI} from "../services/LoginService";
import {todayAPI} from "../services/TodayService";

const rootReducer = combineReducers({
    [animalsAPI.reducerPath]: animalsAPI.reducer,
    [authenticationAPI.reducerPath]: authenticationAPI.reducer,
    [todayAPI.reducerPath]: todayAPI.reducer,
})

export const setupStore= () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(animalsAPI.middleware).concat(authenticationAPI.middleware).concat(todayAPI.middleware)
    })
}