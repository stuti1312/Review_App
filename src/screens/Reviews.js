import {Image, Text, View, StyleSheet} from 'react-native';
import React from 'react';
import {globalStyles} from '../styles/global';
import Cards from '../reuseables/Cards';

const Reviews = ({navigation, route}) => {
  const {item} = route.params;
  // const rating = item.rating;
  return (
    <View style={globalStyles.container}>
      <Cards>
        <Text style={globalStyles.mainHedaing}>{item.title}</Text>
        <Text style={globalStyles.mainHedaing}>{item.body}</Text>
        <View style={styles.ratingContainer}>
          <Text style={globalStyles.mainHedaing}>GameZone Rating:</Text>
          <View style={styles.rating}>
            <Image
              source={require('../assets/rate.png')}
              style={{width: 18, height: 14}}
            />
            <Text style={globalStyles.mainHedaing}>{item.rating}</Text>
            {/* <Image source={globalImages.ratingStyle[rating]} /> */}
          </View>
        </View>
      </Cards>
      {/* <TouchableOpacity onPress={()=>navigation.push("review")}>
          <Text>Push Review details</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Text>GO BACK</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Reviews;

const styles = StyleSheet.create({
  ratingContainer: {
    paddingTop: 10,
    marginTop: 25,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    alignItems:"center"
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
