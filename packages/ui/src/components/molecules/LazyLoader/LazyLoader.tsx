import { Spinner } from '@atoms';
import {
  useRef,
  useState,
  useEffect,
  FC,
  ReactNode,
  CSSProperties
} from 'react';

interface LazyLoaderProps {
  children: ReactNode;
  inheritFromParent?: boolean;
  style?: CSSProperties;
}

const LazyLoader: FC<LazyLoaderProps> = ({
  children,
  style = {},
  inheritFromParent = false
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);

          if (!ref.current) {
            return;
          }

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
        all: inheritFromParent ? 'inherit' : 'unset',
        minWidth: '100%',
        padding: 0,
        margin: 0,
        minHeight: '100px',
        ...style
      }}
      data-test-id="lazy-loader-container"
    >
      {isVisible ? children : <Spinner />}
    </div>
  );
};

export default LazyLoader;
