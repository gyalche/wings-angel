import { myColor } from '../../../types';

export const Measurment = ({ color }: myColor) => {
  return (
    <svg width="17" height="15.9" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1616_6)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.34 0L7.12 1.78L5.34 3.56L6.53 4.75L8.31 2.97L13.06 7.72L11.28 9.5L12.47 10.69L14.25 8.91L19 13.66L13.66 19L0 5.34L5.34 0ZM16.03 10.69L13.65 13.07L14.84 14.26L17.22 11.88L16.03 10.69ZM10.09 4.75L7.71 7.13L8.9 8.32L11.28 5.94L10.09 4.75Z"
          fill={`${color}`}
        />
      </g>
      <defs>
        <clipPath id="clip0_1616_6">
          <rect width="19" height="19" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
