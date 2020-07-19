import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyle, color } from '../../utility';
import Logo from '../../components/logo';
import Inputfield from '../../components/inputfield';
import RoundCornerButton from '../../components/buttons';

const SignUp = ({navigation}) => {
    const [credentials, setCredentials] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const {name, email, password, confirmPassword} = credentials;

    const onSignUpPress = () => {
        if (!name) {
            alert('Name is required!');
        } else if (!email) {
            alert('Email is required!');
        } else if (!password) {
            alert('Password is required!');
        } else if (!confirmPassword) {
            alert('Please confirm password')
        } else if (password !== confirmPassword) {
            alert('Passwords did not match!');
        } else {
            alert(JSON.stringify(credentials));
        }
    }

    const handleOnChange = (name, value) => {
        setCredentials({
            ...credentials,
            [name]: value,
        });
    };

    return (
        <SafeAreaView style={[ globalStyle.flex1, {backgroundColor: color.LIGHT_STEEL_BLUE}]}>
            <View style={[globalStyle.containerCentered]}>
                <Logo />
            </View>
            <View style={[globalStyle.flex2, globalStyle.sectionCentered]}>
                <Inputfield
                    placeholder="Enter name"
                    value={name}
                    onChangeText={(text) => handleOnChange('name', text)}
                />
                <Inputfield
                    placeholder="Enter email"
                    value={email}
                    onChangeText={(text) => handleOnChange('email', text)}
                />
                <Inputfield
                    placeholder="Enter password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => handleOnChange('password', text)}
                />
                <Inputfield
                    placeholder="Confirm password"
                    secureTextEntry={true}
                    value={confirmPassword}
                    onChangeText={(text) => handleOnChange('confirmPassword', text)}
                />
                <RoundCornerButton title="SignUp " onPress={() => onSignUpPress()} />
                <Text
                    style={{
                        fontSize: 28,
                        fontWeight: 'bold',
                        color: color.BLACK,
                        textAlign: 'center',
                    }}
                    onPress={() => navigation.navigate('Login')}>
                        Login
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default SignUp;
