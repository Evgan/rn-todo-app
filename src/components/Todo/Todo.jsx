import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import s from './styles.scss'

export const Todo = ({ props }) => {
    const [showDelete, switchShowDelete] = useState(false);
    const swipeLeftHandler = () => {
        console.log('----------------------- handlerSwipeLeft()');
    };
    const deleteHandler = () => {
        console.log('----------------------- deleteHandler()');
    };
    return (
        <View style={s.todo}>
            <View style={s.front}>
                <Text style={s.name}>
                    {props.name}
                </Text>
            </View>
            <View style={s.back}>
                {showDelete && (
                    <View style={s.deleteDodo}>
                        <Button
                            title='Delete'
                            onPress={deleteHandler}
                            color='#ff0000'
                        />
                    </View>
                )}
            </View>
        </View>
    );
}
