import React from 'react';
import {Svg, Path} from 'react-native-svg';

const SortIcon = ({color, width, height}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M13 12H21M13 8H21M13 16H21M6 7V17M6 17L3 14M6 17L9 14"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default SortIcon;
