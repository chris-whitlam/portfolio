import { useEffect, useState } from 'react';

// eslint-disable-next-line no-shadow
export enum ScrollDirection {
  NONE = 'NONE',
  DOWN = 'DOWN',
  UP = 'UP'
}

const useScrollDirection = () => {
  const [scrollDir, setScrollDir] = useState<ScrollDirection>(
    ScrollDirection.NONE
  );

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(
        scrollY > lastScrollY ? ScrollDirection.DOWN : ScrollDirection.UP
      );
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDir]);

  return scrollDir;
};

export default useScrollDirection;
