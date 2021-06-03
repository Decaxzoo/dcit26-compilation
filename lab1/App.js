//BSCS3-3
//Verceles, Robert Max U. 
//Mendoza, Val Ashley A. 
//Millonte, Brian Jay M. 
import React from 'react';
import { Text, View , StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Constants from 'expo-constants';

export default props => {
  let [fontsLoaded] = useFonts({
    'TNR': require('./assets/fonts/TimesNewRomanMTStd-BoldCond.otf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      
      <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'left' }}>
        <Text style={{ fontFamily: 'TNR', fontSize: 50, color: '#ffffff' }}>Hello</Text>
        <Text style={{ fontFamily: 'TNR', fontSize: 100, color: '#ffffff' }}>World</Text>
      </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000000',
    padding: 0,
    
  },
});

