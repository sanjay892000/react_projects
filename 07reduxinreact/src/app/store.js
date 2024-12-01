import { configureStore } from "@reduxjs/toolkit";

import counterReducer from '../feature/counter/counterSlice'

export const store = configureStore({
    reducer:{
        counter:counterReducer  // import counter reducer from counterSlice.js file
    } //all reducer fill in {}
})