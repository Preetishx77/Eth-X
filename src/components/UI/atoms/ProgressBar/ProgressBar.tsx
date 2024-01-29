import React from 'react';
import {
  ProgressBackground,
  ProgressContainer,
  ProgressForeground,
  Props,
} from './ProgressBar.styled';

const ProgressBar: React.FC<Props> = props => {
  return (
    <ProgressContainer {...props}>
      <ProgressBackground {...props} />
      <ProgressForeground {...props} />
    </ProgressContainer>
  );
};

export default ProgressBar;
