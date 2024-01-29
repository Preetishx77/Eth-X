import React, {useCallback, useEffect, useRef, useState} from 'react';
import PageContainer from '../../../components/UI/organisms/HOCs/PageContainer/PageContainer';
import Navbar from '../../../components/UI/molecules/Navbar/Navbar';
import {
  FlexColumnCard,
  FlexRowCard,
  ScreenHeight,
  ScreenWidth,
} from '../../../components/UI/organisms/HOCs/FlexComponents/FlexComponents.styled';
import {Colors} from '../../../Provider/Colors';
import Typography from '../../../components/UI/atoms/Typography/Typography.styled';
import {Image, ScrollView} from 'react-native';
import {localImage} from '../../../Provider/localImage';
import Margin from '../../../components/UI/atoms/Margin/Margin';
import {MARGIN} from '../../../components/UI/atoms/Margin/enums/margin.enum';
import Button from '../../../components/UI/atoms/Button/Button.styled';
import Clipboard from '@react-native-clipboard/clipboard';
import RenderListData from '../../../components/UI/organisms/RenderListData/RenderListData';
import {WALLET_ADDR} from '../../../Provider/Keys';
import web3provider from '../../../Provider/Web3Provider';
import {ethers} from 'ethers';
import BottomSheet from '../../../components/UI/molecules/BottomSheet/BottomSheet';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
const WalletAddr = WALLET_ADDR;

function Home() {
  const [homeCopyAsset, setHomeCopyAsset] = useState('copy');
  const sendBottomSheetRef = useRef(null);
  const {navigate} = useNavigation();

  const handleCopyBTNClick = () => {
    Clipboard.setString(WalletAddr);
    setHomeCopyAsset('checkmark');
    setTimeout(() => {
      setHomeCopyAsset('copy');
    }, 1500);
  };
  const [balance, setBalance] = useState<number>(0);
  const [error, setError] = useState('');

  useFocusEffect(
    useCallback(() => {
      async function fetchWalletBalance() {
        try {
          const balance = await web3provider.getBalance(WalletAddr);
          const logs = await web3provider.getLogs({
            address: WalletAddr,
          })
          console.log(logs);
          const formattedBalance = ethers.formatEther(balance);
          setBalance(Number(formattedBalance));
        } catch (error) {
          setError("Couldnt' Fetch Balance");
        }
      }

      fetchWalletBalance();
    }, []),
  );

  return (
    <PageContainer>
      <ScrollView>
        <FlexColumnCard
          height={ScreenHeight * 0.6}
          justifyContent="space-between"
          style={{
            backgroundColor: Colors.Black,
          }}>
          <Navbar />
          <FlexRowCard justifyContent="center" width="100%">
            <Image
              source={localImage.headerBg}
              resizeMode="cover"
              style={{
                width: ScreenWidth,
                height: ScreenHeight * 0.225,
                marginTop: -10,
              }}
            />
          </FlexRowCard>
          <FlexColumnCard
            justifyContent="space-between"
            isPadding={true}
            style={{marginHorizontal: 8}}>
            <Typography variant={'body'} fontWeight={600} color="Grey_9">
              Available Balance
            </Typography>
            <Margin margin={MARGIN.XS} />
            <Typography
              variant={!error ? 'title1' : 'body'}
              fontWeight={!error ? 800 : 500}
              color={!error ? 'White' : 'Incorrect_SELL'}
              style={{letterSpacing: 1.3}}>
              {!error ? balance?.toFixed(3) + ' GoETH' : error}
            </Typography>
          </FlexColumnCard>
          <FlexRowCard
            isPadding={true}
            justifyContent="space-between"
            gap={10}
            marginTop={-10}>
            <Button
              variant="primary"
              fluid={true}
              iconName={'sendArrow'}
              onPressBTN={() => sendBottomSheetRef?.current?.open()}>
              <Typography variant={'body'} fontWeight={700} color="White">
                Send
              </Typography>
            </Button>
            <Button
              variant="secondary"
              fluid={true}
              iconName={homeCopyAsset}
              onPressBTN={handleCopyBTNClick}>
              <Typography variant={'body'} fontWeight={700} color="LightBlue">
                Copy
              </Typography>
            </Button>
          </FlexRowCard>
          <FlexColumnCard
            height={ScreenHeight * 0.1}
            style={{
              backgroundColor: Colors.White,
              borderTopRightRadius: 42.5,
              borderTopLeftRadius: 40,
            }}
          />
        </FlexColumnCard>
        <RenderListData type={'asset'} />
      </ScrollView>
      <BottomSheet
        height={300}
        ref={sendBottomSheetRef}
        primaryButtonText="Confirm"
        secondaryButtonText="Cancel"
        addHeaderSvgIcon={true}
        addPrimaryButton={true}
        addHeaderText={true}
        primaryButtonIcon={'checkmark_white'}
        secondaryButtonIcon={'cancel'}
        addSecondaryButton={true}
        addSubHeaderText={true}
        onPressPrimary={() => navigate('Send')}
        onPressSecondary={() => sendBottomSheetRef.current?.close()}
        headerText={`Available Tokens ${balance?.toFixed(3)}`}
        subHeaderText={`You have a balance of ${balance?.toFixed(3)} Go Erli ETH to make an transcation, PLease click Confirm to proceed`}
        subHeaderTextColor="White"
      />
    </PageContainer>
  );
}

export default Home;
