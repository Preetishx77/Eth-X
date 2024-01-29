import {TypographyColor} from '../../atoms/Typography/types';

export interface BottomSheetProps {
  children?: React.ReactNode;
  height: string | number;
  addPrimaryButton?: boolean;
  addSecondaryButton?: boolean;
  addHeaderSvgIcon?: boolean;
  addHeaderText?: boolean;
  addSubHeaderText?: boolean;
  subHeaderText?: string;
  headerText?: string;
  isPrimaryButtonLoading?: boolean;
  onPressPrimary?: (() => unknown) | (() => void);
  onPressSecondary?: (() => unknown) | (() => void);
  HeaderSvgURI?: string;
  secondaryButtonText?: string;
  primaryButtonText?: string;
  disablePrimaryButton?: boolean;
  subHeaderTextColor?: TypographyColor;
  closeDuration?: number;
  openDuration?: number;
  closeOnDragDown?: boolean;
  onClose?: () => void;
  footerOverride?: object;
  primaryButtonIcon?: string;
  secondaryButtonIcon?: string;
}

export type BottomSheetRefType = {
  open: () => void;
  close: () => void;
} | null;
