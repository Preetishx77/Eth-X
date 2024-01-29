import React from 'react';
import {ActivityIndicator} from 'react-native';
import {BUTTON_VARIENT, LINK_SIZE} from './enums';
import {Icon, LinkButton, StyledButton} from './styled';
import Typography from '../Typography/Typography.styled';
import {Colors} from '../../../../Provider/Colors';
import {localImage} from '../../../../Provider/localImage';

interface ButtonProps {
  children: React.ReactNode;
  variant?: string;
  onPressBTN?: () => {} ;
  fluid?: boolean;
  size?: string;
  disabled?: boolean;
  color?: string;
  linkCenter?: string;
  iconName?: string;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onPressBTN,
  fluid = true,
  size = 'md',
  disabled = false,
  color,
  linkCenter = 'left',
  iconName,
  isLoading = false,
}: ButtonProps) => {
  const getTextColor = () => {
    if (variant === 'primary') {
      return 'White';
    } else if (variant === 'secondary') {
      return 'Black';
    }
  };

  if (variant === BUTTON_VARIENT.link) {
    return (
      <LinkButton onPress={onPressBTN} fluid={fluid} disabled={disabled}>
        <Typography
          textAlign={linkCenter}
          variant={LINK_SIZE[size || 'md']}
          customColor={color || Colors.LightBlue}>
          {children}
        </Typography>
      </LinkButton>
    );
  }

  return (
    <StyledButton
      variant={variant}
      size={size}
      onPress={!isLoading ? onPressBTN : null}
      fluid={fluid}
      disabled={disabled}>
      {iconName && <Icon source={localImage[iconName]} />}
      {!isLoading ? (
        <Typography
          textAlign={'center'}
          variant="subHeading"
          fontWeight={700}
          color={getTextColor()}>
          {children}
        </Typography>
      ) : (
        <ActivityIndicator
          size={'small'}
          color={variant === 'primary' ? Colors.White : Colors.Black}
        />
      )}
    </StyledButton>
  );
};

export default Button;
