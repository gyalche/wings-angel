import { myColor } from '../../../types';

export const Location = ({ color }: myColor) => {
  return (
    <svg width="17" height="15.9" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_2_1383)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 2.12122L4.52 0.0012207V13.8112L0 15.9412V2.12122Z"
          fill={`${color}`}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.8901 2.12122L6.11011 0.0012207V13.8112L10.8901 15.9412V2.12122Z"
          fill={`${color}`}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.48 2.12122L17 0.0012207V13.8112L12.48 15.9412V2.12122Z"
          fill={`${color}`}
        />
      </g>
      <defs>
        <clipPath id="clip0_2_1383">
          <rect width="17" height="15.94" fill={`${color}`} />
        </clipPath>
      </defs>
    </svg>
  );
};
