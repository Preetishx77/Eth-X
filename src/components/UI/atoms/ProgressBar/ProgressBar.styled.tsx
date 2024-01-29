import styled from 'styled-components/native';
import {Colors} from '../../../../Provider/Colors';

export interface Props {
  width?: string;
  maxLimit: number;
  currentValue: number;
}

export const ProgressContainer = styled.View<Props>`
  position: relative;
  width: ${props => props?.width || '100px'};
`;

export const ProgressBackground = styled.View<Props>`
  position: absolute;
  top: 0;
  width: 100%;
  background: ${Colors.Grey_4};
  height: 4px;
  border-radius: 4px;
`;

export const ProgressForeground = styled.View<Props>`
  position: absolute;
  top: 0;
  width: ${props => {
    const per = (props?.currentValue * 100) / props.maxLimit;
    return `${per}%`;
  }};
  height: 4px;
  border-radius: 4px;
  background: ${Colors.LightBlue};
`;
