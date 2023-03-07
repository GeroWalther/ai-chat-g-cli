import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {colors} from '../../constants/colors';

export default function AllChats() {
  const navigation = useNavigation();
  return (
    <View style={styles.con}>
      <Text style={styles.txtBtn}>AllChats</Text>
      {/* //FIXME Render a FlatList with with saved chats where the user can return to his saved chats */}
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Chat')}>
        <Text style={styles.txtBtn}>Open a new Chat</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  con: {
    backgroundColor: colors.backgroundGrey100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: colors.btnGreen100,
    padding: 12,
    borderRadius: 10,
    width: 200,
    marginTop: 50,
    textAlign: 'center',
  },
  txtBtn: {color: 'white', textAlign: 'center', fontSize: 18},
});
