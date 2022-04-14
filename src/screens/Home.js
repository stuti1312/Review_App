import {
  TouchableOpacity,
  Text,
  View,
  FlatList,
  Modal,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';

import {globalStyles} from '../styles/global';
import Cards from '../reuseables/Cards';
import ReviewForm from './ReviewForm';

const Home = ({navigation}) => {
  const [reviews, setReviews] = useState([
    {title: 'IJKLMNOP', rating: 5, body: 'lorem ipsum', key: '1'},
    {title: 'ABCDEFGH', rating: 3, body: 'ipsum', key: '2'},
    {title: 'QRSTUVWX', rating: 4, body: 'lorem', key: '3'},
    {title: 'YZABCDEF', rating: 2, body: 'ipsum lorem', key: '4'},
  ]);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modal}>
            <TouchableOpacity
              onPress={() => setModalOpen(false)}
              style={styles.modalContent}>
              <Image
                source={require('../assets/cancle.png')}
                style={{
                  width: 24,
                  height: 25,
                  alignSelf: 'center',
                  marginBottom: 30,
                }}
              />
            </TouchableOpacity>
            <ReviewForm />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <View>
        <TouchableOpacity
          onPress={() => setModalOpen(true)}
          style={styles.modalToggle}>
          <Image
            source={require('../assets/add.png')}
            style={{width: 18, height: 20}}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={reviews}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('review', {item})}>
            <Cards>
              <Text style={globalStyles.mainHedaing}>{item.title}</Text>
            </Cards>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    padding: 10,
  },
  modalToggle: {
    padding: 10,
    alignSelf: 'center',
  },
  modalContent: {
    padding: 10,
    alignSelf: 'center',
  },
});
