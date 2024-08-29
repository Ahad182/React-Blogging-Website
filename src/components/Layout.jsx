import React, { useEffect, useState } from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import Loader from './Loader';
import ScrollToTop from './ScrollToTop';


const Layout = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Show loader for 3 seconds

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  return (
    <div>
    
     {isLoading?<Loader/>:<><Navbar />
      <ScrollToTop/>
      <Outlet />
      <Footer /></>}
      
    </div>
  );
};

export default Layout;
