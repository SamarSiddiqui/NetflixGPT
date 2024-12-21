import { useEffect, useState } from "react"
import NoInternet from '../components/NoInternet'

const ConectionStatus = ({chidren})=> {
 const [isOnline,setIsOnline] = useState(navigator.onLine)

 useEffect(()=>{
    const handleOnline = ()=> setIsOnline(true)
    const handleOffline = ()=> setIsOnline(false)

    window.addEventListener('online',handleOnline)
    window.addEventListener('offline',handleOffline)
 },[])
 
return isOnline? chidren: <NoInternet/> 
}

export default ConectionStatus