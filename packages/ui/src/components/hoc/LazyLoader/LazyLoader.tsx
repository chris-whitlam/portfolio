import { useRef, useState, useEffect, FC, ReactNode } from 'react';

interface LazyLoaderProps {
  children: ReactNode;
  height?: string;
}

const LazyLoader: FC<LazyLoaderProps> = ({ children, height }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        // In your case there's only one element to observe:
        if (entries[0].isIntersecting) {
          // Not possible to set it back to false like this:
          setVisible(true);

          if (!ref.current) {
            return;
          }

          // No need to keep observing:
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0 }
    );

    observer.observe(ref.current);

    if (!ref.current) {
      return;
    }

    // eslint-disable-next-line consistent-return
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        all: 'inherit',
        width: '100%',
        padding: 0,
        margin: 0,
        minHeight: height || '100px'
      }}
    >
      {isVisible && children}
    </div>
  );
};

export default LazyLoader;
