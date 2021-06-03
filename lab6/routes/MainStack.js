// BSCS 3-3
//Verceles, Robert Max U.
//Mendoza, Val Ashley
//Millonte, Brian Jay
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons'; 

import HomeStack from './HomeStack';

const Drawer = createDrawerNavigator();


const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator  drawerStyle={{
    backgroundColor: 'black',color:"#e5eb3f"
  }}>
        <Drawer.Screen name="Home" component = { HomeStack } options={{
            drawerIcon: config => <AntDesign
                name="home"
                color="#e5eb3f"
                size={25}>
                </AntDesign> }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;