// BSCS 3-3
// ESTACIO, DAN RENZO
// GAJETE,KERTZ HENRICH R.
// LOZANO,AL LORENZE
//
import React from 'react';
import {Button,Modal,Text,StyleSheet,ScrollView,Image,View} from 'react-native';

const Samplemodal = props => {
  return (
  <View style={styles.container}>
    <Modal visible={props.visible}>
    <ScrollView>
      <Image style={styles.picture} source={{uri:'https://images.8tracks.com/cover/i/009/993/234/otLb7Vf-2637.png?rect=0,0,2100,2100&q=98&fm=jpg&fit=max'}} />
      <Text style={styles.text}>
Look at them, they come to this place when they know they are not pure. Tenno use the keys, but they are mere trespassers. Only I, Vor, know the true power of the Void. I was cut in half, destroyed, but through its Janus Key, the Void called to me. It brought me here and here I was reborn. We cannot blame these creatures, they are being led by a false prophet, an impostor who knows not the secrets of the Void. Behold the Tenno, come to scavenge and desecrate this sacred realm. My brothers, did I not tell of this day? Did I not prophesize this moment? Now, I will stop them. Now I am changed, reborn through the energy of the Janus Key. Forever bound to the Void. Let it be known, if the Tenno want true salvation, they will lay down their arms, and wait for the baptism of my Janus key. It is time. I will teach these trespassers the redemptive power of my Janus key. They will learn its simple truth. The Tenno are lost, and they will resist. But I, Vor, will cleanse this place of their impurity. Look at them, they come to this place when they know they are not pure. Tenno use the keys, but they are mere trespassers. Only I, Vor, know the true power of the Void. I was cut in half, destroyed, but through its Janus Key, the Void called to me. It brought me here and here I was reborn. We cannot blame these creatures, they are being led by a false prophet, an impostor who knows not the secrets of the Void. Behold the Tenno, come to scavenge and desecrate this sacred realm. My brothers, did I not tell of this day? Did I not prophesize this moment? Now, I will stop them. Now I am changed, reborn through the energy of the Janus Key. Forever bound to the Void. Let it be known, if the Tenno want true salvation, they will lay down their arms, and wait for the baptism of my Janus key. It is time. I will teach these trespassers the redemptive power of my Janus key. They will learn its simple truth. The Tenno are lost, and they will resist. But I, Vor, will cleanse this place of their impurity. Look at them, they come to this place when they know they are not pure. Tenno use the keys, but they are mere trespassers. Only I, Vor, know the true power of the Void. I was cut in half, destroyed, but through its Janus Key, the Void called to me. It brought me here and here I was reborn. We cannot blame these creatures, they are being led by a false prophet, an impostor who knows not the secrets of the Void. Behold the Tenno, come to scavenge and desecrate this sacred realm. My brothers, did I not tell of this day? Did I not prophesize this moment? Now, I will stop them. Now I am changed, reborn through the energy of the Janus Key. Forever bound to the Void. Let it be known, if the Tenno want true salvation, they will lay down their arms, and wait for the baptism of my Janus key. It is time. I will teach these trespassers the redemptive power of my Janus key. They will learn its simple truth. The Tenno are lost, and they will resist. But I, Vor, will cleanse this place of their impurity.
      </Text>
      </ScrollView>
          <Button title="CLOSE" onPress={props.onClose} />
    </Modal>
  </View>
  );
};
const styles=StyleSheet.create({
  text:{
    textAlign:'justify',
    margin: 5,
    backgroundColor: 'black',
    borderRadius: 10,
    color: 'red'
  },
  picture:{
    borderRadius: 1,
    margin: 1,
    width: 350,
    height: 200,
  }
});
export default Samplemodal;