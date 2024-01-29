import styled from 'styled-components/native';
import {Colors} from '../../../../Provider/Colors';
import {BUTTON_SIZE} from './enums';
// border-style: ${props => (props.variant === 'secondary' ? 'solid' : 'none')};
// border-width: ${props => (props.variant === 'secondary' ? '0.5px' : '0px')};
// border-color: ${props =>
//   props.variant === 'secondary' ? '#FFFFFF' : 'transparent'};
const getBackgroundColor = props => {
  if (props.variant === 'primary') {
    return Colors.LightBlue;
  } else if (props.variant === 'secondary') {
    return Colors.White;
  }
};

export const StyledButton = styled.Pressable`
  background-color: ${props => getBackgroundColor(props)};
  padding: ${props => (props.size === 'sm' ? '4px 6px' : '8px 12px')};
  min-height: ${props => BUTTON_SIZE[props.size || md]};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  opacity: ${props => (props.disabled ? 0.9 : 1)};
  ${props => (props.fluid === true ? 'flex: 1' : 'width: 140px')}
`;

export const LinkButton = styled.Pressable``;

export const Icon = styled.Image`
  margin-right: 10px;
  width: 20px;
  height: 20px;
`;
