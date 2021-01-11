import React from 'react';
import {View} from 'react-native';
import {FlingGestureHandler,Directions,State} from 'react-native-gesture-handler';

function BottomSheet() {
  return (
   
       <FlingGestureHandler
        direction={Directions.RIGHT}
        onHandlerStateChange={({ nativeEvent }) => {
          Alert.alert("I'm flinged!");
          if (nativeEvent.state === State.ACTIVE) {
          
          }
        }}>
        <View style={{backgroundColor:'grey',width:100,height:100}} />
      </FlingGestureHandler>
  );
}

export default BottomSheet;
