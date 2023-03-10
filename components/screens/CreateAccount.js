import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  // Dimensions,
} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';

// const windowDimensions = Dimensions.get("window");
// const screenDimensions = Dimensions.get("screen");

// FIXME validation and payment subscription must be added
const CreateAccount = () => {
  return (
    <View style={styles.container}>
      <View style={styles.txtCon}>
        <Text style={styles.labTxt}>Email:</Text>
        <TextInput style={styles.TextInput} />
        <Text style={styles.labTxt}>Password:</Text>
        <TextInput style={styles.TextInput} />
      </View>
      <TouchableOpacity
        style={styles.btn}
        //FIXME add payments subscrption here and set state accordingly to render All Chats afterwords
        // onPress={() => {}}
      >
        <Text style={styles.txtBtn}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundGrey100,
    alignItems: 'center',
  },
  TextInput: {
    padding: 15,
    color: 'white',
    fontSize: 16,
    backgroundColor: colors.chatContrast100,
    borderRadius: 5,
    marginBottom: 15,
    width: 300,
  },
  txtCon: {
    marginTop: 100,
  },
  labTxt: {
    color: 'white',
    marginVertical: 10,
  },
  txtBtn: {
    color: 'white',
    textAlign: 'center',
    fontSize: 22,
  },
  btn: {
    backgroundColor: colors.btnGreen100,
    padding: 12,
    borderRadius: 20,
    width: 260,
    marginTop: 50,
    textAlign: 'center',
  },
});
