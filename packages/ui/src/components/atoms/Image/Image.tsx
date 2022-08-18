import NextImage, {
  ImageLoader,
  ImageProps as NextImageProps
} from 'next/image';
import { FC, CSSProperties } from 'react';
import { Image } from '@types';

const GraphCMSImageLoader: ImageLoader = ({ src, width, quality = 100 }) => {
  const relativeSrc = (srcRelative: string) => srcRelative.split('/').pop();
  return `https://media.graphassets.com/resize=width:${width}/quality=value:${quality}/${relativeSrc(
    src
  )}`;
};

interface ImageProps extends Omit<NextImageProps, 'src'> {
  image: Image;
  sx?: CSSProperties;
  onClick?: () => void;
}

const Image: FC<ImageProps> = ({
  image: { url, alt, height: defaultHeight, width: defaultWidth },
  width: customWidth,
  height: customHeight,
  className,
  layout = 'responsive',
  objectFit = 'scale-down',
  sx,
  onClick,
  ...rest
}) => {
  const isFill = layout === 'fill';
  const width = isFill ? undefined : customWidth || defaultWidth;
  const height = isFill ? undefined : customHeight || defaultHeight;

  return (
    <NextImage
      loader={GraphCMSImageLoader}
      onClick={onClick}
      src={url}
      width={width}
      height={height}
      alt={alt}
      className={className}
      style={sx}
      layout={layout}
      objectFit={objectFit}
      data-test-id="image"
      {...rest}
    />
  );
};

export default Image;
