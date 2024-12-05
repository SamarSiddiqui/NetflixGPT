import Header from './Header'
import Footer from './Footer'
import { Outlet, useLocation, useNavigate  } from 'react-router'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';


const Body = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const user = useSelector((store) => store?.user);

  const isLoginPage = location.pathname === '/';
    // This function is checking authentication kindOff EventListner. If a user is signed in then the store is getting updated.
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid, email, displayName, photoURL } = user;
          dispatch(addUser({ uid, email, displayName, photoURL }));
  
          // Redirect to /browse if user is authenticated
          if (location.pathname === '/') {
            navigate('/browse');
          }
        } else {
          dispatch(removeUser());
          if (location.pathname !== '/') {
            navigate('/');
          }
        }
      });
  
      return () => unsubscribe();
    }, [dispatch, navigate, location.pathname]);
  
   return (
    
    <div>
    {!isLoginPage && <Header />}
    <div className={isLoginPage ? 'login-container' : ''}>
      <Outlet />
    </div>
    {!isLoginPage && <Footer />}
  </div>
  )
}
 
export default Body