import { configureStore } from '@reduxjs/toolkit'
// RTK Query
import { setupListeners } from '@reduxjs/toolkit/query'
import { ImbdApi } from './features/ImbdApiSlice'

export const store = configureStore({
  reducer: {
    [ImbdApi.reducerPath]: ImbdApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ImbdApi.middleware),
})

setupListeners(store.dispatch)