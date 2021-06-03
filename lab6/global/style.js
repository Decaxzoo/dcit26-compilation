// BSCS 3-3
//Verceles, Robert Max U.
//Mendoza, Val Ashley
//Millonte, Brian Jay
import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
      container:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black'
    },
homeImage : {
    alignItems: 'center',
    margin: 50,  
    height: 200, 
    width: 200,
    borderRadius: 150/2  
    },
homeText : {
    textShadowColor: 'rgba(100, 100, 0, 100)',
    textShadowOffset: {width: 2, height: 1},
    textShadowRadius: 10,
    paddingVertical: 20,
    textAlign: "center",
    fontSize: 30,
    color: "#e5eb3f",
    fontWeight: "bold"
},
profileContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',

},
profileText : {
  padding: 10,
  textAlign: 'center',
  fontSize: 15,
  backgroundColor: 'Transparent',
},
profileTextsub : {
  textAlign: 'center',
  fontSize: 15,
  backgroundColor: 'black',
  color: '#e5eb3f'  
  

},
profileImage : {
    alignItems: 'center',
    margin: 50,  
    height: 200, 
    width: 200,
    borderRadius: 150/2  
},
headerFont : {
  textShadowColor: 'rgba(100, 100, 0, 100)',
  textShadowOffset: {width: 2, height: 1},
  textShadowRadius: 10,
  paddingVertical: 20,
  fontSize: 25,
  textAlign: 'center',
  backgroundColor: 'black',
  fontWeight:'bold',
  borderBottomWidth: 1,
  borderTopWidth: 1,
  color: '#e5eb3f'  
},
  positionb: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 140,
    flex: 1,
  },
  styleb: {
    backgroundColor: '#242424',
    borderRadius: 20,
    alignItems: 'center',
    padding: 3,

  },
  textb: {
    fontFamily: 'arial',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#e5eb3f',
    paddingHorizontal: 10,
  }
})