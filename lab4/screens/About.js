// BSCS 3-3
//Verceles, Robert Max U.
//Mendoza, Val Ashley
//Millonte, Brian Jay
import React from 'react';
import { Text, View, Button, StyleSheet,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const About = ({navigation})=>{
  return (
      <View style={styles.container}>
      <Image style={styles.picture} source={require('./headerBG.jpg')} />
      
      <Text style={styles.text}>Warframe is set in a distant future where the solar system is dominated between the Grineer, an empire race of militarized clones; the Corpus, a mega-corporation merchant cult with advanced robotics and laser technology; and the Infested, the name for a disease and its victims that devours all. The players takes the role of a Tenno, an ancient warrior created by the Orokin to battle a mysterious foe but left to slumber generations ago, until woken by an entity called the Lotus for the sole purpose of reuniting the scattered, war-torn colonies throughout the system.
      </Text>
      <Ionicons.Button name="return-up-back" size={20} color="black" backgroundColor= "#e5eb3f" onPress={()=>navigation.goBack()}> Go Back
      </Ionicons.Button>
      </View>
  );
}
export default About;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#171717',
  },
  text:{
    textShadowColor: 'rgba(100, 100, 0, 100)',
    textShadowOffset: {width: 2, height: 1},
    textShadowRadius: 10,
    color: "#e5eb3f",
    textAlign:'justify',
    margin: 0,
    backgroundColor: '#171717',
    borderRadius: 5,
  },
  picture:{
    margin: 0,
    width: '100%',
    height: 300, 
  }
  
});