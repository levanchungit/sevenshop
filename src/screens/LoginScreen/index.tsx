import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Center, Text } from 'native-base';
import { LoginScreenNavigationProp } from 'providers/navigation/types';

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  return (
    <Center flex="1" _dark={{ bg: 'blueGray.900' }} _light={{ bg: 'blueGray.50' }}>
      <Text>Login Screen</Text>
      <Button onPress={() => navigation.replace('Main')}>Login</Button>
    </Center>
  );
};

export default LoginScreen;
