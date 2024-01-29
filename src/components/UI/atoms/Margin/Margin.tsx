import React from 'react';
import {Box, Hbox} from './style';
import {BOX_SPACING} from './enums/boxSpacing.enum';
import {MARGIN} from './enums/margin.enum';

interface MarginProps {
  margin?: MARGIN;
  isHorizontal?: boolean;
}

const Margin: React.FC<MarginProps> = ({margin, isHorizontal}) => {
  const getMargin = (padding?: MARGIN) => {
    if (padding) {
      const margins = {
        [MARGIN.XXS]: BOX_SPACING['1B'],
        [MARGIN.XS]: BOX_SPACING['2B'],
        [MARGIN.SM]: BOX_SPACING['4B'],
        [MARGIN.MD]: BOX_SPACING['6B'],
        [MARGIN.LG]: BOX_SPACING['8B'],
        [MARGIN.XL]: BOX_SPACING['10B'],
        [MARGIN.XXL]: BOX_SPACING['12B'],
      };

      return margins[padding];
    }

    return BOX_SPACING['0B'];
  };

  if (isHorizontal) {
    return (
      <Hbox mt={getMargin(margin)}>
        <></>
      </Hbox>
    );
  }

  return <Box mt={getMargin(margin)} />;
};

export default Margin;
