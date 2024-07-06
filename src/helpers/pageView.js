import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageView = () => {
    const location = useLocation();
  
    useEffect(() => {
      window.dataLayer.push({ event: 'pageview', path: location.pathname });
    }, [location]);
  
    return null;
  };
  
export default PageView;
