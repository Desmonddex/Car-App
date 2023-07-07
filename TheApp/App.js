import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, StackRouter } from '@react-navigation/native';

import MainScreen from "./screens/MainScreen";
//import DrawerScreen from './screens/Fold/DrawerScreen';
import SecondScreen from './screens/Fold/SecondScreen';
import Germany from './screens//Germany';
import France from './screens/France';
import Italy from './screens/Italy';
import Mercedes from './screens/Mercedes';
import VW from './screens/VW';
import Porsche from './screens/Porsche';
import Peugeot from './screens/Peugeot';
import Renault from './screens/Renault';
import Citroen from './screens/Citroen';
import Fiat from './screens/Fiat';
import Alfa from './screens/Alfa';
import Ferrari from './screens/Ferrari';
import Template from './components/Template';
import Golf from './components/Specs/Golf';
//import { useRef, useState } from 'react';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>

      <NavigationContainer>
        <Stack.Navigator>
        {/* <Stack.Screen name='Test' component={DrawerScreen}/> */}
        <Stack.Screen name='Main Screen' component={MainScreen} options={{
          title: "Hello"
        }} />
    
        <Stack.Screen name="2" component={SecondScreen} options={{
          title: "Car Menu"
        }}/>
        <Stack.Screen name="Germany" component={Germany} options={{
          title: "German Car Brands"
        }}/>
        <Stack.Screen name='France' component={France} options={{
          title: "French Car Brands"
        }}/>
        <Stack.Screen name='Italy' component={Italy} options={{
          title: "Italian Car Brands"
        }}/>
        <Stack.Screen name='Mercedes' component={Mercedes} options={{
          title: "Mercedes"
        }}/>
        <Stack.Screen name='Porsche' component={Porsche} options={{
          title: "Porsche"
        }}/>
        <Stack.Screen name="VW" component={VW}/>
        <Stack.Screen name='Peugeot' component={Peugeot}/>
        <Stack.Screen name='Renault' component={Renault}/>
        <Stack.Screen name='Citroen' component={Citroen}/>
        <Stack.Screen name='Fiat' component={Fiat}/>
        <Stack.Screen name='Alfa' component={Alfa}/>
        <Stack.Screen name='Ferrari' component={Ferrari}/>
        <Stack.Screen name="Specs" component={Template}/>
        <Stack.Screen name="Golf" component={Golf}/>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
      </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
