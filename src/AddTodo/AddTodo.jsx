import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import s from './styles.scss'

export const AddTodo = ({ onSubmit }) => {

    const [valueName, setValueName] = useState(null);
    const pressHandler = () => {
        console.log('----------------------- pressHandler()');
        onSubmit(valueName);
        setValueName(null);
    };
    return (
        <View style={s.container}>
            <TextInput
                style={s.name}
                onChangeText={text => setValueName(text)}
                value={valueName}
                placeholder='Введите текст...'
            />
            <View style={s.containerButton}>
                <Button
                    title='+Добавить'
                    onPress={pressHandler}
                    disabled={!valueName}
                />
            </View>
        </View>
    );
}
