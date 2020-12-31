import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import s from './styles.scss';
import {Button, ButtonLink, Input} from '../../UI'

const Registrations = (props) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const registrationHandler = () => {
        console.log('----------------------- registrationHandler > e:');
    };
    const loginHandler = () => {
        const { navigation } = props;
        navigation?.navigate('Login')
    };
    return (
        <View style={s.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps='always'
            >
                <Image
                    style={s.logo}
                    source={require('../../../../static/images/iconUser.jpg')}
                />

                <Input
                    placeholder='Full name'
                    onChangeText={setFullName}
                    value={fullName}
                />

                <Input
                    placeholder='E-mail'
                    onChangeText={setEmail}
                    value={email}
                />

                <Input
                    placeholder='Password'
                    onChangeText={setPassword}
                    value={password}
                />

                <Input
                    placeholder='Confirm Password'
                    onChangeText={setConfirmPassword}
                    value={confirmPassword}
                />

                <Button
                    onPress={registrationHandler}
                    title='Зарегистрироваться'
                />

                <View style={s.footerView}>
                    <Text style={s.footerText}>
                        {`Already got an account? `}
                    </Text>
                    <ButtonLink
                        title='Log in'
                        onPress={loginHandler}
                    />
                </View>

            </KeyboardAwareScrollView>
        </View>
    )
};

export default Registrations;
