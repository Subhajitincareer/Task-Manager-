import signupPng from "../assets/Sign up-cuate.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../app/authSlice";
import { useNavigate} from "react-router-dom";

  

const Registration = () => {
const navigate=useNavigate()
const [ FormData , setFormData]=useState({
  name: "",
  email: "",
  password: "",
})
const dispatch = useDispatch();
const { loading, error } = useSelector((state) => state.auth);

const handleChange=(e)=>{
  setFormData({...FormData, [e.target.name]: e.target.value })
}

const handleSubmit = async (e) => {
  e.preventDefault();
  
 dispatch(signUp(FormData))

 if (loading===true){
  navigate("/dashboard")
 }

  

}



  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 flex justify-center items-center">
      <div>
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-center text-2xl font-bold">Create an Account</h2>
          {/* Rest of the registration form */}
        <form onSubmit={handleSubmit}>
            {/* Input fields */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-bold text-gray-700 ">Username</label>
              <input type="text"  value={FormData.name}  onChange={handleChange   } id="name" name="name" label="name" className="w-full px-3 py-2 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-black focus:ring-blue-500 border border-black" />
            </div>

 <div className="mb-4">
              <label htmlFor="Email" className="block text-sm font-bold text-gray-700 ">Email</label>
              <input type="text"   value={FormData.email}  onChange={handleChange}id="Email" name="email" label="Email" className="w-full px-3 py-2 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-black focus:ring-blue-500 border border-black" />
            </div>

            {/* Password field */}
            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-bold text-gray-700">Password</label>
                <input type="password"   value={FormData.password}  onChange={handleChange
                } id="password" name="password" label="password" className="w-full px-3 py-2 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-black focus:ring-blue-500 border border-black" />
            </div>

  <div className="flex justify-center items-center mt-4">
          <button className="w-24 h-8 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600" type="submit" disabled={loading}>Sign Up</button>
       </div>
       
        </form>
       {error&& <Link to="/login"> <p className="text-center  text-red-500 hover:text-red-800"> {error.message}</p></Link> } 
        </div>
      
        <div className="flex justify-center items-center mt-4">
          <p className="text-center text-sm">Already have an account? <Link to="/login" className="text-blue-500">Login</Link></p>
        </div>
      </div>
      </div>
      <div className="w-1/2 flex justify-center items-center bg-blue-100">
      <img src={signupPng} alt="signupPng" />
      </div>
    </div>
  )
} 


export default Registration;

