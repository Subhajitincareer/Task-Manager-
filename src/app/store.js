import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Features/Counter/counterSlice.js'
import TabReducer from "../app/tabSlice.js"
import TaskReducer from "../app/taskSlice.js"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    Tab:TabReducer,
    Task: TaskReducer,

  },
})

const state=store.getState()
console.log(state)