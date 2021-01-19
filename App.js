/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, View, StatusBar, Button, Alert} from 'react-native';
import BottomSheet from './src/BottomSheet';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      <View style={{height:'100%',width:'100%',backgroundColor:'black'}}>
          <Button title={"PRESS ME"} onPress={()=>{Alert.alert("Doing Main")}}></Button>
        </View>
        <BottomSheet style={{backgroundColor:'white', borderTopLeftRadius:6,borderTopRightRadius:6}} 
        header={ <View style={{
          marginTop:10,
          marginBottom:14,
          height: 4,
          borderRadius: 4,
          backgroundColor: '#CBCDCC88',
          alignSelf:'center',
          width: 36,
        }}/>}>
        <View style={{flexDirection:'column',backgroundColor:'grey'}}>
          <Button title={"PRESS ME"} onPress={()=>{Alert.alert("Doing Sheet")}} />
        </View>
        </BottomSheet>
      </SafeAreaView>
    </>
  );
};

export default App;
