import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './src/screens/Home'
import { globalStyles } from './src/styles/global'

const App = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.mainHeading}>App</Text>
      <Home/>
    </View>
  )
}

export default App