import React from 'react';
import {Text} from 'react-native';

import s from './styles.scss'

const ButtonLink = ({ onPress, title }) => (
    <Text
        style={s.button}
        onPress={onPress}
    >
        {title}
    </Text>
);

export default ButtonLink;
