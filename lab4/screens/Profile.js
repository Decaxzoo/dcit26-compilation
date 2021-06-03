// BSCS 3-3
//Verceles, Robert Max U.
//Mendoza, Val Ashley
//Millonte, Brian Jay
import React from 'react';
import { Text, View, Button, StyleSheet,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Profile = ({navigation})=>{
  return (
      <View style={styles.container}>
      <Image style={styles.picture} source={require('./Mesa_Background_wiki.gif')} />
      <Text style = {styles.title}>Mesa</Text>
      <Text style={styles.text}>"This is Mesa, the vagabond, the outcast.
Do you feel lucky, Tenno? Mesa's got the fastest guns in the stars."</Text>
        <Ionicons.Button name="return-down-back" size={24} color="black" backgroundColor= "#e5eb3f" onPress={()=>navigation.goBack()}> Go Back Home
        </Ionicons.Button>
      </View>
  );
}
export default Profile;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black'
  },
  picture:{
    borderRadius: 0,
    margin: 0,
    width: '100%',
    height: 200, 
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
  text:{
    textShadowColor: 'rgba(100, 100, 0, 100)',
    textShadowOffset: {width: 2, height: 1},
    textShadowRadius: 10,
    color: "#e5eb3f",
    textAlign:'justify',
    margin: 5,
    backgroundColor: 'black',
    borderRadius: 5,
  }
});