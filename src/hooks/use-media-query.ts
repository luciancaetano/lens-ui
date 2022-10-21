import {
  useEffect, useRef, useState,
} from 'react';

const checkMediaMatch = (query: string) => {
  if (typeof window !== 'undefined') {
    return window.matchMedia(query).matches;
  }
  return false;
};

const useMediaQuery = (query: string) => {
  const [mediaMatch, setMediaMatch] = useState<boolean>(checkMediaMatch(query));

  const handleMediaChange = useRef(() => {
    setMediaMatch(checkMediaMatch(query));
  });

  useEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleMediaChange.current();

    if (matchMedia.addListener) {
      matchMedia.addListener(handleMediaChange.current);
    } else {
      matchMedia.addEventListener('change', handleMediaChange.current);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleMediaChange.current);
      } else {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        matchMedia.removeEventListener('change', handleMediaChange.current);
      }
    };
  }, [handleMediaChange, query]);

  return mediaMatch;
};

export default useMediaQuery;
