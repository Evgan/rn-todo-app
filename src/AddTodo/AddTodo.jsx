import React from 'react';
import { View, TextInput, Button } from 'react-native';
import s from './styles.scss'

export const AddTodo = ({ onSubmit }) => {
    const pressHandler = () => {
        onSubmit('AAAAAAA')
    }
    return (
        <View style={s.container}>
            <TextInput
                style={s.name}
            />
            <View style={s.containerButton}>
                <Button
                    title='+Добавить'
                    onPress={pressHandler}
                />
            </View>
        </View>
    );
}