import {TouchableOpacity, Text, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import {globalStyles} from '../styles/global';

const Home = ({navigation}) => {
  const [reviews, setReviews] = useState([
    {title: 'abcd', rating: 5, body: 'lorem ipsum', key: '1'},
    {title: 'ABCD', rating: 3, body: 'ipsum', key: '2'},
    {title: 'xyz', rating: 4, body: 'lorem', key: '3'},
    {title: 'XYZ', rating: 2, body: 'ipsum lorem', key: '4'},
  ]);
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.mainHeading}>Home</Text>
      <FlatList
        data={reviews}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('review', {item})}>
            <Text style={globalStyles.mainHedaing}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
