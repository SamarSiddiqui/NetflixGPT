export const User_Dp = "https://images.unsplash.com/photo-1661077150377-26922fb352bc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmV0ZmxpeCUyMGxvZ298ZW58MHx8MHx8fDA%3D"

export const Netflix_Bg = "https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_large.jpg"

export const IMG_CDN = "https://image.tmdb.org/t/p/original/"
export const Netflix_Logo = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"


export const API_Options =  {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}` 
    }
  };


 
 export const Supported_Lang = [
    {identifier:"en", name:"English"},
    {identifier:"hindi", name:"Hindi"},
    {identifier:"urdu", name:"Urdu"}
  ]

export const Gemini_Key = process.env.REACT_APP_GEMINI_KEY
  