// LoadingSpinner.jsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from './Loader';

const LoadingSpinner = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Show spinner for 3 seconds on each route change

    return () => clearTimeout(timer); // Clear the timeout if the component unmounts or location changes
  }, [location]);

  return loading ? <Loader /> : null;
};

export default LoadingSpinner;
