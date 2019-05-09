import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import { Platform, StyleSheet } from 'react-native';
import { colors } from '~/styles';

import Home from '~/pages/home';
import Product from '~/pages/product';
import Cart from '~/pages/cart';

const defaultNavigationOptions = {
  headerStyle: {
    height: Platform.OS === 'ios' ? 74 : 54,
    paddingTop: Platform.OS === 'ios' ? 40 : 0,
    backgroundColor: colors.white,
    borderBottomWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
  },
  headerTitleStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.secondary,
  },
  headerTintColor: colors.regular,
  headerBackTitle: null,
};

const MainStack = createStackNavigator(
  {
    Home,
    Product,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions,
    headerLayoutPreset: 'center',
  },
);

const CartStack = createStackNavigator(
  {
    Cart,
  },
  {
    initialRouteName: 'Cart',
    defaultNavigationOptions,
    headerLayoutPreset: 'center',
  },
);

export default createAppContainer(
  createBottomTabNavigator(
    {
      Main: MainStack,
      Cart: CartStack,
    },
    {
      tabBarOptions: {
        showIcon: true,
        showLabel: false,
        activeTintColor: colors.secondary,
        inactiveTintColor: colors.gray,
        style: {
          height: Platform.OS === 'ios' ? 74 : 54,
          paddingBottom: Platform.OS === 'ios' ? 20 : 0,
          backgroundColor: colors.white,
          elevation: 0,
          shadowOpacity: 0,
          borderTopWidth: StyleSheet.hairlineWidth,
          borderColor: colors.lighter,
        },
        indicatorStyle: {
          height: 0,
        },
      },
    },
  ),
);
