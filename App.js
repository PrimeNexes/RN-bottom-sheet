/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, View, StatusBar} from 'react-native';
import BottomSheet from './src/BottomSheet';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <>
    
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      <View style={{flex: 1, margin: 50}}>
        <BottomSheet />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
