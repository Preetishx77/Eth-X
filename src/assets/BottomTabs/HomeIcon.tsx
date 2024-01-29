import React from 'react';
import {TouchableOpacity} from 'react-native';
import Svg, {Path, G, Rect} from 'react-native-svg';

const HomeIcon = ({active}) => {
  return (
    <TouchableOpacity onPress={() => console.log('Icon pressed')}>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <G id="Iconly/Sharp/Light/Home">
          <Path
            id="Vector 13"
            d="M1.93359 11.3755L11.9998 2.75L22.0659 11.3755"
            stroke={active ? '#5ba6ff' : 'gray'}
            strokeWidth="2"
            strokeLinecap="square"
          />
          <Path
            id="Vector 14"
            d="M4.09277 10.1592V21.2501H19.9103V10.1592"
            stroke={active ? '#5ba6ff' : 'gray'}
            strokeWidth="2"
            strokeLinecap="square"
          />
          <Path
            id="Vector 15"
            d="M12 12.7048L12 16.1132"
            stroke={active ? '#5ba6ff' : 'gray'}
            strokeWidth="2"
            strokeLinecap="square"
          />
        </G>
      </Svg>
    </TouchableOpacity>
  );
};

export default HomeIcon;
