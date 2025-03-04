import  {createSlice} from "@reduxjs/toolkit"

const initialState = {
    value:[],
};

export const TaskSlice = createSlice({
    name: 'Task',
    initialState,
    reducers: {
     
       setTasks: (state, action) => {
        state.value = action.payload
      },
   },
     
    },)
  
  // Action creators are generated for each case reducer function
  export const { setTasks } = TaskSlice.actions
  
  export default TaskSlice.reducer