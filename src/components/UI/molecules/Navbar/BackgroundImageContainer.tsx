import React, {Children, ReactNode} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import { ScreenHeight, ScreenWidth } from '../../organisms/HOCs/FlexComponents/FlexComponents.styled';
import { Colors } from '../../../../Provider/Colors';
import { localImage } from '../../../../Provider/localImage';

interface Props {
  children: ReactNode;
  containerStyles: object;
}
const image = localImage.headerBg;

const BackgroundImageContainer: React.FC<Props> = ({children, containerStyles}) => {
  return (
    <View style={containerStyles || BackgroundImageContainerStyles.container}>
      <ImageBackground
        resizeMode="cover"
        style={BackgroundImageContainerStyles.blockImage}
        source={image}>
        {children}
      </ImageBackground>
    </View>
  );
};

export default BackgroundImageContainer;

const BackgroundImageContainerStyles = StyleSheet.create({
  container: {
    width: ScreenWidth,
    margin: 0,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.Black,
    height: ScreenHeight * 0.05,
    padding: 0,
  },
  blockImage: {
    flex: 1,
    height: 150,
    width: ScreenWidth * 0.5,
    alignSelf: 'center',
  },
});
