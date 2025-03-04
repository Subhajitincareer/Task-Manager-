


const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <form action="" className="border w-[200px] h-[350px] rounded-md ">
        <h2 className="text-center">Login</h2>
        <div className=" mt-14 h-auto"><label htmlFor="name" className="">Email</label>
<input type="text" className="ml-2 outline hover:outline-red-400"/>
        <label htmlFor="password" className="">Password</label>
        <input type="password" className="ml-2 outline hover:outline-red-400"/>
        <div className="flex justify-center mt-4 p-2"><button className="border w-25 rounded-md bg-green-400 hover:bg-green-500  text-white p-1">Login</button></div>
</div>


      </form>
    </div>
  )
}

export default Login
