import { FC } from 'react';

interface MenuIconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const MenuIcon: FC<MenuIconProps> = ({
  width = 69,
  height = 63,
  color = '#0F6DC4',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 69 63"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_6_14)">
      <rect x="4" width="61" height="11.9565" rx="5.97826" fill={color} />
      <rect
        x="4"
        y="21.5217"
        width="61"
        height="11.9565"
        rx="5.97826"
        fill={color}
      />
      <rect
        x="4"
        y="43.0435"
        width="61"
        height="11.9565"
        rx="5.97826"
        fill={color}
      />
    </g>
    <defs>
      <filter
        id="filter0_d_6_14"
        x="0"
        y="0"
        width="69"
        height="63"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_6_14"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_6_14"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default MenuIcon;
