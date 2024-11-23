import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import TvSeries from './TvSeries'
import Movies from './Movies'


const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
        {
          path: "/tvSeries",
          element: <TvSeries/>
        },
        {
          path:"/moives",
          element:<Movies/>
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
