import { LuSearch } from "react-icons/lu";
import {
  Avatar,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
  TextField,
} from "@mui/material";
import { useState, useEffect } from "react";
import Countcard from "../components/Countcard";
import axios from "axios";
import Tasklist from "../components/Tasklist";
import { useSelector, useDispatch } from "react-redux";
import { setTasks } from "../app/taskSlice";




const initialValues = {
  title: "",
  description: "",
  status: "pending",
  priority: "low",
};



const Homepage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(initialValues);
  const [wordcount, setWordcount] = useState(0);


  const tasks = useSelector((state) => state.Task.value);
  const dispatch = useDispatch();

  const setTaskOptions =(value)=>{
dispatch(setTasks(value))
  }

const length={
  pending: tasks.filter(task => task.status==="pending").length,
  complete: tasks.filter(task => task.status==="complete").length,
  total: tasks.length,
   inProgress:tasks.filter(task=>task.status==="in-progress").length,
overdue: tasks.filter(task=>task.status==="overdue").length,

}
;



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 const handleChange = (e) => {
    const { name, value: inputValue } = e.target;
    setValue({
      ...value,
      [name]: inputValue,
    });

    if (name === "description") {
      setWordcount(inputValue.length);
      if (inputValue.length > 500) {
        alert("Description should not exceed 500 characters");
        setWordcount(500);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/task/createTask",
        value
      );
      setTaskOptions([...tasks, response.data])
      setValue(initialValues);
      setOpen(false);
      setWordcount(0);
    } catch (error) {
      console.error("Error creating task", error);
    }
    try {
  const  response=await axios.get("http://localhost:3000/api/task/getTasks")
setTaskOptions(response.data)
     
    } catch (error) {
      console.error("Error getting tasks", error);
    }
    
  };

  useEffect(() => { 
    axios
      .get("http://localhost:3000/api/task/getTasks")
      .then((response) =>   setTaskOptions(response.data) )
      .catch((error) => console.error("Error fetching tasks", error));
  }, []);

  return (
    <div>
      <header className="w-full h-16 bg-amber-500 flex items-center justify-center ">
        <div className="bg-white flex w-1/2 h-8 rounded-sm">
          <LuSearch className="text-[30px]" />
          <input
            type="text"
            placeholder="Search"
            className="bg-white w-full focus:outline-none rounded-md"
          />
        </div>

        {/* button for pop-up form to add task */}
        <div className="absolute right-25">
          <Button
            variant="contained"
            color="primary"
            className="bg-blue-400"
            onClick={handleClickOpen}
          >
            Add tasks
          </Button>

          {/* Dialog Components */}
          <Dialog open={open} onClose={handleClose}>
            <DialogContent>
              <DialogTitle>Add your task</DialogTitle>
              <form onSubmit={handleSubmit}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="title"
                  name="title"
                  label="Title"
                  type="text"
                  fullWidth
                  variant="outlined"
                  value={value.title}
                  onChange={handleChange}
                  required
                />
                <TextField
                  margin="dense"
                  id="description"
                  label="Description"
                  name="description"
                  multiline
                  rows={4}
                  value={value.description}
                  fullWidth
                  variant="outlined"
                  onChange={handleChange}
                  required
                />
                <p>{wordcount}/500</p>
                <div className="flex justify-between">
                  <div>
                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                      <InputLabel>Priority</InputLabel>
                      <Select
                        name="priority"
                        value={value.priority}
                        onChange={handleChange}
                        autoWidth
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="low">Low</MenuItem>
                        <MenuItem value="medium">Medium</MenuItem>
                        <MenuItem value="high">High</MenuItem>
                      </Select>
                    </FormControl>
                  </div>

                  <div>
                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                      <InputLabel>Status</InputLabel>
                      <Select
                        name="status"
                        value={value.status}
                        onChange={handleChange}
                        autoWidth
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="pending">Pending</MenuItem>
                        <MenuItem value="in-progress">In-progress</MenuItem>
                        <MenuItem value="complete">Complete</MenuItem>
                      </Select>
                    </FormControl>
                  </div>

                  <div className="flex justify-center align-center h-16">
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="w-16 absolute right-6">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </div>
      </header>

      {/* Count card */}
      <Countcard  measure={length }/>

      {/* Task card */}

           <Tasklist tasks={tasks} />
    <div></div>
   
    </div>
  );
};

export default Homepage;
