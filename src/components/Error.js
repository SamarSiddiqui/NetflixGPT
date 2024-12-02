import { useRouteError } from "react-router"
import { Netflix_Logo } from "../utils/constants"
import { Link } from "react-router-dom"

const Error = () =>{
    const {error} = useRouteError()
    
    return(
        <div className=" flex items-center justify-center text-white h-screen  text-center">
            <div className="bg-black/20 w-1/2 h-1/2  shadow-2xl shadow-gray-500/20  ">
            <div className="flex justify-center">
               <img src={Netflix_Logo} className=" w-40" alt="NetflixLogo"/>
            </div>     

        <h1 className=" text-3xl my-3">Something went wrong</h1>
        <p className="m-1 text-lg">Sorry, we're having trouble with your request. {error.message}</p>
        <Link to={'/browse'}>
        <button className="bg-red-700 p-2 w-1/2 m-5">Return to Home Page</button>
        
        </Link>
            </div>
            
        </div>
    )
}

export default Error