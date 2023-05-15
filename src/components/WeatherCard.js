import { View, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'
import TextFont from './TextFont'

const WeatherCard = ({data, isLoading}) => {
  return (
    <View style={styles.container}>
      { isLoading 
        ? <ActivityIndicator size="large" color="white" />
        : <TextFont>{JSON.stringify(data)}</TextFont>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 20,
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'white',
  },
});

export default WeatherCard