import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  FlexColumnCard,
  ScreenHeight,
} from '../../../components/UI/organisms/HOCs/FlexComponents/FlexComponents.styled';
import RenderListData from '../../../components/UI/organisms/RenderListData/RenderListData';
import PageContainer from '../../../components/UI/organisms/HOCs/PageContainer/PageContainer';
import {ScrollView} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import axios from 'axios';

function History() {
  const [txnHistory, setTxnHistory] = useState<any>([]);

  useFocusEffect(
    useCallback(() => {
      async function fetchEthTransfers() {
        const apiUrl =
          'https://api-goerli.etherscan.io/api?module=account&action=txlist&address=0xdabB1fbb4e7d4c1ccC77F95D5Aa238f416ab571C&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=WHPME8QQDMQ9H8HUEW17QYZXURTY8JM3QP';
        try {
          const response = await axios.get(apiUrl, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const data = response.data;
          console.log(data.result);
          setTxnHistory(data.result);

          // if (data.status === '1') {
          //   const transactions = data.result;
          //   console.log('ETH Transfer Transactions:', transactions);
          //   setTxnHistory(transactions);
          // } else {
          //   // throw new Error(data.message);
          // }
        } catch (error) {
          console.log(JSON.stringify(error));
          console.error('Error fetching ETH transfers:', error);
        }
      }
      fetchEthTransfers();
    }, []),
  );

  const formattedTransactions = useMemo(() => {
    const formattedArr = txnHistory.map(transaction => {
      return {
        id: transaction.nonce, // Using nonce as id, you can use any other identifier if needed
        sender: transaction.from,
        recipient: transaction.to,
        amount: `${parseInt(transaction.value) / 1e18} ETH`, // Convert from Wei to ETH
        dateTime: transaction.timeStamp,
        symbol: 'ETH', // Assuming all transactions are in ETH
      };
    });
    return formattedArr;
  }, [txnHistory]);

  return (
    <PageContainer>
      <ScrollView>
        <FlexColumnCard marginTop={ScreenHeight * 0.075}>
          <RenderListData
            type={'transaction'}
            dataObj={formattedTransactions}
          />
        </FlexColumnCard>
      </ScrollView>
    </PageContainer>
  );
}

export default History;
