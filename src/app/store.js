import { configureStore } from '@reduxjs/toolkit'
import reducer from '../features/reducer';

const store = configureStore({
    reducer: reducer // If 'reducer' is a single reducer function or an object of reducers
  })

export default store;