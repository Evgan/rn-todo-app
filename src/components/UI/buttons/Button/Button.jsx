import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import s from './styles.scss'

const Button = ({ onPress, title }) => (
    <TouchableOpacity
        style={s.button}
        onPress={onPress}
    >
        <Text style={s.buttonTitle}>
            {title}
        </Text>
    </TouchableOpacity>
);

export default Button;
