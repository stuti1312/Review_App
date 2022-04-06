import {TouchableOpacity, Text, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import {globalStyles} from '../styles/global';

const Home = ({navigation}) => {
  const [reviews, setReviews] = useState([
    {title: 'IJKLMNOP', rating: 5, body: 'lorem ipsum', key: '1'},
    {title: 'ABCDEFGH', rating: 3, body: 'ipsum', key: '2'},
    {title: 'QRSTUVWX', rating: 4, body: 'lorem', key: '3'},
    {title: 'YZABCDEF', rating: 2, body: 'ipsum lorem', key: '4'},
  ]);
  return (
    <View style={globalStyles.container}>
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
