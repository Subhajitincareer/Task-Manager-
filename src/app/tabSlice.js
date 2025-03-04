import  {createSlice} from "@reduxjs/toolkit"

const initialState = {
    value:"Tab 1" 
};

export const TabSlice = createSlice({
    name: 'Tab',
    initialState,
    reducers: {
      Cards: (state) => {
        state.value = "Tab 1"
      },
      Views: (state) => {
        state.value = "Tab 2"
      },
   Automotion:(state) => {
    state.value = "Tab 3"
      },
      
      exception: (state, action) => {
        state.value = action.payload
      },
   },
      
    },)
  
  // Action creators are generated for each case reducer function
  export const { Cards, Views, Automotion, exception } = TabSlice.actions
  
  export default TabSlice.reducer