import React from 'react';
import Ionicons from 'react-native-vector-icons/Entypo';

import { createBottomTabNavigator } from 'react-navigation-tabs';

import UserScreen from '../screen/UserScreen';
import ChatScreen from '../screen/ChatScreen';
import CallScreen from '../screen/CallScreen';

const BottomTabs = createBottomTabNavigator(
  {
    User: { screen: UserScreen, },
    Chat: { screen: ChatScreen },
    Calls: { screen: CallScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'User') {
          iconName = 'user';
        } else if (routeName === 'Chat') {
          iconName = 'message';
        }
        else {
          iconName = 'phone';
        }
        return <IconComponent name={iconName} size={30} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#ff7ab1',
      inactiveTintColor: '#6c467f',
      showLabel: false, style: { backgroundColor: '#23152e' }, tabStyle: {}
    }
  }
);
export default BottomTabs;