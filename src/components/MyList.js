import { useDispatch, useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import { clearList } from "../utils/myListSlice";
const MyList = ()=> {
    const myList = useSelector((store)=>store?.mylist?.addedItems)
    
    const dispatch = useDispatch()
    
    const handleClearList = ()=> {
        dispatch(clearList())
    }
    return (
        
        
        <div className="text-white relative z-50 top-14 border ">
         {myList.length===0? (
          <div className="flex justify-center m-4">
                    
          <h1>My List Is Empty. Please Add.</h1>
          </div>):

         (
         
         <>
         <div className="border text-right">
            <button onClick={handleClearList} className="border bg-white px-3 font-bold text-xl py-2 m-3 text-black rounded-md cursor-pointer hover:bg-gray-100 hover:scale-105">Clear List
            <i className="fa-solid fa-trash ml-1"></i>
            </button>
            </div>

            <div className="text-white border ">
            
            {   myList.length===0?(
                    <div className="flex justify-center m-4">
                    
                    <h1>My List Is Empty. Please Add.</h1>
                    </div>
                ):(
                    <div className="flex  flex-wrap ">
                    {
                      myList.map((movie)=>(
                       <MovieCard key={movie.id} posterPath={movie.backdrop_path}  />
                       
                      ))
                    }
                    </div>
                )
            }
            
        </div>
         </>
         
            
        )
            
            }

        </div>
        
    )
}


export default MyList;