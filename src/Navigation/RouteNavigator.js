/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import Splash from '../pages/Splash/Splash';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from '../assets/BottomTabs/HomeIcon';
import {Colors} from '../Provider/Colors';
import {
  ScreenHeight,
  ScreenWidth,
} from '../components/UI/organisms/HOCs/FlexComponents/FlexComponents.styled';
import WalletIcon from '../assets/BottomTabs/WalletIcon';
import HistoryIcon from '../assets/BottomTabs/HistoryIcon';
import SearchIcon from '../assets/BottomTabs/SearchIcon';
import Home from '../pages/Tabs/Home/Home';
import History from '../pages/Tabs/History/History';
import SendToken from '../pages/Tabs/Home/SendToken';

const StackContainerForHomeScreen = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();
const BottomTabsContainer = createBottomTabNavigator();

const AuthenticatedStackForHomeScreen = () => {
  return (
    <StackContainerForHomeScreen.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <StackContainerForHomeScreen.Screen name="Home" component={Home} />
      <StackContainerForHomeScreen.Screen name="Send" component={SendToken} />
    </StackContainerForHomeScreen.Navigator>
  );
};

const BottomStack = ({route}) => {
  return (
    <BottomTabsContainer.Navigator
      initialRouteName={'HOME'}
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarLabel: ({focused}) => {
          return <></>;
        },
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'HOME') {
            return <HomeIcon active={focused} />;
          }
          if (route.name === 'ORDERS') {
            return <SearchIcon active={focused} />;
          }
          if (route.name === 'HISTORY') {
            return <HistoryIcon active={focused} />;
          }
          if (route.name === 'WALLET') {
            return <WalletIcon active={focused} />;
          }
        },
        tabBarStyle: {
          backgroundColor: Colors.tabBarStyleBackground,
          paddingTop: (ScreenHeight * 1) / 100,
          paddingBottom: (ScreenHeight * 1) / 100,
          height: (ScreenHeight * 9) / 100,
          width: ScreenWidth,
          borderTopWidth: 1,
          borderTopRightRadius: 60,
          borderTopLeftRadius: 55,
          elevation: 0,
        },
      })}>
      <BottomTabsContainer.Screen
        name="HOME"
        component={AuthenticatedStackForHomeScreen}
        options={{headerShown: false}}
      />

      <BottomTabsContainer.Screen
        name="ORDERS"
        component={Home}
        options={{headerShown: false}}
      />
      <BottomTabsContainer.Screen
        name="HISTORY"
        component={History}
        options={{headerShown: false}}
      />
      <BottomTabsContainer.Screen
        name="WALLET"
        component={Home}
        options={{headerShown: false}}
      />
    </BottomTabsContainer.Navigator>
  );
};

function RouteNavigator() {
  return (
    <RootStack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false, // Hide the header for all screens
        animation: 'slide_from_right',
      }}>
      {/* Screen definitions */}
      {/* We can add UnAuthenticated Stack and Authenticated Stack to achieve Authentication */}
      <RootStack.Screen name="Splash" component={Splash} />
      <RootStack.Screen name="BottomTabs" component={BottomStack} />
    </RootStack.Navigator>
  );
}

export default RouteNavigator;
