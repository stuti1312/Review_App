import { TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global'

const Reviews = ({navigation}) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.mainHedaing}>Reviews</Text>
      <TouchableOpacity onPress={()=>navigation.push("review")}>
          <Text>Push Review details</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Text>GO BACK</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Reviews
