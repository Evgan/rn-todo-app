import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {StyleSheet, View, SafeAreaView, VirtualizedList, Button} from 'react-native';
import * as firebase from 'firebase';
import { Navbar } from './src/components/Navbar/Navbar';
import {AddTodo} from './src/components/AddTodo/AddTodo';
import {Todo} from './src/components/Todo/Todo';
import SwipeableRow from './src/components/SwipeableRow/SwipeableRow';

export default function App() {
  const [listTodos, setTodo] = useState([]);
  const addTodo = (name) => {
      const newTodo = {
          key: Date.now().toString(),
          name
      };
      setTodo(prev => [...prev, newTodo])
  };

  const testStartData = () => {
      const listTodos = [];

  };

  useEffect(() => {
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
    console.log('----------------------- testStartData()');
    for (let i=0; i < 30; i++){
        addTodo(`test_${i}`)
    }
  }, []);

  const clearAll = () => {
      setTodo([])
  };

  const getItemCount = () => listTodos.length;

  const getItem = (data, index) => data[index];

  const renderTodo = ({item}) => <SwipeableRow><Todo props={item}/></SwipeableRow>;

  return (
    <View style={styles.container}>
      <Navbar title='Учим React Native!' />
      <View>
          <Button
              title='clear'
              onPress={clearAll}
              disabled={listTodos.length === 0}
          />
      </View>
      <AddTodo
          onSubmit={addTodo}
      />
      <SafeAreaView style={styles.safeAreaView}>
          <VirtualizedList
            data={listTodos}
            initialNumToRender={0}
            getItem={getItem}
            renderItem={renderTodo}
            keyExtractor={item => item.key}
            getItemCount={getItemCount}
          />
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    },
    safeAreaView: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
});
