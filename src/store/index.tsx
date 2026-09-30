import { combineReducers,configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import cvReducer from './cv-reducer'
import templateReducer from './template-reducer'
import pageReducer from './page-reducer'
import colorSchemeReducer from './color-scheme-reducer';
const rootReducer = combineReducers({
       cv: cvReducer,
       //tp: templateReducer,
       page: pageReducer,
       colorScheme: colorSchemeReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export type RootState = ReturnType<typeof store.getState>

//export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
