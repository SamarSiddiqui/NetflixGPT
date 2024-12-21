import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import Header from './Header';
import Footer from './Footer';

const Body = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoginPage = location.pathname === '/';

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));

        // Redirect to /browse if user is authenticated
        if (isLoginPage) {
          navigate('/browse');
        }
      } else {
        dispatch(removeUser());
        if (!isLoginPage) {
          navigate('/');
        }
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate, isLoginPage]);

  return (
    <div>
      {!isLoginPage && <Header />}
      <div className={isLoginPage ? 'login-container' : ''}>
        <Outlet />
      </div>
      {!isLoginPage && <Footer />}
    </div>
  );
};

export default Body;
