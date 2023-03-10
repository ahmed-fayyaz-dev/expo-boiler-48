import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Login from './src/screens/Login';

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: "center",
    justifyContent: 'center',
  },
});
