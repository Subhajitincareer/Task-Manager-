import { useEffect } from "react"
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setTasks } from "../app/taskSlice";
import Tasklist from "../components/Tasklist";

const Taskspage = () => {
  const tasks = useSelector((state) => state.Task.value);
  const dispatch = useDispatch();
    const setTaskOptions =(value)=>{
  dispatch(setTasks(value))
    }
  useEffect(() => { 
    axios
      .get("http://localhost:3000/api/task/getTasks")
      .then((response) =>   setTaskOptions(response.data) )
      .catch((error) => console.error("Error fetching tasks", error));
  },[] );
  return (
    <div>
<h1> hello page</h1>
      <Tasklist tasks={tasks} />
    </div>
  )
}

export default Taskspage
