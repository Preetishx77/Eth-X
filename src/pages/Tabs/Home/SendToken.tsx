import React, {useCallback, useEffect, useRef, useState} from 'react';
import PageContainer from '../../../components/UI/organisms/HOCs/PageContainer/PageContainer';
import {Image, Linking, Pressable, ScrollView} from 'react-native';
import {
  FlexColumnCard,
  FlexRowCard,
  ScreenHeight,
} from '../../../components/UI/organisms/HOCs/FlexComponents/FlexComponents.styled';
import {Colors} from '../../../Provider/Colors';
import Typography from '../../../components/UI/atoms/Typography/Typography.styled';
import {localImage} from '../../../Provider/localImage';
import BackIcon from '../../../assets/AuxiliaryIcons/BackIcon';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import Margin from '../../../components/UI/atoms/Margin/Margin';
import {MARGIN} from '../../../components/UI/atoms/Margin/enums/margin.enum';
import TextField from '../../../components/UI/atoms/Input/TextField';
import Button from '../../../components/UI/atoms/Button/Button.styled';
import CoinIcon from '../../../components/UI/molecules/CoinIcon/CoinIcon';
import DropdownComponent from '../../../components/UI/atoms/Dropdown/Dropdown';
import BottomSheet from '../../../components/UI/molecules/BottomSheet/BottomSheet';
import web3provider from '../../../Provider/Web3Provider';
import {ethers} from 'ethers';
import {PRIVATE_KEY, WALLET_ADDR} from '../../../Provider/Keys';
import {AddressData} from '../../../Provider/CoinsData';

