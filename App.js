import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navbar } from './src/Navbar/Navbar';
import {AddTodo} from './src/AddTodo/AddTodo';

export default function App() {
  const [listTodos, setTodo] = useState([]);
  const addTodo = (name) => {
      const newTodo = {
          id: Date.now().toString(),
          name
      };
      setTodo(prev => [...prev, newTodo])
  };

  return (
    <View style={styles.container}>
      <Navbar title='Учим React Native!' />
      <AddTodo
          onSubmit={addTodo}
      />
      <View>
          {listTodos.map(item => <Text>{item.name}</Text>)}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
