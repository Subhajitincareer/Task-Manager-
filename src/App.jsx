import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import Registration from "./pages/Registration";
import DashboardPage from "./pages/DashboardPage";
import Login from "./pages/Login";
import { Counter } from "./Features/Counter/counter";
import ProtectedRoute from "./components/ProtectedRoute";


 
const App = () => {
  return (
     
  <div className="w-full h-full">
  
<Router>
  <Routes>
    <Route path="/" element={<Mainpage />} />
    <Route path="/signup" element={<Registration/>} />
    <Route  element={<ProtectedRoute/>} >
    <Route path="/dashboard/*"element={<DashboardPage  />} />
    </Route>
     <Route path="/counter" element={<Counter/>} /> 
     <Route path="/login" element={<Login/> } />
   
  </Routes>
</Router>
  </div>
 
  )
};

export default App;