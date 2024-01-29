import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const BackIcon = ({ width, height, color }) => {
  return (
    <View style={styles.container}>
      <Svg width={width} height={height} viewBox="0 0 24 25" fill="none">
        <Path
          d="M5.09976 12.3272L19.5 12.3271"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="square"
        />
        <Path
          d="M10.5498 18.3517L4.49981 12.3277L10.5498 6.30273"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="square"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BackIcon;
