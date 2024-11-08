
// import { Link } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";

const Login = ()=> {

    const [isSigned,setSigned] = useState(true)
    const toggleSignIn = ()=> {
       setSigned(!isSigned)
        
    }
return (
   <div className="relative">
       <Header />

   <div className="absolute bgLogo">
       <img alt="bg-logo"  src="https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_large.jpg"/>
   </div>
     
  <div className=" absolute flex justify-center my-20 mx-auto right-0  left-0  ">
      <div className="p-10 w-96  bg-black/85 ">
       <h1 className="text-white text-3xl font-bold my-2">{isSigned?"Sign In":"Sign Up"}</h1>
      <form className=" text-white  flex flex-col">
        {!isSigned && <input className="py-3 px-3 my-2 border border-white bg-gray-900 rounded-sm text-white" type="text" placeholder="Full Name"/>}
         <input className="py-3 px-3 my-2 border border-white bg-gray-900 rounded-sm text-white" type="text" placeholder="Email or mobile number"/>
        <input type="text" className="py-3 px-3 my-2 border border-white bg-gray-900 rounded-sm text-white" placeholder="Password"/>
       <button className="py-3 px-3 my-2 bg-red-600 rounded-lg text-white">{isSigned?"Sign In":"Sign Up"}</button>
        <p className="text-center my-2 font-bold">OR</p>
        <button className="py-3 px-3 my-2 bg-zinc-500/30 rounded-lg text-white">Use a sign-in code</button>
        <p className="text-center my-2 font-bold">Forgot password?</p>
        <div className="my-2">
        <span className="text-gray-300">{isSigned?"Already a User?":"New to Netflix?"}
            </span>
                       
            <span className="font-bold cursor-pointer hover:underline" onClick={toggleSignIn}> {isSigned?"Sign Up": "Sign In"}</span>
          
        </div>
        <p className="font-extralight text-sm
        ">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>

      </form>
      </div>
   </div>
        Hello From Login Page.
   </div>
)
}

export default Login;

