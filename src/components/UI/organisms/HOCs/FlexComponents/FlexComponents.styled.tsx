import styled from 'styled-components/native';
import {Dimensions, ScrollView} from 'react-native';

const {width, height} = Dimensions.get('screen');

interface CardProps {
  justifyContent?: string;
  isPadding?: boolean;
  isRelative?: boolean;
  width?: string;
  height?: string;
  borderRadius?: number;
  alignItems?: string;
  backgroundColor?: string;
  borderWidth?: number;
  borderColor?: string;
  borderStyle?: string;
  fullWidth?: boolean;
  marginTop?: number;
  gap?: number;
  isVerticalPadding?: boolean;
  isHorizontalPadding?: boolean;
  margin?: number;
}

export const FlexRowCard = styled.View<CardProps>`
  z-index: -1;
  display: flex;
  flex-direction: row;
  ${props => `margin: ${props.margin || 0}px;`}
  ${props => `justify-content: ${props?.justifyContent};`}
  padding: ${props => (props.isPadding ? '20px' : '0')};
  ${props => `width: ${props?.width || 'auto'};`}
  ${props => `height: ${props?.height || 'auto'};`}
  ${props => props?.isRelative && 'position: relative;'}
  margin-top: ${props => (props.marginTop ? props.marginTop : 0)}px;
  ${props => `align-items: ${props?.alignItems};`}
  ${props => `border-radius: ${props.borderRadius || 0}px;`}
  ${props => `background-color: ${props.backgroundColor || 'transparent'};`}
  ${props => `border-width: ${props.borderWidth || 0}px;`}
  ${props => `border-color: ${props.borderColor || 'transparent'};`}
  ${props => `border-style: ${props.borderStyle || 'solid'};`}
  ${props => `gap: ${props.gap || 0}px;`}
`;

export const FlexColumnCard = styled.View<CardProps>`
  display: flex;
  flex-direction: column;
  ${props => `justify-content: ${props?.justifyContent};`}
  padding: ${props => (props.isPadding ? '16px' : '0')};
  ${props => `width: ${props?.width || 'auto'};`}
  ${props => `height: ${props?.height || 'auto'};`}
  ${props => `align-items: ${props?.alignItems};`}
  ${props => `border-radius: ${props.borderRadius || 0}px;`}
  ${props => `background-color: ${props.backgroundColor || 'transparent'};`}
  ${props => `border-width: ${props.borderWidth || 0}px;`}
  ${props => `border-color: ${props.borderColor || 'transparent'};`}
  ${props => `border-style: ${props.borderStyle || 'solid'};`}
  ${props => `margin-top: ${props.marginTop || 0}px;`}
  ${props => `gap: ${props.gap || 0}px;`}
  padding-vertical: ${props =>
    props.isVerticalPadding === true ? '16px' : '0'};
  padding-horizontal: ${props =>
    props.isHorizontalPadding === true ? '16px' : '0'};
`;

export const FooterCard = styled.View`
  position: absolute;
  padding: 10px 16px;
  bottom: ${props => (props.bottom ? props.bottom : '10px')};
  width: ${width}px;
  z-index: 5;
  elevation: 5;
`;

export type FlexProps = {
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  alignContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'space-between'
    | 'space-around';
  alignSelf?:
    | 'auto'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'stretch';
  flex?: number;
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: number | string;
  width?: number | string;
  height?: number | string;
  padding?: number;
  borderRadius?: number;
  margin?: number;
};

export const FlexBasicCard = styled.View<FlexProps>`
  display: flex;
  ${props => `
      flex-direction: ${props.flexDirection || 'column'};
      flex-wrap: ${props.flexWrap || 'nowrap'};
      justify-content: ${props.justifyContent || 'flex-start'};
      align-items: ${props.alignItems || 'stretch'};
      align-content: ${props.alignContent || 'stretch'};
      align-self: ${props.alignSelf || 'auto'};
      flex: ${props.flex || '0'};
      flex-grow: ${props.flexGrow || '0'};
      flex-shrink: ${props.flexShrink || '1'};
      flex-basis: ${props.flexBasis || 'auto'};
      width: ${props.width || 'auto'};
      height: ${props.height || 'auto'};
      padding: ${props.padding || 0}px;
      border-radius: ${props.borderRadius || 0};
      margin: ${props.margin || 0}px;
    `}
`;

export const ScreenHeight: number = height;

export const ScreenWidth: number = width;

interface ScrollViewProps {
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  isPadding?: boolean;
  width?: string;
  height?: string;
  borderRadius?: number;
}

export const FlexColumnScrollView = styled(ScrollView).attrs<ScrollViewProps>(
  props => ({
    contentContainerStyle: {
      justifyContent: props.justifyContent || 'flex-start',
      alignItems: props.alignItems || 'stretch',
      padding: props.isPadding ? 16 : 0,
      borderRadius: props.borderRadius || 0,
    },
  }),
)<ScrollViewProps>`
  flex: 1;
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
`;
