import React from 'react';
import { View, Text } from 'react-native';
import s from './styles.scss'

export const Navbar = ({ title }) => (
    <View style={s.navbar}>
        <Text style={s.text}>{title}</Text>
    </View>
);

