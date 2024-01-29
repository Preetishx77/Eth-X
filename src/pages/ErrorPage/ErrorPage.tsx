import React from 'react';
import PageContainer from '../../components/UI/organisms/HOCs/PageContainer/PageContainer';
import {
  FlexColumnCard,
  FlexRowCard,
  ScreenWidth,
} from '../../components/UI/organisms/HOCs/FlexComponents/FlexComponents.styled';
import {Image, StyleSheet} from 'react-native';
import {localImage} from '../../Provider/localImage';
import {Colors} from '../../Provider/Colors';
import Typography from '../../components/UI/atoms/Typography/Typography.styled';
import Margin from '../../components/UI/atoms/Margin/Margin';
import {MARGIN} from '../../components/UI/atoms/Margin/enums/margin.enum';
import Button from '../../components/UI/atoms/Button/Button.styled';
import RNRestart from 'react-native-restart';

function ErrorPage() {
  return (
    <PageContainer customBackgroundColor={Colors.Black}>
      <FlexColumnCard height="100%" justifyContent="center" alignItems="center" isPadding={true}>
        <Image style={styles.logo} source={localImage.logo} />
        <Typography
          textAlign="center"
          variant="title2"
          fontWeight={700}
          color="White">
          Oops ! Something Went Wrong !
        </Typography>
        <Margin margin={MARGIN.SM} />
        <FlexRowCard isPadding={true}>
        <Button variant="secondary" onPressBTN={() => RNRestart.restart()} fluid={true}>
          <Typography variant="subHeading" fontWeight={700} color='Black'>
            Re-launch App
          </Typography>
        </Button>
        </FlexRowCard>

      </FlexColumnCard>
    </PageContainer>
  );
}
const styles = StyleSheet.create({
  logo: {
    resizeMode: 'contain',
    width: (ScreenWidth * 50) / 100,
    height: 220,
    marginBottom: 50,
  },
});
export default ErrorPage;
