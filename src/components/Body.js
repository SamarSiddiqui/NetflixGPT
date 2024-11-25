import React, { lazy, Suspense } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
// import TvSeries from './TvSeries'
// import Movies from './Movies'
// import Trending from './Trending'
import Error from './Error'
import Shimmer from './Shimmer'
import GptSearch from './GptSearch'
const Trending = lazy(()=>import("./Trending"))
const Movies = lazy(()=>import("./Movies"))
const TvSeries = lazy(()=>import("./TvSeries"))


const Body = () => {
    const appRouter = createBrowserRouter([
        
     { 
      
      children: [ {
            path: "/",
            element: <Login/>
        },
        {
            path:"/browse",
            element: <Suspense fallback={<Shimmer/>}>
            <Browse/>
          </Suspense>
           
        },
        {
          path: "/tvSeries",
          element: <Suspense fallback={<Shimmer/>}>
            <TvSeries/>
          </Suspense>
        },
        {
          path:"/moives",
          element:<Suspense fallback={<Shimmer/>}>
            <Movies/>
          </Suspense>
        },
        {
          path:"/trending",
          element: <Suspense fallback={<div>loading from lazy..</div>}>
            <Trending/>
          </Suspense>
        },
        {
          path:'/gptsearch',
          element: <GptSearch/>
        }
      
      ],
      errorElement:<Error/>
      
      }
    ],{
      future: {
         v7_startTransition: true,
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true
      }})

 

  return (
    <div>
        <RouterProvider router={appRouter} />       
    </div>
  )
}
 
export default Body