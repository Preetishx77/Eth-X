import React from 'react';
import {IconImage} from '../../../../Provider/IconProvider';
import {Image} from 'react-native';
import {FlexRowCard} from '../../organisms/HOCs/FlexComponents/FlexComponents.styled';
import {Colors} from '../../../../Provider/Colors';

const CoinIcon = ({symbol}: {symbol: string}) => {
  return (
    <FlexRowCard
      alignItems="center"
      justifyContent="center"
      backgroundColor={'#ECECEC'}
      borderRadius={50}
      style={{paddingTop: 5, paddingBottom: 5, paddingLeft: 5, paddingRight: 5}}>
      <Image
        style={{width: 30, height: 30}}
        source={IconImage?.[symbol.toUpperCase()] || IconImage.DEFAULT}
        resizeMode={'cover'}
      />
    </FlexRowCard>
  );
};

export default CoinIcon;
