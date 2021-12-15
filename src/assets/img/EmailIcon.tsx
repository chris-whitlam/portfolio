import { FC } from 'react';

interface EmailIconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const EmailIcon: FC<EmailIconProps> = ({
  width = 89,
  height = 65,
  color = '#0F6DC4',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 89 65"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_9_110)">
      <rect
        x="6.5"
        y="2.5"
        width="76"
        height="52"
        rx="4.5"
        stroke={color}
        stroke-width="5"
      />
      <path
        d="M8.11865 4.86584C51.3644 41.7073 39.0085 41.0122 80.8814 4.86584"
        stroke={color}
        stroke-width="5"
      />
      <path d="M8.11865 53.5244L34.8898 28.5" stroke={color} stroke-width="5" />
      <path d="M81.5678 52.1341L55.4831 28.5" stroke={color} stroke-width="5" />
      <path
        d="M35.5763 28.5L10.178 5.56097L19.1017 3.47561L47.9322 2.78049L76.7627 3.47561V9.03658L68.5254 18.7683L54.1102 28.5L46.5593 31.9756L35.5763 28.5Z"
        fill={color}
      />
    </g>
    <defs>
      <filter
        id="filter0_d_9_110"
        x="0"
        y="0"
        width="89"
        height="65"
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
          result="effect1_dropShadow_9_110"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_9_110"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default EmailIcon;
