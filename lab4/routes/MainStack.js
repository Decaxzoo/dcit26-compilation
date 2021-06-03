// BSCS 3-3
//Verceles, Robert Max U.
//Mendoza, Val Ashley
//Millonte, Brian Jay
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';

import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

const Drawer = createDrawerNavigator();

const MainNavigator=()=>{
  
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContentOptions={{
    activeTintColor: "#e5eb3f",
    inactiveTintColor: "#d9d9d9"
  }} 
    drawerStyle={{
    backgroundColor: "black" ,
    width: 240}}>
                <Drawer.Screen name="Home" component={HomeStack}
                options ={{ title:'Home', 
                drawerIcon: ({focused,size})=> ( 
                  <AntDesign name="home" size={24} color="#e5eb3f" backgroundColor= "#e5eb3f"/> )}}/>
                <Drawer.Screen name="About" component={AboutStack}
                options ={{ title:'About', 
                drawerIcon: ({focused,size})=> ( 
                  <AntDesign name="infocirlceo" size={24} color="#e5eb3f" backgroundColor= "#e5eb3f"/> )}}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigator;
