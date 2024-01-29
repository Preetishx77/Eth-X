import React from 'react';
import {RefreshControl, Platform} from 'react-native';
import styled from 'styled-components/native';
import {StatusBar} from 'react-native';
import {Colors} from '../../../../../Provider/Colors';

interface PageContainerProps {
  children: React.ReactNode;
  pullToRefresh?: () => void;
  customBackgroundColor?: string;
}

const SafeArea = styled.SafeAreaView<Partial<PageContainerProps>>`
  flex: 1;
  background-color: ${({customBackgroundColor}) =>
    customBackgroundColor || Colors.White};
`;

const IOSContainer = styled.View<Partial<PageContainerProps>>`
  flex: 1;
  background-color: ${({customBackgroundColor}) =>
    customBackgroundColor || Colors.White};
`;

const PageContainer = ({
  children,
  pullToRefresh,
  customBackgroundColor,
}: PageContainerProps) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    if (pullToRefresh) {
      pullToRefresh();
    }
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, [pullToRefresh]);

  return (
    <React.Fragment>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        networkActivityIndicatorVisible={true}
      />
      {Platform.OS === 'ios' ? (
        <IOSContainer customBackgroundColor={customBackgroundColor}>
          {children}
        </IOSContainer>
      ) : (
        <SafeArea
          customBackgroundColor={customBackgroundColor}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          {children}
        </SafeArea>
      )}
    </React.Fragment>
  );
};

export default PageContainer;
