import Sidebar from "../components/Sidebar";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./Homepage";
import Taskspage from "./Taskspage";
import Setting from "./Setting";
import Projects from "./Projects";
import Reports from "./Reports";
import Notifications from "./Notifications";
import HelpSupport from "./HelpSupport";
import { FiMenu } from "react-icons/fi";
import { HiMiniPlus } from "react-icons/hi2";
import { useSelector, useDispatch } from "react-redux";
import { Cards, Views } from "../app/tabSlice";
import { MdQuestionMark } from "react-icons/md";
import CalendarPage from "../components/CalendarPage";
import Popup from 'reactjs-popup';

const DashboardPage = () => {
  const dispatch = useDispatch();
  const Tab = useSelector((state) => state.Tab.value);
  const displaySidebar = () => {
    if (Tab === "Tab 1") {
      dispatch(Views());
    } else if (Tab === "Tab 2") {
      dispatch(Cards());
    }
  };
  return (
    <div className="w-full h-full">
      <div className="w-full h-[49px] flex space-x-19 items-center sticky top-1 bg-white">
        <div className="w-[30%] h-[32px] border ">
          <div className="flex pl-5 space-x-2">
            {" "}
            <div className="w-[28px] h-[28px] flex justify-center items-center ">
              <FiMenu size={28} onClick={displaySidebar} />
            </div>
          
            <Popup trigger={  <div className="flex space-x-1 items-center border rounded-[100px] w-[86px] h-[32px] p-1.5" >
              <div className="w-[20px] h-[20px] bg-[#ff584a] flex justify-center items-center rounded-3xl ">
                <HiMiniPlus size={16} className="text-white" />
              </div>
              <span className="md:hidden sm:hidden xl:block">Create</span>
            </div>} position="right center">
              <button className="w-[150px] h-[40px] text-white bg-blue-500 rounded-md hover:bg-blue-600"> 
                <Link to="/">home</Link>
              </button>
            </Popup>
          </div>
        </div>
        <div className="w-[30%] h-[32px] border"></div>
        <div className="w-[30%] h-[36px] border flex justify-end ">
          <div className="w-[25.32%] border h-[36px] flex  space-x-2 items-center pl-1.5 ">
            <div  className="border w-[28px] h-[28px] flex justify-center items-center rounded-3xl"><MdQuestionMark /></div>
            <div className="border w-[28px] h-[28px] rounded-3xl"></div>
            <span className="border w-[28px] h-[28px] rounded-3xl"></span>
          </div>
        </div>
      </div>
      <div className=" w-full h-full lg:flex">
        {" "}
        {/* this div for side bar */}
        {Tab === "Tab 2" && (
          <div className="h-full w-[20%]  ">{<Sidebar />}</div>
        )}{" "}
        {/* this div for main content */}
        <div className="w-[80%] h-full" >
          <Routes>
            <Route exact path="/homepage" element={<Homepage />} />
            <Route path="/tasks" element={<Taskspage />} />
            <Route path="/Calendar" element={<CalendarPage />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Reports" element={<Reports />} />
            <Route path="/Notifications" element={<Notifications />} />
            <Route path="/HelpJ&Support" element={<HelpSupport />} />
          </Routes>
        </div>{" "}
      </div>
    </div>
  );
};

export default DashboardPage;
