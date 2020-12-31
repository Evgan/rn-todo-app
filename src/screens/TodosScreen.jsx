import React from 'react';
import { View, Text } from 'react-native';

import { Todos } from '../components/Todos/index'

const TodosScreen = () =>  (
    <View>
        <Text>Сцена TODO</Text>
        <Todos />
    </View>
);

export default TodosScreen;
