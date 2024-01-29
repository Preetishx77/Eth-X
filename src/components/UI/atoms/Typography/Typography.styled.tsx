import styled from 'styled-components/native';
import type {TypographyProps} from './types';
import {Dimensions, PixelRatio} from 'react-native';
import {Colors} from '../../../../Provider/Colors';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

export const getFontSize = (variant: string) => {
  switch (variant) {
    case 'display':
      return 48;
    case 'title1':
      return 28;
    case 'title2':
      return 20;
    case 'body':
      return 16;
    case 'callout':
      return 15;
    case 'subHeading':
      return 14;
    case 'caption1':
      return 12;
    case 'caption2':
      return 11;
    default:
      return 12;
  }
};

// Using iPhone 6/7/8 dimensions as a base guideline
const baseWidth = 375;
const baseHeight = 667;

const scaleWidth = SCREEN_WIDTH / baseWidth;
const scaleHeight = SCREEN_HEIGHT / baseHeight;

export const normalizeFont = (size, based = 'width') => {
  const newSize = based === 'height' ? size * scaleHeight : size * scaleWidth;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

const Typography = styled.Text<TypographyProps>`
  font-size: ${props => getFontSize(props.variant)}px;
  color: ${props =>
    props.customColor
      ? props.customColor
      : props.color
      ? Colors[props.color]
      : '#FFFFFF'};
  text-align: ${props => (props.textAlign ? props.textAlign : 'auto')};
  text-transform: ${props => props.textTransform || 'none'};
  text-decoration-style: solid;
  font-family: 'Roboto';
  ${props => props.fontWeight && `font-weight: ${props.fontWeight}`};
  ${props => `text-decoration-line: ${props.textDecorationLine || 'none'}`};
  ${props => props?.wordBreak && 'wordWrap: break-work'};
  letter-spacing: 0.5;
`;

export default Typography;
