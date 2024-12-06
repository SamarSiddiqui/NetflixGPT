import React from 'react'
import { IMG_CDN } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../utils/myListSlice';

const MovieCard = ({posterPath,movieName,overview,ratings,movie,movieId}) => {
  const myList = useSelector((store)=>store?.mylist?.addedItems)
  
  const dispatch = useDispatch()
  if(!posterPath && !movieName) return null
  
  //Movie Duplicacy Logic
  const handleAddItem = () => {  
    const isMovieInList = myList.some((movie)=>movie.id===movieId)
    if(!isMovieInList){
      dispatch(addItem(movie))
    }
    
   }
  
  return (
    <div className="moviecard text-white">
    
      <img
        className="poster-image"
        src={IMG_CDN + posterPath}
        alt="moviesImg"
      />
    <div className="content-box">
      <div className='details'>
        <div className='flex items-center justify-between'>
      <h1 className='text-2xl'>{movieName}
      </h1>
      <i onClick={handleAddItem} className="fa-solid fa-plus  text-base border rounded-full px-2 mt-2 py-1 mr-5 cursor-pointer hover:scale-[1.05]"></i>
     

        </div>
      <h1 className='text-xl mb-1'>Rating: {ratings}</h1>
                <p class="description">
                    {overview || "No Overview Present"}
                </p>
                
      </div>

    
    </div>
  </div>
  
)
}

export default MovieCard
