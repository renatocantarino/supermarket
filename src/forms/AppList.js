import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AppList() {
  return (
    <View style={styles.container}>
      <Text>List!</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5946B2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
