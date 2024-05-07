import React, { useEffect } from 'react';

const InstagramFeed = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.charset = 'UTF-8';
    script.src = 'https://cdn.curator.io/published/d5bfd89f-4d40-487b-b359-3ce282af776a.js';
    
    // Append the script element to the document body
    document.body.appendChild(script);

    // Clean up function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Return null since this component doesn't render any UI
  return null;
};

export default InstagramFeed;