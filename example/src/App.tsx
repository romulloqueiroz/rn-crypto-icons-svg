import React from 'react';
import { StyleSheet, View } from 'react-native';
import Crypto from 'rn-crypto-icons-svg';

export default function App() {
  return (
    <View style={styles.container}>
      <Crypto name="eth" size={200} shape="octagonal" tilt />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
