import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreateAccount from '../screens/CreateAccount';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();

function Auth() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
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
          name="CreateAccount"
          component={CreateAccount}
          options={{title: 'Create a new Account'}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Auth;
