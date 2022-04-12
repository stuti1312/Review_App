import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Cards = props => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity:0.3,
    margin: 5,
    shadowRadius:2,
  },
  cardContent: {    padding: 10,
  },
});
