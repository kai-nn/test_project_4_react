import {configureStore} from '@reduxjs/toolkit'
import diagramSlice from "./diagramSlice";


export const store = configureStore({
    reducer: {
        diagram: diagramSlice,
    }
})