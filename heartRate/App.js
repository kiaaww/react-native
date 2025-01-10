import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [limits, setLimits] = useState('');

  const calculateRates = () => {
    const lowerRate = (220-age)*0.65;
    const upperRate = (220-age)*0.85;
    setLimits(`${lowerRate}-${upperRate}`);
  }

  return (
    <View style={styles.container}>
      <Text>Age</Text>
      <TextInput 
      value={age}
      onChangeText={text => setAge(text)}
      keyboardType='numeric'
      />
      <Text>Limits</Text>
      <Text>{limits}</Text>
      <Button title='calculate' onPress={calculateRates}></Button>
      <StatusBar style="auto" />
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
