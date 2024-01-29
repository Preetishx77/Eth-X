import React, {useCallback, useEffect, useState} from 'react';
import PageContainer from '../../components/UI/organisms/HOCs/PageContainer/PageContainer';
import {
  FlexColumnCard,
  FlexRowCard,
  ScreenWidth,
} from '../../components/UI/organisms/HOCs/FlexComponents/FlexComponents.styled';
import ProgressBar from '../../components/UI/atoms/ProgressBar/ProgressBar';
import {Image, StyleSheet, TouchableOpacity, Text, Alert} from 'react-native';
import {localImage} from '../../Provider/localImage';
import Typography from '../../components/UI/atoms/Typography/Typography.styled';
import Margin from '../../components/UI/atoms/Margin/Margin';
import {MARGIN} from '../../components/UI/atoms/Margin/enums/margin.enum';
import {useNavigation} from '@react-navigation/native';
import web3provider from '../../Provider/Web3Provider';
import 'react-native-get-random-values';
import '@ethersproject/shims';
import {ethers} from 'ethers';
import {Colors} from '../../Provider/Colors';
import Button from '../../components/UI/atoms/Button/Button.styled';

function Splash() {
  const [currentValue, setCurrentValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const {navigate} = useNavigation();
  const [wallet, setWallet] = useState(null);

  useEffect(() => {
    if (isLoading) {
      try {
        const createdWallet = ethers.Wallet.createRandom(web3provider);
        setWallet(createdWallet);
        setIsLoading(false);
      } catch (error) {
        if (isLoading) {
          console.error('Error creating wallet:', error);
          setIsLoading(false);
          // Handle error
        }
      }
    }
  }, [isLoading]);

  useEffect(() => {
    if (wallet?.address) {
      setCurrentValue(100);
    }
  }, [wallet]);

  return (
    <PageContainer customBackgroundColor={Colors.Black}>
      <FlexColumnCard height="100%" justifyContent="center" alignItems="center">
        <Image style={styles.logo} source={localImage.logo} />
        <Typography
          textAlign="center"
          variant="title1"
          fontWeight={700}
          color="LightBlue">
          ETH-X
        </Typography>
        <FlexColumnCard isPadding={true}>
          <Typography
            textAlign="center"
            variant="subHeading"
            fontWeight={700}
            color="White">
            Your Gateway to Decentralized Finance: Secure, Seamless Ethereum
            Wallet
          </Typography>
          <Margin margin={MARGIN.MD} />
          {wallet?.address ? (
            <>
              <Typography
                textAlign="center"
                variant="subHeading"
                fontWeight={600}
                color="White">
                Your created Wallet Address: {wallet?.address}
              </Typography>
              <Margin margin={MARGIN.MD} />
              <Typography
                textAlign="center"
                variant="subHeading"
                fontWeight={400}
                color="White">
                Note: You cannot use this for transactions as you need minimum
                ETH, Hence the transactions will be executed from a previously
                made wallet address.
              </Typography>
              <Margin margin={MARGIN.MD} />
              <FlexRowCard justifyContent="center">
                <Button
                  variant="secondary"
                  onPressBTN={() => {
                    navigate('BottomTabs');
                  }}
                  fluid={true}
                  isLoading={isLoading}
                  iconName="checkmark">
                  Get Started
                </Button>
              </FlexRowCard>
            </>
          ) : (
            <>
              <FlexRowCard justifyContent="center">
                <Button
                  variant="secondary"
                  onPressBTN={() => {
                    setCurrentValue(50);
                    setIsLoading(true);
                  }}
                  fluid={true}
                  isLoading={isLoading}
                  iconName="create">
                  Create Wallet
                </Button>
              </FlexRowCard>
            </>
          )}
        </FlexColumnCard>
        <Margin margin={MARGIN.MD} />
        <ProgressBar width="120px" maxLimit={100} currentValue={currentValue} />
      </FlexColumnCard>
    </PageContainer>
  );
}
const styles = StyleSheet.create({
  logo: {
    resizeMode: 'contain',
    width: (ScreenWidth * 80) / 100,
    height: 250,
  },
  button: {
    marginTop: 20,
    backgroundColor: Colors.Blue,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: Colors.White,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default Splash;
