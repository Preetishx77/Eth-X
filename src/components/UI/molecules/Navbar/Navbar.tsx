import React from 'react';
import {FlexRowCard} from '../../organisms/HOCs/FlexComponents/FlexComponents.styled';
import NotificationSVG from '../../../../assets/BottomTabs/Notification';
import {Colors} from '../../../../Provider/Colors';
import UserIcon from '../../../../assets/BottomTabs/UserIcon';
import Typography from '../../atoms/Typography/Typography.styled';

function Navbar() {
  return (
    <FlexRowCard
      width="100%"
      justifyContent="space-between"
      isHorizontalPadding={true}
      style={{paddingTop: 55, paddingLeft: 16, paddingRight: 16, paddingBottom: 15}}>
      <UserIcon width={24} height={24} />
      <Typography
        variant="title1"
        color="White"
        style={{letterSpacing: 1}}
        fontWeight={700}>
        ETH-X
      </Typography>
      <NotificationSVG color={Colors.White} width={24} height={24} />
    </FlexRowCard>
  );
}

export default Navbar;
