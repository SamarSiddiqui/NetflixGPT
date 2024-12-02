// import React, { lazy, Suspense } from 'react'
// import Login from './Login'
// import Browse from './Browse'
// import { createBrowserRouter, RouterProvider} from 'react-router-dom'
// import TvSeries from './TvSeries'
// import Movies from './Movies'
// import Trending from './Trending'
// import Error from './Error'
// import Shimmer from './Shimmer'
// import GptSearch from './GptSearch'
// import MyList from './MyList'
// const Trending = lazy(()=>import("./Trending"))
// const Movies = lazy(()=>import("./Movies"))
// const TvSeries = lazy(()=>import("./TvSeries"))
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'



const Body = () => {

 

  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
        {/* <RouterProvider router={appRouter} 
        />        */}
    </div>
  )
}
 
export default Body