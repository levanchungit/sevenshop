import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Center, Text } from 'native-base';
import { AppNavigationProp } from 'providers/navigation/types';

const LoginScreen = () => {
  const navigation = useNavigation<AppNavigationProp>();
  return (
    <Center flex="1">
      <Text fontWeight={700} fontSize="2xl">
        Login Screen
      </Text>
      <Button
        fontWeight={700}
        fontSize="2xl"
        bg="primary.400"
        onPress={() => navigation.replace('Main')}
      >
        Login
      </Button>
    </Center>
  );
};

export default LoginScreen;
