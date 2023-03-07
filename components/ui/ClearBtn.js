import {StyleSheet, Text, Pressable, Platform} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';

export default function ClearBtn({title, onPress, style}) {
  return (
    <Pressable style={styles.press} onPress={onPress}>
      <Text style={styles.ClearBtn}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  ClearBtn: {
    color: colors.clearRed,
    fontWeight: 'bold',
  },
  press: {
    marginRight: 70,
    marginLeft: Platform.OS === 'ios' ? 95 : 60,
  },
});
