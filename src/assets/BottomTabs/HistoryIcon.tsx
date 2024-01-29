import React from 'react';
import {Svg, Path} from 'react-native-svg';

const HistoryIcon = ({active}) => {
  const color = active ? '#5ba6ff' : '#808080';

  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M2 12C2 17.5228 6.47715 22 12 22C13.8214 22 15.5291 21.513 17 20.6622M12 2C17.5228 2 22 6.47715 22 12C22 13.8214 21.513 15.5291 20.6622 17"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M12 9V13H16"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 20.6622C15.5291 21.513 13.8214 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 13.8214 21.513 15.5291 20.6622 17"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="0.5 3.5"
      />
    </Svg>
  );
};

export default HistoryIcon;
