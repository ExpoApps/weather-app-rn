import { Text, StyleSheet } from 'react-native'
import React from 'react'

const TextFont = ({children, style, ...rest }) => {
  return <Text style={[styles.text, style]} {...rest}>{children}</Text>
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 18,
  },
});

export default TextFont