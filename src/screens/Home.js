import { TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global'

const Home = ({navigation}) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.mainHeading}>Home</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("review")}>
          <Text>Switch to Review details</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home