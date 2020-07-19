import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyle, color } from '../../utility';
import Logo from '../../components/logo';
import Inputfield from '../../components/inputfield';
import RoundCornerButton from '../../components/buttons';

const Login = ({navigation}) => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });
    const {email, password} = credentials;

    onLoginPress = () => {
        if(!email){
            alert('Email is required!');
        } else if(!password){
            alert('Password is required!');
        } else {
            alert(JSON.stringify(credentials));
        }
    };

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
                <RoundCornerButton title="Login " onPress={() => onLoginPress()} />
                <Text
                    style={{
                        fontSize: 28,
                        fontWeight: 'bold',
                        color: color.BLACK,
                        textAlign: 'center',
                    }}
                    onPress={() => navigation.navigate('SignUp')}>
                        Sign Up
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default Login;