function SendToken() {
  const {goBack} = useNavigation();
  const sendBottomSheetRef = useRef(null);
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState<number>(0);
  const [amount, setAmount] = useState<string>('');
  const [amountError, setAmountError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [estimateGas, setEstimateGas] = useState<string>('');
  const [txnURL, setTxnURL] = useState<string>('');
  const [finalTxnStatus, setFinalTxnStatus] = useState({
    status: '',
    message: '',
  });
  const [isInitiatingTransaction, setIsInitiatingTransaction] = useState(false);
  const {navigate} = useNavigation();

  useFocusEffect(
    useCallback(() => {
      setFinalTxnStatus({
        status: '',
        message: '',
      });
      async function fetchWalletBalance() {
        try {
          const balance = await web3provider.getBalance(WALLET_ADDR);
          const formattedBalance = ethers.formatEther(balance);
          setBalance(Number(formattedBalance));
        } catch (error) {
          setAmountError("Couldnt' Fetch Balance");
        }
      }
      fetchWalletBalance();
    }, []),
  );

  const InitiateSendToken = async () => {
    try {
      setIsInitiatingTransaction(true);
      const amountToSend = ethers.parseEther(amount); // Sending amount in Ether
      // Gas price (in wei)
      const gasPrice = ethers.parseUnits(estimateGas, 'gwei'); // Using gas price in Gwei
      const reducedGasPrice = ethers.parseUnits('5', 'gwei');
      // Gas limit
      const gasLimit = 21000; // Standard gas limit for a simple transfer
      const wallet = new ethers.Wallet(PRIVATE_KEY, web3provider);
      // Transaction object
      const tx = {
        to: address,
        value: amountToSend,
        gasPrice: reducedGasPrice,
        gasLimit: gasLimit,
      };

      // Sign the transaction
      const signedTx = await wallet.signTransaction(tx);
      // Send the signed transaction
      const txResponse = await wallet.sendTransaction(tx);
      if (txResponse.hash) {
        setFinalTxnStatus({status: 'Executed', message: ''});
        setTxnURL(`https://goerli.etherscan.io/tx/${txResponse.hash}`);
      }
      console.log('Transaction Hash:', txResponse.hash);
    } catch (error) {
      console.error('Error sending transaction:', error);
      console.log('Error sending transaction:', error);
      setFinalTxnStatus({
        status: 'Failed',
        message: error.message,
      });
    } finally {
      setIsInitiatingTransaction(false);
    }
  };

  useEffect(() => {
    if (amount && !address) {
      setAddressError('Enter Address First');
    } else if (amount && address) {
      const wallet = new ethers.Wallet(PRIVATE_KEY, web3provider);
      try {
        const tx = {
          to: address,
          value: ethers.parseEther(amount), // Amount of ether to send (in ether)
        };

        wallet
          .estimateGas(tx)
          .then(gasEstimate => {
            console.log(gasEstimate.toString());
            setEstimateGas(gasEstimate.toString());
          })
          .catch(error => {
            if (error.message?.includes('unconfigured name')) {
              setAddressError('Invalid Address');
            } else if (error.message?.includes('insufficient funds')) {
              setAmountError('Amount is exceeding the available Balance');
            }
          });
      } catch (error) {
        if (error.message?.includes('invalid FixedNumber')) {
          setAmountError('Invalid Amount');
        } else {
          setAmountError(error.message);
        }
      }
    }
  }, [amount, address]);

  return (
    <PageContainer>
      <ScrollView>
        <FlexColumnCard marginTop={ScreenHeight * 0.075}>
          <FlexRowCard
            justifyContent="space-between"
            alignItems="center"
            isPadding={true}>
            <FlexRowCard
              alignItems="center"
              gap={10}
              justifyContent="space-between">
              <Pressable onPress={() => goBack()} style={{marginTop: 5}}>
                <BackIcon width={36} height={36} color={Colors.Black} />
              </Pressable>
              <Typography
                variant={'title1'}
                fontWeight={800}
                color="Black"
                style={{letterSpacing: 1.2}}>
                {'Send Tokens'}
              </Typography>
            </FlexRowCard>

            <Pressable>
              <FlexRowCard
                justifyContent="center"
                alignItems="center"
                borderRadius={50}
                backgroundColor={Colors.LightBlue}
                style={{
                  width: 50,
                  height: 50,
                }}>
                <Image source={localImage.sendArrow} />
              </FlexRowCard>
            </Pressable>
          </FlexRowCard>
        </FlexColumnCard>
        <FlexColumnCard isPadding={true}>
          <FlexRowCard justifyContent="space-between">
            <FlexRowCard alignItems="center" gap={10}>
              <CoinIcon symbol="ETHUSDT" />
              <FlexColumnCard gap={5}>
                <Typography variant={'body'} fontWeight={700} color="Grey_3">
                  {'Ethereum'}
                </Typography>
              </FlexColumnCard>
            </FlexRowCard>
            <FlexRowCard alignItems="center" gap={5}>
              <Typography variant={'caption1'} fontWeight={700} color="Black">
                {'Available:'}
              </Typography>
              <Typography variant={'caption1'} fontWeight={700} color="Black">
                {balance?.toFixed(3) + 'GoETH'}
              </Typography>
            </FlexRowCard>
          </FlexRowCard>
        </FlexColumnCard>
        <FlexColumnCard style={{paddingLeft: 16}}>
          <Typography variant={'body'} fontWeight={700} color="Black">
            {'Choose from saved address'}
          </Typography>
        </FlexColumnCard>
        <DropdownComponent
          value={address}
          setValue={setAddress}
          data={AddressData}
        />
        <FlexRowCard justifyContent="center">
          <Typography variant={'body'} fontWeight={700} color="Black">
            {'---OR----'}
          </Typography>
          <Margin margin={MARGIN.XS} />
        </FlexRowCard>
        <FlexColumnCard isPadding={true}>
          <Typography variant={'body'} fontWeight={700} color="Black">
            {'Recipient Wallet Address'}
          </Typography>
          <Margin margin={MARGIN.XS} />
          <TextField
            label={'OxABCD....'}
            value={address}
            onChangeText={(newText: React.SetStateAction<string>) => {
              setAddress(newText);
              setAddressError('');
            }}
            error={addressError}
            placeholder={'Enter the Recipient Wallet Address'}
          />
          <Margin margin={MARGIN.SM} />
          <Typography variant={'body'} fontWeight={700} color="Black">
            {'ETH Quantity'}
          </Typography>
          <Margin margin={MARGIN.XS} />
          <TextField
            label={'Goerli-ETH'}
            value={amount}
            disabled={address.length === 0}
            placeholder={'Enter the Qty of GoETH'}
            onChangeText={(newText: React.SetStateAction<string>) => {
              setAmount(newText);
              setAmountError('');
            }}
            isMaxAvl={true}
            onPressMax={() => {
              setAmount(balance?.toFixed(3));
            }}
            error={amountError}
          />
          <Margin margin={MARGIN.XS} />
          <FlexRowCard justifyContent="space-between" alignItems="center">
            <Typography variant={'body'} fontWeight={700} color="Grey_3">
              {'Estimated Gas Fees :'}
            </Typography>
            <Typography variant={'body'} fontWeight={800} color="Black">
              {estimateGas || 0}
            </Typography>
          </FlexRowCard>
          <Margin margin={MARGIN.LG} />

          <FlexRowCard justifyContent="space-between" alignItems="center">
            <Button
              variant="primary"
              fluid={true}
              iconName="sendArrow"
              disabled={
                addressError.length !== 0 ||
                amountError?.length !== 0 ||
                amount?.length === 0 ||
                address?.length === 0
              }
              onPressBTN={() => sendBottomSheetRef.current?.open()}>
              Send
            </Button>
          </FlexRowCard>
        </FlexColumnCard>
      </ScrollView>
      <BottomSheet
        height={300}
        ref={sendBottomSheetRef}
        primaryButtonText={
          finalTxnStatus.status === ''
            ? 'Confirm'
            : finalTxnStatus.status === 'Executed'
            ? 'History'
            : 'Home'
        }
        secondaryButtonText={
          finalTxnStatus.status === 'Executed' ? 'Track Txn' : 'Back'
        }
        addHeaderSvgIcon={true}
        addPrimaryButton={true}
        addHeaderText={true}
        primaryButtonIcon={
          finalTxnStatus.status === 'Executed' || finalTxnStatus.status === ''
            ? 'checkmark_white'
            : ''
        }
        secondaryButtonIcon={finalTxnStatus.status === '' ? 'cancel' : ''}
        addSecondaryButton={true}
        addSubHeaderText={true}
        
        onPressPrimary={() => {
          finalTxnStatus.status === ''
            ? InitiateSendToken()
            : finalTxnStatus.status === 'Executed'
            ? navigate('HISTORY')
            : navigate('Home');
        }}
        onPressSecondary={() => {
          finalTxnStatus.status === 'Executed'
            ? Linking.openURL(txnURL)
            : setFinalTxnStatus({status: '', message: ''});
          sendBottomSheetRef.current?.close();
        }}
        isPrimaryButtonLoading={isInitiatingTransaction}
        headerText={
          finalTxnStatus.status === ''
            ? 'Are you Sure ?'
            : finalTxnStatus.status === 'Executed'
            ? 'Sent for execution'
            : 'Tranasction Failed'
        }
        subHeaderText={
          finalTxnStatus.status === ''
            ? `Please confirm that you are sending ${amount} Goerli ETH to the wallet address ${address}, transaction once initiated can't be reverted`
            : finalTxnStatus.status === 'Executed'
            ? 'Navigate to History to check the transaction status or you can click on the Track button to see the real time status on ETherscan'
            : `The transaction you requested has failed, kindly try again because ${finalTxnStatus.message}`
        }
        subHeaderTextColor="White"
      />
    </PageContainer>
  );
}

export default SendToken;
