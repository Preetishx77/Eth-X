import React, {useEffect, useState} from 'react';
import {
  FlexColumnCard,
  FlexRowCard,
} from '../HOCs/FlexComponents/FlexComponents.styled';
import Typography from '../../atoms/Typography/Typography.styled';
import {FlatList, Pressable} from 'react-native';
import SortIcon from '../../../../assets/AuxiliaryIcons/SortIcon';
import {Colors} from '../../../../Provider/Colors';
import Margin from '../../atoms/Margin/Margin';
import {MARGIN} from '../../atoms/Margin/enums/margin.enum';
import {coinsData, transactionHistory} from '../../../../Provider/CoinsData';
import {renderAssetItem, renderTransactionItem} from './RenderItem';

function RenderListData({type, dataObj}) {
  const [coinsDataObj, setCoinsDataObj] = useState(coinsData);
  const [txnDataObj, setTxnDataObj] = useState(coinsData);
  useEffect(() => {
    setTxnDataObj(dataObj);
  }, [dataObj?.length]);
  const [sortOrderCoins, setSortOrderCoins] = useState('asc');

  const [sortOrderTxn, setSortOrderTxn] = useState('asc');

  const sortCoinsData = () => {
    const sortedCoins = [...coinsDataObj].sort((a, b) => {
      const totalA = parseFloat(a.total);
      const totalB = parseFloat(b.total);

      if (sortOrderCoins === 'asc') {
        return totalA - totalB;
      } else {
        return totalB - totalA;
      }
    });

    setSortOrderCoins(sortOrderCoins === 'asc' ? 'desc' : 'asc');
    setCoinsDataObj(sortedCoins);
  };

  const sortTxnData = () => {
    const sortedTransactionHistory = [...txnDataObj].sort((a, b) => {
      const dateA = new Date(parseInt(a.dateTime));
      const dateB = new Date(parseInt(b.dateTime));
      if (sortOrderTxn === 'asc') {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
    setSortOrderTxn(sortOrderTxn === 'asc' ? 'desc' : 'asc');
    setTxnDataObj(sortedTransactionHistory);
  };

  return (
    <FlexColumnCard style={{marginHorizontal: 32}}>
      <FlexRowCard justifyContent="space-between" alignItems="center">
        <Typography
          variant={'title2'}
          fontWeight={800}
          color="Black"
          style={{letterSpacing: 1}}>
          {type === 'asset' ? 'My Assets' : 'Trasaction History'}
        </Typography>
        <Pressable onPress={type === 'asset' ? sortCoinsData : sortTxnData}>
          <FlexRowCard
            justifyContent="center"
            alignItems="center"
            borderRadius={50}
            backgroundColor={Colors.LightBlue}
            style={{
              width: 32,
              height: 32,
            }}>
            <SortIcon width={20} height={20} color={Colors.White} />
          </FlexRowCard>
        </Pressable>
      </FlexRowCard>
      <Margin margin={MARGIN.MD} />
      <FlatList
        data={
            type === 'asset'
            ? coinsDataObj
            : txnDataObj
        }
        renderItem={type === 'asset' ? renderAssetItem : renderTransactionItem}
        keyExtractor={item => item.id}
      />
    </FlexColumnCard>
  );
}

export default RenderListData;
