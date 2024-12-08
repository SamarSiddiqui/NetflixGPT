import  { lazy, Suspense } from 'react'
import Login from './components/Login'
// import Browse from './components/Browse'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import Body from './components/Body';
import appStore from './utils/appStore';
import Error from './components/Error'
import Shimmer from './components/Shimmer'
import MyList from './components/MyList'
const Trending = lazy(()=>import("./components/Trending"))
const Movies = lazy(()=>import("./components/Movies"))
const TvSeries = lazy(()=>import("./components/TvSeries"))
const GptSearch = lazy(()=>import("./components/GptSearch"))
const Browse = lazy(()=>import("./components/Browse"))

const appRouter = createBrowserRouter([
        
  { 
   path:'/',
   element: <Body/>,
   children: [ {
         path: "/",
         element: <Login/>
       
     },
     {
         path:"/browse",
         element: <Suspense fallback={<Suspense/>}><Browse/></Suspense>
     },
     {
       path: "/tvSeries",
       element: <Suspense fallback={<Shimmer/>}>
         <TvSeries/>
       </Suspense>
     },
     {
       path:"/movies",
       element:<Suspense fallback={<Shimmer/>}>
         <Movies/>
       </Suspense>
     },
     {
       path:"/trending",
       element: <Suspense fallback={<Shimmer/>}>
         <Trending/>
       </Suspense>
     },
     {
       path:'/myList',
       element: <Suspense fallback={<Shimmer/>}>
       <MyList/>
     </Suspense>
     },
     {
       path:'/gptsearch',
       element: <Suspense fallback={<Shimmer/>}>
        <GptSearch/>
       </Suspense>
     },
   
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


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter}>

    <Body/>
    </RouterProvider>
      </Provider>
    
); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();