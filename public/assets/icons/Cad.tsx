import { myColor } from '../../../types';

export const Cad = ({ color }: myColor) => {
  return (
    <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.16L9.5 0L19 4.16L9.5 8.31L0 4.16Z" fill="#C7C7C7" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.97 6.83002L19 7.72002L9.5 11.88L0 7.72002L2.04 6.83002L9.5 10.09L16.97 6.83002Z"
        fill={`${color}`}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.97 10.39L19 11.28L9.5 15.44L0 11.28L2.04 10.39L9.51 13.66L16.97 10.39Z"
        fill={`${color}`}
      />
    </svg>
  );
};
