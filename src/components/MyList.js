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
         <div className="text-white mb-20 relative z-50 top-14  ">
         {myList.length===0? (
          <div className="flex justify-center m-4">
              <div className="h-[50vh] flex items-center">
                
          <h1 className="bg-gradient-to-r from-gray-600/20 via-gray-200/10 to-gray-400/20 text-2xl italic">No movies here yet. Let's fill this list with awesomeness!</h1>
                </div>      
          </div>):

         (
         
         <>
         <div className=" text-right ">
            <button onClick={handleClearList} className=" bg-gray-200/50 px-3 font-bold text-lg py-2 m-5 text-black rounded-md cursor-pointer hover:bg-gray-100/80 hover:scale-[1.01]">Clear List
            <i className="fa-solid fa-trash ml-2"></i>
            </button>
            </div>

            <div className="text-white  pb-10">
            
            {   myList.length===0?(
                    <div className="flex justify-center m-4">
                    
                    <h1>My List Is Empty. Please Add.</h1>
                    </div>
                ):(
                    <div className="flex border-red-700  justify-center  flex-wrap gap-10 ">
                    {
                      myList.map((movie)=>(
                       <MovieCard key={movie.id} posterPath={movie.backdrop_path} movieName={movie?.original_title|| movie?.original_name} overview={movie?.overview} ratings={movie?.vote_average} />
                       
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