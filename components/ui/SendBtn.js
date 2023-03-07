import React from 'react';
import {Pressable, StyleSheet, Text, Platform} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {colors} from '../../constants/colors';

function SendBtn({icon, size, color, onPress, style}) {
  return (
    <Pressable
      style={({pressed}) => [styles.btn, style, pressed && styles.pressed]}
      onPress={onPress}>
      <Text>
        {/* <FontAwesome name={icon} size={size} color={color} /> */}
        <FontAwesome name={icon} style={{color: color, fontSize: size}} />
        {/* {'>'} */}
      </Text>
    </Pressable>
  );
}
export default SendBtn;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.sendBtn,
    padding: Platform.OS === 'ios' ? 14 : 12,
    borderRadius: 100,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
  // txt: {
  //   color: 'white',
  //   fontSize: Platform.OS === 'ios' ? 28 : 34,
  //   paddingHorizontal: Platform.OS === 'ios' ? 9 : 16,
  //   marginBottom: 3,
  //   fontWeight: 'bold',
  // },
});
