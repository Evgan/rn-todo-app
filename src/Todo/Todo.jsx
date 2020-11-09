import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import s from './styles.scss'

export const Todo = ({ props }) => {
    const [showDelete, switchShowDelete] = useState(true);
    const swipeLeftHandler = () => {
        console.log('----------------------- handlerSwipeLeft()');
    };
    const deleteHandler = () => {
        console.log('----------------------- deleteHandler()');
    };
    return (
        <GestureRecognizer
            onSwipeLeft={swipeLeftHandler}
        >
            <View style={s.todo}>
                <Text style={s.name}>
                    {props.name}
                </Text>
                {showDelete && (
                    <View style={s.todo}>
                        <Button
                            title='Delete'
                            onPress={deleteHandler}
                            color='#ff0000'
                        />
                    </View>
                )}
            </View>
        </GestureRecognizer>
    );
}
