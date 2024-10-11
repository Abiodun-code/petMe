import {configureStore} from '@reduxjs/toolkit'
import registerReducer from './not-authenticated/registerSlice'
export const store = configureStore({
  reducer: {
    register: registerReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>