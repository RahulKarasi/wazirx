import * as React from 'react';
import {StyleSheet, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import QuickBuyScreen from '../screens/QuickBuyScreen';
import FundsScreen from '../screens/FundsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Quick Buy'
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: 'rgb(35,48,63)',
            borderTopColor: 'black',
          },
        }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
              tabBarIcon: ({focused}) =>
                focused ? (
                  <Image
                    source={require('../utils/icons/home-focus.png')}
                    style={styles.tabBarIcon}
                  />
                ) : (
                  <Image
                    source={require('../utils/icons/home.png')}
                    style={styles.tabBarIcon}
                  />
                ),
            }} />
        <Tab.Screen name="Quick Buy" component={QuickBuyScreen} options={{
              tabBarIcon: ({focused}) =>
                focused ? (
                  <Image
                    source={require('../utils/icons/flash-focus.png')}
                    style={styles.tabBarIcon}
                  />
                ) : (
                  <Image
                    source={require('../utils/icons/flash.png')}
                    style={styles.tabBarIcon}
                  />
                ),
            }} />
        <Tab.Screen name="Funds" component={FundsScreen} options={{
              tabBarIcon: ({focused}) =>
                focused ? (
                  <Image
                    source={require('../utils/icons/wallet-focus.png')}
                    style={styles.tabBarIcon}
                  />
                ) : (
                  <Image
                    source={require('../utils/icons/wallet.png')}
                    style={styles.tabBarIcon}
                  />
                ),
            }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    tabBarIcon:{
        height:21,
        width:21,
        marginTop:7
    }
})