import { Link} from "react-router-dom";
import { MdHome } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import { FaCalendarAlt } from "react-icons/fa";
import { TbReportAnalytics } from "react-icons/tb";
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { MdSupportAgent } from "react-icons/md";
import { CiLogout } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div className="w-full h-full  ">
      <aside className="grid grid-rows-6 h-full ">
        <div className="row-span-1 grid grid-rows-2 ">
          <div className="flex items-center justify-center h-full row-span-1 ">
            {" "}
            <h1>Task manager app</h1>
          </div>
          <div className="bg-blue-900">

          </div>
        </div>
        <div className="row-span-5 bg-blue-900">
            <nav className="w-full h-full">
              <ul className="w-full h-full grid grid-row-6 gap-2">
                <li className="flex justify-center items-center text-white hover:bg-blue-700 pointer cursor-pointer row-span-1">
                  <Link to="/dashboard/homepage" className="flex justify-center items-center gap-2"> <MdHome size={30}/> Home</Link>
                </li>
                <li className="flex justify-center items-center text-white hover:bg-blue-700 row-span-2">
                  <Link to="/dashboard/tasks"  className="flex justify-center items-center gap-2"><FaTasks size={25}/> Tasks</Link>
                </li>
                <li className="flex justify-center items-center  text-white hover:bg-blue-700 cursor-pointer">
                  <Link to="/dashboard/Projects"className="flex justify-center items-center gap-2"> <GoProject size={25}/>Projects</Link>
                </li>
                <li className="flex justify-center items-center  text-white hover:bg-blue-700  cursor-pointer">
                  <Link to="/dashboard/Calendar"className="flex justify-center items-center gap-2"><FaCalendarAlt size={25}/>Calendar</Link>
                </li>
                <li className="flex justify-center items-center  text-white hover:bg-blue-700 cursor-pointer">
                  <Link to="/dashboard/Reports"className="flex justify-center items-center gap-2"><TbReportAnalytics size={30}/>  Reports</Link>
                </li>
                <li  className="flex justify-center items-center  text-white hover:bg-blue-700  cursor-pointer"><Link to="/dashboard/Setting"className="flex justify-center items-center gap-2"><IoSettingsSharp size={25} />Setting</Link></li>
                <li className="flex justify-center items-center  text-white hover:bg-blue-700  cursor-pointer">
                  <Link to="/dashboard/Notifications"className="flex justify-center items-center gap-2"><IoMdNotifications size={25}/> Notifications</Link>
                </li>
                <li className="flex justify-center items-center text-white hover:bg-blue-700  cursor-pointer">
                  <Link to="/dashboard/Help&Support"className="flex justify-center items-center gap-2"><MdSupportAgent size={25}/>Help & Support</Link>
                </li>
                <li className="flex justify-center items-center  text-white hover:bg-blue-700  cursor-pointer">
                  <Link to="/dashboard/Logout"className="flex justify-center items-center gap-2"><CiLogout  size={25}/>Logout</Link>
                </li>
              </ul>
            </nav>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
