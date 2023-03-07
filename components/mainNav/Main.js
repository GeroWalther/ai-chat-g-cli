import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Chat from '../screens/Chat';
import AllChats from '../screens/AllChats';

const Stack = createNativeStackNavigator();

function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AllChats"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#090d30',
          },
          headerTintColor: '#e9e9e9',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{title: 'AI Chat'}}
        />
        <Stack.Screen
          name="AllChats"
          component={AllChats}
          options={{
            title: 'All Chats',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;
