// In App.js in a new project

import React,{useEffect,useState} from 'react';
import { View, Text ,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Profile from  './profile';
import { Profile, HomePage } from "./src/pages";
function HomeScreen({navigation}) {
  const [angka,set_angka] = useState(0);
  const tambah =()=>{
    var count = angka + 1;
    set_angka(count)
  }
  useEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })
  },[navigation])
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="profile" onPress={()=>{navigation.navigate('profile',{
        angka:angka
      })}} >
        
      </Button>
      <Button title={angka.toString()} onPress={()=> tambah()} >
        
      </Button>
    </View>
  );
}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={HomeScreen}  />
        <Stack.Screen name="profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;