import React,{windowWidth} from 'react';
import { Animated,Dimensions  } from 'react-native';

import {
  PanGestureHandler,
  ScrollView,
  State,
} from 'react-native-gesture-handler';

function BottomSheet() {
  const circleRadius = 30;
  let touchX = new Animated.Value( Dimensions.get('window').width / 2 - circleRadius);
  let onPanGestureEvent = Animated.event([{ nativeEvent: { x: touchX } }], {
    useNativeDriver: true,
  });
    return (
      <PanGestureHandler onGestureEvent={onPanGestureEvent}>
        <Animated.View
          style={{
            height: 150,
            justifyContent: 'center',
          }}>
          <Animated.View
            style={[
              {
                backgroundColor: '#42a5f5',
                borderRadius: circleRadius,
                height: circleRadius * 2,
                width: circleRadius * 2,
              },
              {
                transform: [
                  {
                    translateX: Animated.add(
                      touchX,
                      new Animated.Value(-circleRadius)
                    ),
                  },
                ],
              },
            ]}
          />
        </Animated.View>
      </PanGestureHandler>
    );
}

export default BottomSheet;
