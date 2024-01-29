import React, {useState} from 'react';
import Margin from '../../atoms/Margin/Margin';
import {MARGIN} from '../../atoms/Margin/enums/margin.enum';
import Typography from '../../atoms/Typography/Typography.styled';
import CoinIcon from '../../molecules/CoinIcon/CoinIcon';
import {
  FlexColumnCard,
  FlexRowCard,
} from '../HOCs/FlexComponents/FlexComponents.styled';
import {numberWithCommas} from '../../../../Provider/helpers/numberWithComma';

export const renderAssetItem = ({item}) => (
  <FlexColumnCard style={{marginVertical: 40}}>
    <FlexRowCard justifyContent="space-between">
      <FlexRowCard alignItems="center">
        <CoinIcon symbol={item.symbol + 'USDT'} />
        <Margin isHorizontal={true} margin={MARGIN.SM} />
        <FlexColumnCard justifyContent="space-between" gap={10}>
          <Typography variant={'subHeading'} fontWeight={700} color="Black">
            {item.symbol}
          </Typography>
          <Typography variant={'caption1'} fontWeight={500} color="Grey_3">
            {item.amount}
          </Typography>
        </FlexColumnCard>
      </FlexRowCard>
      <FlexColumnCard justifyContent="space-between" gap={10}>
        <Typography
          variant={'subHeading'}
          fontWeight={700}
          color="Black"
          textAlign="right">
          {numberWithCommas(Number(item.total)) + ' USDT'}
        </Typography>
        <Typography
          variant={'caption1'}
          fontWeight={500}
          color="Grey_3"
          textAlign="right">
          {item.price + ' USDT'}
        </Typography>
      </FlexColumnCard>
    </FlexRowCard>
  </FlexColumnCard>
);
export const renderTransactionItem = ({item}) => (
  <FlexColumnCard style={{marginVertical: 40}}>
    <FlexRowCard justifyContent="space-between">
      <FlexRowCard alignItems="center">
        <CoinIcon symbol={item.symbol + 'USDT'} />
        <Margin isHorizontal={true} margin={MARGIN.SM} />
        <FlexColumnCard justifyContent="space-between" gap={10}>
          <Typography variant={'subHeading'} fontWeight={700} color="Grey_3">
            {item.symbol}
          </Typography>
          <Typography variant={'caption1'} fontWeight={500} color="Grey_3">
            Receiver: {'0x...' + item.recipient?.slice(-5)}
          </Typography>
        </FlexColumnCard>
      </FlexRowCard>

      <FlexColumnCard justifyContent="space-between" gap={10}>
        <Typography
          variant={'subHeading'}
          fontWeight={700}
          color="Black"
          textAlign="right">
          {item.amount}
        </Typography>
        <Typography variant={'caption1'} fontWeight={500} color="Grey_3">
        {new Date(parseInt(item.dateTime) * 1000).toLocaleString()}
        </Typography>
      </FlexColumnCard>
    </FlexRowCard>
  </FlexColumnCard>
);
