import {  configureStore } from '@reduxjs/toolkit'

import postSlice from '../redux/slices/postSlice'

export const store = configureStore({
    reducer:{
        postState:postSlice
    }
})