import *as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import store from './redux/store';
import { Provider } from 'react-redux';

import TodoApp from './screens/TodoApp';  
import DetailTask from './screens/DetailTask';

// or any pure javascript modules available in npma
import { Card } from 'react-native-paper';

const Stack = createNativeStackNavigator();

function MyStack(){
return(
<Stack.Navigator>
<Stack.Screen name="Home" component={TodoApp} options= {{title: 'Aplicativo TodoList'}}/>
<Stack.Screen name=" DetailTask" component={DetailTask}  options= {{title: 'Aplicativo TodoList'}} />
</Stack.Navigator>
); 
}

export default function App() {
  return (
  <Provider store={store}>
   <NavigationContainer>
   <MyStack />
   </NavigationContainer>
   </Provider>
  );
}

