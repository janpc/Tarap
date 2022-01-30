import React from 'react';
import Svg, { Path, Line } from 'react-native-svg';

export default ({ percentage, ...props }) => {
  let color = '#84B380';
  if (percentage < 70) {
    color = '#F2C94C';
  } else if (percentage < 40) {
    color = '#D7495B';
  }

  return (
    <Svg
      width="23"
      height="30"
      viewBox="0 0 23 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.8 6.6C9.8 9.88978 7.65178 12.2 5.4 12.2C3.14822 12.2 1 9.88978 1 6.6C1 3.31022 3.14822 1 5.4 1C7.65178 1 9.8 3.31022 9.8 6.6Z"
        stroke={color}
        stroke-width="2"
      />
      <Path
        d="M21.8 23.4C21.8 26.6898 19.6518 29 17.4 29C15.1482 29 13 26.6898 13 23.4C13 20.1102 15.1482 17.8 17.4 17.8C19.6518 17.8 21.8 20.1102 21.8 23.4Z"
        stroke={color}
        stroke-width="2"
      />
      <Line
        x1="3.93805"
        y1="28.293"
        x2="19.1487"
        y2="2.43494"
        stroke={color}
        stroke-width="2"
      />
    </Svg>
  );
};
