import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button,StyleSheet, Text, View } from 'react-native';
import MyComponent from './MyComponent';
export default function App() {
  
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button onPress={()=>{
        alert("Hellow");
      } }title="Unais"></Button>
      <Button title="Unais"></Button>
      <MyComponent/>
    </View>

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
