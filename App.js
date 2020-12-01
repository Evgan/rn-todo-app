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
        console.log('========================== App did mount');
        //----------------------- firebase auth
        const firebaseConfig = {
              apiKey: "AIzaSyC96u8mIxit6raoqaxRLquVCEyy5pQaOmE",
              authDomain: "ksucoral.firebaseapp.com",
              databaseURL: "https://ksucoral.firebaseio.com",
              projectId: "ksucoral",
              storageBucket: "ksucoral.appspot.com",
              messagingSenderId: "609798977796",
              appId: "1:609798977796:web:ecac764eaefe9a33023851",
              measurementId: "G-N76L0945VZ"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
        console.log('----------------------- firebase:');
        console.log(firebase);
        const database = firebase.database();
        console.log('----------------------- database:');
        console.log(database);
        const toolsRef = database.ref('tools/');
        console.log('----------------------- toolsRef:');
        console.log(toolsRef);
        toolsRef.on('value', (snapshot) => {
            console.log('----------------------- snapshot:');
            console.log(snapshot);
            console.log('----------------------- snapshot.val():');
            console.log(snapshot.val());
        })
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
