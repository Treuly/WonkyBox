import { useEffect } from 'react';

const useScript = (url) => {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = url;
        script.async = true;

        document.body.prepend(script);

        return () => {
            document.body.removeChild(script);
          }

    }, [url])
  
}

export default useScript;