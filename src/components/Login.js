import Header from "./Header";
import { useRef, useState } from "react";
import { checkValidator } from "../utils/formValidation";
import { getValue } from "@testing-library/user-event/dist/utils";

const Login = ()=> {

   const [isSigned,setSigned] = useState(true)
   const [errorMessage,setErrorMessage] = useState(null)
    
   const email = useRef(null)
   const password = useRef(null)
   
   const toggleSignUp = ()=> {
       setSigned(!isSigned)
    }
    
    const handleSubmitBtn = ()=> {   
        
      const message =  checkValidator(email.current.value,password.current.value)
      setErrorMessage(message) 
        
    }

    let [isPasswordVisible,setPasswordVisible] = useState(false)
    const handleIconClass = ()=> {
       setPasswordVisible (prevClass=>!prevClass)
    }
    const IconClass = isPasswordVisible?"fa-regular fa-eye":"fa-regular fa-eye-slash"
    const inputType = isPasswordVisible?"text":"password"


return (
   <div className="relative">
       <Header/>

   <div className="absolute bgLogo">
       <img alt="bg-logo"  src="https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_large.jpg"/>
   </div>
     
  <div className=" absolute flex justify-center my-20 mx-auto right-0  left-0  ">
      <div className="p-10 w-96  bg-black/85 ">
       <h1 className="text-white text-3xl font-bold my-2" >{isSigned ? "Sign In":"Sign Up"}</h1>
      <form onSubmit={(e)=>e.preventDefault()} className=" relative text-white  flex flex-col">
        { !isSigned && <input className="py-3 px-3 my-2 border border-white bg-gray-900 rounded-sm text-white" type="text" placeholder="Full Name"/>}

        {/* Email Section */}
         <input ref={email} className="py-3 px-3 my-2 border border-white bg-gray-900 rounded-sm text-white" type="text" placeholder="Email or mobile number"/>
         
         {/* Password Section */}
        <div className="relative flex flex-col">
        <input ref={password} autoComplete="new password" type={inputType} className="py-3 px-3 my-2 border border-white bg-gray-900 rounded-sm text-white" placeholder="Password"/> 
        <span className="password-toggle-icon text-gray-500 absolute right-4 top-5 cursor-pointer" onClick={handleIconClass}><i className={IconClass}></i></span>
         </div>
         <p className="text-red-700">{errorMessage}</p>
         {/* Submit Button */}
       <button type="submit" className="py-3 px-3 my-2 bg-red-600 rounded-lg text-white" onClick={handleSubmitBtn}>{isSigned ? "Sign In":"Sign Up"}</button>
       {isSigned && <div className="flex flex-col justify-center">

        <p className="text-center my-2 font-bold">OR</p>
         <button className="py-3 px-3 my-2 bg-zinc-500/30 rounded-lg text-white">Use a sign-in code</button>
       </div>}
        <p className="text-center my-2 font-bold">Forgot password?</p>
        <div className="my-2">
        <span className="text-gray-300">{isSigned ? "New to Netflix?":"Already a User?"}
            </span> 
           
             <span className="font-bold cursor-pointer hover:underline" onClick={toggleSignUp}> {isSigned ? "Sign Up":"Sign In"}</span>
          
        </div>
        <p className="font-extralight text-sm
        ">Eat a hard-shell taco and instinctively tilt your head to the side to prove you're not a bot.</p>

      </form>
      </div>
   </div>
        Hello From Login Page.
   </div>
)
}

export default Login;

