import React from 'react';
import {TextInput} from 'react-native';

import s from './styles.scss';

const Imput = ({ placeholder, onChangeText, value }) => (
    <TextInput
        style={s.input}
        placeholder={placeholder}
        placeholderTextColor='#aaaaaa'
        onChangeText={onChangeText}
        value={value}
        underlineColorAndroid='transparent'
        autoCapitalize='none'
    />
);

export default Imput;
