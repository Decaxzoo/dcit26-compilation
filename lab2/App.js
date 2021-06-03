// BSCS3-3
// Verceles, Robert MAx
// Mendoza, Val Asley
// Millonte, Brian Jay
import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, TextInput,FlatList} from 'react-native';
import { useFonts } from 'expo-font';
import Constants from 'expo-constants';

export default function App() {
  
  const [currentGoal1,setGoal1]= useState('');
  const [currentGoal2,setGoal2]= useState([]);
  const hatdog=(stuff) => {
    setGoal1(stuff);
  };
  const addGoalH=()=>{
  setGoal2(listed => [...listed,{ key: Math.random().toString(),      value: currentGoal1 }]);
    setGoal1('');
  };
  
  return (
    <View style = {styles.container}>
        <View style = {styles.input}>
      <TextInput style={styles.textBox} onChangeText={hatdog} value={currentGoal1}/>
        <Button title = "ADD" onPress={addGoalH} />
      </View>
      
        <FlatList
      data={currentGoal2}
      renderItem={itemData =>(
          <View style={styles.list} >
            <Text style={{color: '#ffffff'}}>{itemData.item.value}</Text>
      </View>
    )}
        />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:25,
    backgroundColor: 'black'
    
  },
  input: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
    textBox: {
    color: 'white',
    width: 250, 
    padding: 7,
    borderColor:'white',
    borderRadius: 1,
    borderWidth: 1
  },
  list: {
    width: "99%",
    padding: 1,
    margin: 1,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 1,
    color: 'white',
    backgroundColor: 'black'
    
  }
});