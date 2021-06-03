// BSCS 3-3
//Verceles, Robert Max U.
//Mendoza, Val Ashley
//Millonte, Brian Jay
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {View, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Home from "../screens/Home";
import Profile from "../screens/Profile";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}
      options ={{ title:'Home', 
      headerStyle: {
        backgroundColor: "black"},headerTintColor: "#e5eb3f",
        headerTitleStyle: {
            fontWeight: 'bold'
      } }}/>
      <Stack.Screen name="Profile" component={Profile}
      options ={{ title:'Profile', 
      headerStyle: {
        backgroundColor: "black"}, headerTintColor: "#e5eb3f",
        headerTitleStyle: {
            fontWeight: 'bold'
       } }}/>
    </Stack.Navigator>
  );
};

export default HomeStack;