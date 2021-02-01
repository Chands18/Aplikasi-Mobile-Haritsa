// In App.js in a new project

import React,{useEffect} from 'react';
import { View, Text ,Button} from 'react-native';

function Profile({navigation,route}) {
const {angka} = route.params
// const angka2 = navigation.getParam('angka')
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Ini Profile</Text>
      <Text>{angka}</Text>
    </View>
  );
}


export default Profile;