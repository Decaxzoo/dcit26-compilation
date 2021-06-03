// BSCS 3-3
//Verceles, Robert Max U.
//Mendoza, Val Ashley
//Millonte, Brian Jay
import React from 'react';
import { Text, View, Button, StyleSheet,Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
const Home = ({navigation})=>{
  return (
      <View style={styles.container}>
      <Image style={styles.picture} source={require('./wfop.gif')} />
        <View> 
        <Text style = {styles.title}>LAB 4</Text>
        </View>
        <AntDesign.Button name="profile" size={20} color="black" backgroundColor= "#e5eb3f" onPress={()=>navigation.navigate('Profile')}> Profile 
        </AntDesign.Button>
      </View>
  );
}
export default Home;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#00001a'
      
  },
  title: {
    textShadowColor: 'rgba(100, 100, 0, 100)',
    textShadowOffset: {width: 2, height: 1},
    textShadowRadius: 10,
    paddingVertical: 20,
    textAlign: "center",
    fontSize: 30,
    color: "#e5eb3f",
    fontWeight: "bold"
},
  picture:{
    position: 'absolute'
    ,
    borderRadius: 0,
    margin: 0,
    width: '100%',
    height: '135%', 
}
});