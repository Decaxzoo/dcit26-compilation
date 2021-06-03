// BSCS 3-3
//Verceles, Robert Max U.
//Mendoza, Val Ashley
//Millonte, Brian Jay
import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  Text,  
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

import { globalStyles} from '../global/style';

const Profile = ({ route }) => {
  const data = route.params;
  return (  
    <ScrollView style= {globalStyles.profileContainer}>
    <Image style={globalStyles.profileImage} source={{ uri: data.picture.large }} 
    />
    <Text style={globalStyles.headerFont}>{data.name.title} {data.name.first} {data.name.last}
    </Text>
      <Text style={globalStyles.headerFont}><FontAwesome5 name="user-circle" size={18} color="#e5eb3f" />
       ABOUT {data.name.first}</Text>
      <Text style={globalStyles.profileTextsub}>
      <Text style={globalStyles.profileText}>Age: {data.dob.age}</Text>
      <Text>{'\n'}</Text>
      <Text style={globalStyles.profileText}>Birthday: {data.dob.date}</Text>
      <Text>{'\n'}</Text>
      <Text style={globalStyles.profileText}> Gender: {data.gender}</Text>
      </Text>
      <Text style={globalStyles.headerFont}><MaterialCommunityIcons name="contacts" size={18} color="#e5eb3f" />
      CONTACT </Text>
      <Text style={globalStyles.profileTextsub}>
      Address: {data.location.street.number}{data.location.street.name}{' '}
        {data.location.city} {data.location.state} {data.location.country}
      <Text>{'\n'}</Text>
      <Text style={globalStyles.profileText}>Email: {data.email}</Text>
      <Text>{'\n'}</Text>
      <Text style={globalStyles.profileText}>Phone: {data.phone}</Text>
      <Text>{'\n'}</Text>
      </Text>
      <Text style={globalStyles.headerFont}><AntDesign name="infocirlce" size={18} color="#e5eb3f" />  OTHER </Text>
      <Text style={globalStyles.profileTextsub}>
      <Text style={globalStyles.profileText}>Date Registed: {data.registered.date}</Text>
      </Text>
    </ScrollView>
  );
}

export default Profile;
