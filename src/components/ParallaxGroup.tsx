import { ReactElement, FC, ReactNode } from 'react';

interface ParallaxGroupProps {
  background: ReactElement | ReactNode | ReactNode[];
  className?: string;
}

const ParallaxGroup: FC<ParallaxGroupProps> = ({
  background,
  className,
  children,
}) => {
  return (
    <div className={`parallax__group ${className}`}>
      <div className="parallax__layer parallax__layer--back">{background}</div>
      <div className="parallax__layer parallax__layer--base">{children}</div>
    </div>
  );
};

export default ParallaxGroup;
