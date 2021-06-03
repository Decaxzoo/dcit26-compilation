// BSCS 3-3
//Verceles, Robert Max U.
//Mendoza, Val Ashley
//Millonte, Brian Jay
import React, {useState} from 'react';
import { Text, View, Button, StyleSheet,Image} from 'react-native';

import Samplemodal from './components/Samplemodal';

export default function App(){

  const [isBOpen, setBOpen]= useState(false);

  return (
    
    <View style={styles.container}>
      <View>
      <Text style = {styles.title}>React Native</Text>
      </View>
      <Button title = "PRESS ME" onPress = {() => setBOpen(true)} />
      <Samplemodal visible = {isBOpen} onClose = {() => setBOpen(false)} />
      
    </View>
  );
}
const styles=StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
   },
  title: {
    paddingVertical: 1,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 2,
    backgroundColor: "black",
    textAlign: "center",
    color: 'white',
    fontSize: 30,
    fontWeight: "bold"
  }
});