export type TypographyColor =
  | 'Primary'
  | 'White'
  | 'Black'
  | 'Grey_1'
  | 'Grey_2'
  | 'Grey_3'
  | 'Grey_4'
  | 'Grey_5'
  | 'Grey_6'
  | 'Grey_7'
  | 'Grey_8'
  | 'Grey_9'
  | 'Correct_BUY'
  | 'Grey_5_variant'
  | 'Incorrect_SELL'
  | 'WAITING'
  | 'LINK'
  | 'Warning'
  | 'ElectricGreen'
  | 'LightBlue'
  | 'Grey_variant'
  | 'darkText';

export type TypographyVariant =
  | 'body'
  | 'display'
  | 'title1'
  | 'largeTitle'
  | 'title2'
  | 'title3'
  | 'callout'
  | 'subHeading'
  | 'footnote'
  | 'caption1'
  | 'caption2'
  | 'caption3'
  | 'whisper';

export type TypographyFontWeight = number;

export interface TypographyProps {
  variant: TypographyVariant;
  color?: TypographyColor;
  textAlign?: string;
  fontStyle?: TypographyFontWeight;
  textTransform?: string;
  customColor?: string;
  textDecorationLine?: string;
  onPress?: () => void;
  wordBreak?: boolean;
  fontWeight?: TypographyFontWeight;
}
