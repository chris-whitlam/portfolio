import { FC } from 'react';

interface LinkedInIconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const LinkedInIcon: FC<LinkedInIconProps> = ({
  width = 66,
  height = 65,
  color = '#0F6DC4',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 66 65"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_9_74)">
      <path
        d="M53.4187 48.2516H44.825V35.2134C44.825 32.1043 44.7677 28.102 40.3553 28.102C35.8794 28.102 35.1946 31.4894 35.1946 34.9871V48.2507H26.6008V21.4389H34.8508V25.103H34.9663C36.6485 22.3165 39.7764 20.6523 43.1062 20.772C51.8164 20.772 53.4223 26.3224 53.4223 33.5431L53.4187 48.2516ZM16.9041 17.7739C14.1498 17.7744 11.9166 15.6117 11.9161 12.9434C11.9156 10.275 14.148 8.11154 16.9023 8.11107C19.6566 8.11059 21.8898 10.2733 21.8903 12.9416C21.8905 14.223 21.3653 15.452 20.4302 16.3582C19.4952 17.2645 18.2268 17.7737 16.9041 17.7739ZM21.201 48.2516H12.5983V21.4389H21.201V48.2516ZM57.7031 0.379556H8.27988C5.94404 0.354019 4.02851 2.16668 4 4.4296V52.5089C4.02753 54.7729 5.94291 56.5874 8.27988 56.5636H57.7031C60.0447 56.5917 61.9676 54.7774 62 52.5089V4.42613C61.9666 2.15874 60.0436 0.346183 57.7031 0.375722"
        fill={color}
      />
    </g>
    <defs>
      <filter
        id="filter0_d_9_74"
        x="0"
        y="0.375366"
        width="66"
        height="64.1886"
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
          result="effect1_dropShadow_9_74"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_9_74"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default LinkedInIcon;
