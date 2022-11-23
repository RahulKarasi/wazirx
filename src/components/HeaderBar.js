import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import TextV from './TextV';

const HeaderBar = () => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity>
        <Image
          style={styles.headerIcon}
          source={require('../utils/icons/profile.png')}
        />
      </TouchableOpacity>

      <Image
        style={styles.headerLogo}
        source={require('../utils/icons/wazirx-logo.png')}
      />
      <TouchableOpacity>
        <Image
          style={styles.headerIcon}
          source={require('../utils/icons/rupee-indian.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'rgb(35,48,63)',
    height: 57,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  headerIcon: {
    height: 20,
    width: 20,
  },
  headerLogo: {
    height: 20,
    width: 100,
  },
});

export default HeaderBar;
