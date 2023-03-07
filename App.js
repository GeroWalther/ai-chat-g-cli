import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, StatusBar} from 'react-native';

import {colors} from './constants/colors';

import {Provider} from 'react-redux';
import {store} from './store/store';

import Main from './components/mainNav/Main';
import Auth from './components/mainNav/Auth';

import RNBootSplash from 'react-native-bootsplash';

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({
        fade: true,
        duration: 500,
      });
    }, 2000);
  }, []);

  const [loggedin] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Provider store={store}>{loggedin ? <Auth /> : <Main />}</Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBlue100,
  },
});
