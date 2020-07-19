import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = ({navigation}) => {
    return (
        <SafeAreaView>
            <Text onPress={() => navigation.navigate('SignUp')}>Login</Text>
        </SafeAreaView>
    );
};

export default Login;
