/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Button,
  Alert,
  StyleSheet,
} from 'react-native';
import BottomSheet from './src/BottomSheet';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.content}>
          <Button
            title={'PRESS ME'}
            onPress={() => {
              Alert.alert('Doing Main');
            }}
          />
        </View>
        <BottomSheet
          style={styles.bottomSheet}
          header={<View style={styles.bottomSheetHeader} />}>
          <View style={styles.bottomSheetContent}>
            <Button
              title={'PRESS ME'}
              onPress={() => {
                Alert.alert('Doing Sheet');
              }}
            />
          </View>
        </BottomSheet>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  content: {height: '100%', width: '100%', backgroundColor: 'black'},
  bottomSheet: {
    backgroundColor: 'white',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  bottomSheetHeader: {
    marginTop: 10,
    marginBottom: 14,
    height: 4,
    borderRadius: 4,
    backgroundColor: '#CBCDCC88',
    alignSelf: 'center',
    width: 36,
  },
  bottomSheetContent: {flexDirection: 'column', backgroundColor: 'grey'},
});
export default App;
