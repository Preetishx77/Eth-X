import React from 'react';
import {View} from 'react-native';
import Svg, {
  Circle,
  Path,
  Mask,
  Defs,
  LinearGradient,
  Stop,
  G,
} from 'react-native-svg';

const UserIcon = ({width, height}) => {
  return (
    <View>
      <Svg width={width} height={height} viewBox="0 0 82 82" fill="none">
        <Circle cx="41" cy="41" r="40.5" fill="#FFF" stroke="#FFF" />
        <Mask
          id="mask0"
          maskType="alpha"
          maskUnits="userSpaceOnUse"
          x="5"
          y="8"
          width="72"
          height="72">
          <Circle
            cx="41.0003"
            cy="43.826"
            r="33.7474"
            fill="#FFF"
            stroke="#FFF"
            strokeWidth="3"
          />
        </Mask>
        <Defs>
          <LinearGradient
            id="paint0_linear"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
            gradientUnits="userSpaceOnUse">
            <Stop offset="0" stopColor="#2F80ED" />
            <Stop offset="1" stopColor="#56CCF2" />
          </LinearGradient>
          <LinearGradient
            id="paint1_linear"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
            gradientUnits="userSpaceOnUse">
            <Stop offset="0" stopColor="#2F80ED" />
            <Stop offset="1" stopColor="#56CCF2" />
          </LinearGradient>
        </Defs>
        <Circle cx="41" cy="41" r="39.6" stroke="#FFF" strokeWidth="2.8" />
        <G mask="url(#mask0)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M40.9999 44.7436C46.8303 44.7436 51.5752 40.0009 51.5752 34.1705C51.5752 28.3379 46.8303 23.5952 40.9999 23.5952C35.1695 23.5952 30.4268 28.3379 30.4268 34.1705C30.4268 40.0009 35.1695 44.7436 40.9999 44.7436Z"
            fill="url(#paint0_linear)"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M63.3863 67.66C60.354 58.0707 52.2063 52.5762 41.0233 52.5762H40.9427C29.7298 52.5135 21.5403 58.0468 18.502 67.66L17.8545 70.3682L19.1814 71.504C25.2807 76.2214 32.7327 79.0726 41.2565 79.0726C41.352 79.0726 41.8277 79.0623 41.9202 79.0623C50.5634 79.0623 57.5793 75.5359 62.9467 71.4249L64.2681 70.3095L63.3863 67.66Z"
            fill="url(#paint1_linear)"
          />
        </G>
      </Svg>
    </View>
  );
};

export default UserIcon;
