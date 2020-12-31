import React, { useState } from 'react';
import {
    View,
    Image,
    Text
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import s from './style.scss'
import {
    Button,
    ButtonLink,
    Input
} from '../../UI'


const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = () => {
        console.log('----------------------- loginHandler');
    };

    const signupHandler = () => {
        const { navigation } = props;
        navigation?.navigate('Registrations')
    };

    return (
        <View style={s.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%'}}
                keyboardShouldPersistTaps='always'
            >
                <Image
                    style={s.logo}
                    source={require('../../../../static/images/iconUser.jpg')}
                />
                <Input
                    placeholder='E-mail'
                    onChangeText={setEmail}
                    value={email}
                />
                <Input
                    placeholder='password'
                    onChangeText={setPassword}
                    value={password}
                />
                <Button
                    onPress={loginHandler}
                    title='Войти'
                />
                <View style={s.footerView}>
                    <Text style={s.footerText}>
                        {`Don't have an account? `}
                        <ButtonLink
                            title='Sign up'
                            onPress={signupHandler}
                        />
                    </Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
};

export default Login;
