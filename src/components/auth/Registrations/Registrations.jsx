import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import s from './styles.scss';
import {Button, ButtonLink, Input} from '../../UI'
import { firebase } from '../../../../firebase/config'

const Registrations = ({ navigation }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const registrationHandler = () => {
        if(password !== confirmPassword) {
            alert("Password don't match");
            return;
        }
        console.log('######################################');
        console.log('----------------------- firebase:');
        console.log(firebase);
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                console.log('----------------------- response:');
                console.log(response);
                const { uid } = response?.user || {};
                const data = {
                    id: uid,
                    email,
                    fullName
                };
                const usersRef = firebase.firestore().collection('users');
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        navigation.navigate('todos', {user: data})
                    })
                    .catch((error) => {
                        alert(error)
                    })
            })
            .catch((error) => {
                alert(error)
            })
    };
    const loginHandler = () => {
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
