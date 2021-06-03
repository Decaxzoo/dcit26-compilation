// BSCS 3-3
//Verceles, Robert Max U.
//Mendoza, Val Ashley
//Millonte, Brian Jay
import React, {
  useState, 
  useEffect

  } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  Style,
  ActivityIndicator
} from 'react-native';

import { globalStyles} from '../global/style';


const Home = ({navigation}) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState([true]);

  function fetchRandomData(){
    setLoading(true);
    fetch('https://randomuser.me/api')
    .then((response) => response.json())
    .then((json) => {
      setData(json.results[0])
      console.log(json.results[0])
    })
    .catch((error) => console.log(error))
    .finally(() => setLoading(false)); 
  }
useEffect(() => {
  fetchRandomData(); 
}, []);

  return (
    <View style= {globalStyles.container}>
    <View>
      {isLoading ? <ActivityIndicator size="large" color="black" /> : (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Profile', data)}>
    <Image style = {globalStyles.homeImage} source ={{uri : data.picture.large}} /> 
    </TouchableOpacity>
      <Text style={globalStyles.homeText}>{data.name.first} {data.name.last}</Text>
    </View>
  )}
    <View style={{ height: 80,  alignItems: 'center'}}>
      {isLoading ? true : (
    <View>
      <View style={globalStyles.positionb}>
        <TouchableOpacity 
          style={globalStyles.styleb}
          onPress={fetchRandomData}   > 
          <Text style={globalStyles.textb}>RANDOM USER</Text> 
        </TouchableOpacity>  
      </View>  
</View>
)} 
</View>
</View>
</View>
  );
};

export default Home;
