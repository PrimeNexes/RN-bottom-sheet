import React from 'react';
import {View, StyleSheet, useWindowDimensions} from 'react-native';
import {
  FlingGestureHandler,
  Directions,
  State,
  ScrollView,
} from 'react-native-gesture-handler';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

function BottomSheet(props) {
  const offset = useSharedValue(0);
  const windowHeight = useWindowDimensions().height;
  const defaultHeight = props.defaultHeight || 20;
  const height = props.height || windowHeight / 2;
  const animatedStyles = useAnimatedStyle(() => {
    return {
      height: withSpring(offset.value + defaultHeight),
    };
  });

  return (
    <View style={styles.container}>
      <FlingGestureHandler
        direction={Directions.UP}
        onHandlerStateChange={({nativeEvent}) => {
          if (nativeEvent.state === State.ACTIVE && offset.value !== height) {
            offset.value = offset.value + height;
          }
        }}>
        <FlingGestureHandler
          direction={Directions.DOWN}
          onHandlerStateChange={({nativeEvent}) => {
            if (nativeEvent.state === State.ACTIVE && offset.value === height) {
              offset.value = offset.value - height;
            }
          }}>
          <Animated.View style={[styles.modalBox, animatedStyles, props.style]}>
            {props.header}
            <ScrollView style={styles.content}>{props.children}</ScrollView>
          </Animated.View>
        </FlingGestureHandler>
      </FlingGestureHandler>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalBox: {
    width: '100%',
  },
  content: {
    top: 25,
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
});

export default BottomSheet;
