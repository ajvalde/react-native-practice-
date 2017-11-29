import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: 'pink', fontWeight: 'bold'}}>Hello Worlds!</Text>
        <Text style={{color: 'red'}}>Welcome.</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102A56',
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },
});
