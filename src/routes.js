import { TabNavigator, StackNavigator } from 'react-navigation';
import { Platform, StyleSheet } from 'react-native';
import { colors } from '~/styles';

import Home from '~/pages/home';
import Product from '~/pages/product';
import Cart from '~/pages/cart';

const navigationOptions = {
  headerStyle: {
    height: Platform.OS === 'ios' ? 74 : 54,
    paddingTop: Platform.OS === 'ios' ? 40 : 20,
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

const createNavigator = () => TabNavigator(
  {
    Main: StackNavigator(
      {
        Home: { screen: Home },
        Product: { screen: Product },
      },
      {
        initialRouteName: 'Home',
        navigationOptions,
      },
    ),
    Cart: StackNavigator(
      {
        Cart: { screen: Cart },
      },
      {
        initialRouteName: 'Cart',
        navigationOptions,
      },
    ),
  },
  {
    tabBarPosition: 'bottom',
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
);

export default createNavigator;
