import React from 'react';

import Home from '../../Screens/Home';
import List from '../../Screens/List';
import Contact from '../../Screens/Contact';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tabs = createBottomTabNavigator();

const NavigationTabs = () => {
  return (
    <Tabs.Navigator
    initialRouteName='home'
    screenOptions={{
        tabBarActiveTintColor: '#ac2525'
    }}
    >
      <Tabs.Screen name="Home" 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: () => (
          <MaterialCommunityIcons name='home' color='pink' size={22}/>
        )
      }}
      component={Home} 
      />
      <Tabs.Screen name="Listagem" 
       options={{
        tabBarLabel: 'Listagem',
        tabBarIcon: () => (
          <MaterialCommunityIcons name='clipboard-list-outline' color='pink' size={22}/>
        )
      }}
      component={List} />
      <Tabs.Screen name="Contato" 
       options={{
        tabBarLabel: 'Contato',
        tabBarIcon: () => (
          <MaterialCommunityIcons name='card-account-mail-outline' color='pink' size={22}/>
        )
      }}
      component={Contact} />
    </Tabs.Navigator>
  );
};

const BottomNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <NavigationTabs />
    </NavigationContainer>
  );
};

export default BottomNavigation;
