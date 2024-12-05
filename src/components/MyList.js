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
         <div className="text-white relative z-50 top-14  ">
         {myList.length===0? (
          <div className="flex justify-center m-4">
                    
          <h1>My List Is Empty. Please Add.</h1>
          </div>):

         (
         
         <>
         <div className=" text-right ">
            <button onClick={handleClearList} className=" bg-white px-3 font-bold text-xl py-2 m-3 text-black rounded-md cursor-pointer hover:bg-gray-100 hover:scale-105">Clear List
            <i className="fa-solid fa-trash ml-1"></i>
            </button>
            </div>

            <div className="text-white  border-b-[2px] border-gray-700 pb-10">
            
            {   myList.length===0?(
                    <div className="flex justify-center m-4">
                    
                    <h1>My List Is Empty. Please Add.</h1>
                    </div>
                ):(
                    <div className="flex  justify-center  flex-wrap gap-10 ">
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