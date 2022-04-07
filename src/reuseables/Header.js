import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Header = ({navigation, title}) => {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Text style={styles.headerTitle} onPress={openMenu}>
          H
        </Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
      <Text style={styles.headerTitle}>HH</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    // margin:0,
    // padding:0,
    // flexGrow:1,
    width: '97%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'red',
  },
  headerTitle: {
    color: 'black',
    letterSpacing: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
