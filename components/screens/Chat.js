import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TextInput,
  KeyboardAvoidingView,
  FlatList,
  Platform,
  Alert,
} from 'react-native';
import React, {useState, useLayoutEffect} from 'react';

import SendButton from '../ui/SendBtn';
import ClearBtn from '../ui/ClearBtn';
import SaveBtn from '../ui/SaveBtn.js';

import ChatStripe from '../chatComp/ChatStripe';

import {colors} from '../../constants/colors';

//FIXME function to type the ansered text letter by letter to have a better user expierience - not implemented yet.
// function typeText(e, t) {
//   let index = 0;

//   let interval = setInterval(() => {
//     if (index < t.length) {
//       e.innerHTML += t.charAt(index);
//       index++;
//     } else {
//       clearInterval(interval);
//     }
//   }, 20);
// }

function generateUniqueId() {
  const timestamp = Date.now();
  const randomNumber = Math.random();
  const hexadecimalString = randomNumber.toString(16);
  return `${timestamp}-${hexadecimalString}`;
}

function Chat({navigation}) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const [input, setInput] = useState('');
  const [chat, setChat] = useState([]);

  function clear() {
    setResult('');
    setInput('');
    setChat([]);
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => {
        return (
          <>
            <ClearBtn title="Clear" onPress={clear} />
            {/* //FIXME needs a Save function and set the State with Redux */}
            <SaveBtn
              title="Save"
              //  onPress={() => {}}
            />
          </>
        );
      },
    });
  }, [navigation]);

  const showAlert = error => {
    Alert.alert(
      'Something went wrong',
      error,
      [
        {
          text: 'OK',
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  };

  async function onSend() {
    if (loading) {
      return;
    }
    const inputValid = input.trim().length > 0 && input.trim() !== '';
    if (!inputValid) {
      return;
    }

    setLoading(true);

    setChat(prev => [
      ...prev,
      {msg: input, id: generateUniqueId(), isAi: false},
    ]);

    setInput('');
    try {
      const response = await fetch(
        'https://exxpress-server-for-ai-chat-app.onrender.com',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: input,
          }),
        },
      );
      const data = await response.json();
      const parsedData = data.bot.trim();
      setResult(parsedData);
      setChat(prev => [
        ...prev,
        {msg: parsedData, id: generateUniqueId(), isAi: true},
      ]);
    } catch (err) {
      //FIXME: showAlert not properly showing. Needs Error handling.
      const errorRes = await err.message();
      console.log(err.message);
      setResult('Something went wrong. Please try later again.');
      showAlert(errorRes);
    } finally {
      setLoading(false);
    }
  }

  return (
    <KeyboardAvoidingView
      contentContainerStyle={styles.screen}
      style={styles.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled
      keyboardVerticalOffset={Platform.OS === 'ios' ? 95 : 140}>
      <View style={styles.view}>
        {!result && <Text style={styles.label}>AI Code-G</Text>}
        {loading && <ActivityIndicator />}
        {result && (
          <FlatList
            style={styles.flat}
            data={chat}
            renderItem={({item}) => (
              <ChatStripe
                key={item.id}
                style={styles.chat}
                isAi={item.isAi}
                value={item.msg}
              />
            )}
            keyExtractor={item => item.id}
          />
        )}
      </View>

      <View style={styles.inputCon}>
        <TextInput
          placeholder="Ask me something..."
          placeholderTextColor={'#878787'}
          keyboardType="web-search"
          value={input}
          style={styles.input}
          onChangeText={setInput}
          multiline
          textAlignVertical="top"
        />
        <SendButton
          style={styles.sendBtn}
          icon="send"
          size={24}
          color={'white'}
          onPress={onSend}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

export default Chat;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
  },
  sendBtn: {
    marginRight: 15,
  },
  chat: {
    marginBottom: 20,
  },
  screen: {
    flex: 1,
    backgroundColor: colors.backgroundGrey100,
  },
  label: {
    margin: 20,
    color: colors.labelGrey,
    fontSize: 16,
    marginLeft: 155,
  },
  inputCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.primaryBlue100,
    width: '100%',
    padding: Platform.OS === 'ios' ? 5 : 0,
    paddingHorizontal: Platform.OS === 'ios' ? 5 : 2,
  },
  input: {
    width: '85%',
    fontSize: 18,
    padding: 20,
    marginTop: Platform.OS === 'ios' ? 15 : 2,
    borderRadius: 4,
    color: '#fff',
    borderColor: colors.primaryBlue100,
    borderWidth: 1,
    maxHeight: 150,
  },
});
