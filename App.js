import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {StyleSheet, View, SafeAreaView, VirtualizedList, Button} from 'react-native';
import { Navbar } from './src/Navbar/Navbar';
import {AddTodo} from './src/AddTodo/AddTodo';
import {Todo} from './src/Todo/Todo';

export default function App() {
  const [listTodos, setTodo] = useState([]);
  const addTodo = (name) => {
      const newTodo = {
          key: Date.now().toString(),
          name
      };
      setTodo(prev => [...prev, newTodo])
  };

  const clearAll = () => {
      setTodo([])
  };

  const getItemCount = () => listTodos.length;

  const getItem = (data, index) => data[index];

  const renderTodo = ({item}) => <Todo props={item}/>;

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
