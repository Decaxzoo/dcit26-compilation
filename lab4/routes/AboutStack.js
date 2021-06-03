// BSCS 3-3
//Verceles, Robert Max U.
//Mendoza, Val Ashley
//Millonte, Brian Jay
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import About from "../screens/About";

const Stack = createStackNavigator();

const AboutStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="About" component={About}
       options ={{ title:'About', 
      headerStyle: {
        backgroundColor: "black"},headerTintColor: "#e5eb3f",
        headerTitleStyle: {
            fontWeight: 'bold'
      } }}/>
    </Stack.Navigator>
  );
};

export default AboutStack;

