import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Image, Button, Toast } from 'native-base';
import * as Icon from 'react-native-feather';
import SSTextInput from 'components/SSTextInput';
import { authAPI } from 'modules';
import { AppNavigationProp } from 'providers/navigation/types';

const SetPasswordForgotScreen = () => {
  const navigation = useNavigation<AppNavigationProp>();

  const [password, setPassword] = useState('');
  const [password_new, setPassword_new] = useState('');

  const onSubmit = async () => {
    try {
      const response = await authAPI.set_password({ password });
      console.log(response);
      Toast.show({
        title: response.data.message,
        duration: 3000,
      });
      navigation.navigate('Login');
    } catch (e: any) {
      console.error(e.response);
      Toast.show({
        title: e.response?.data?.message,
        duration: 3000,
      });
    }
  };

  return (
    <View w="100%" h="100%" flex={1}>
      <Image
        alt="Image"
        w="100%"
        h={250}
        borderBottomLeftRadius={12}
        borderBottomRightRadius={12}
        shadow={1}
        source={{
          uri: 'https://th.bing.com/th/id/OIP.cH80uEpp8kXrYliDjpuk2AHaFh?pid=ImgDet&rs=1',
        }}
      />
      <Text
        mt="5"
        fontFamily="heading"
        fontStyle="normal"
        fontWeight={400}
        fontSize={36}
        textAlign="center"
      >
        Set Password
      </Text>

      <View h={200} alignItems="center">
        <SSTextInput
          placeholder={'Enter your password old...'}
          typePassword={false}
          inputLeftElement={<Icon.Lock stroke="black" width={24} height={24} />}
          value={password}
          changeValue={setPassword}
        ></SSTextInput>

        <SSTextInput
          placeholder={'Enter confirm your password new...'}
          typePassword={false}
          inputLeftElement={<Icon.Lock stroke="black" width={24} height={24} />}
          value={password_new}
          changeValue={setPassword_new}
        ></SSTextInput>

        <Button onPress={onSubmit} w={{ base: '50%' }} mb="1" mt="6">
          <Text fontSize={14} color={'light.100'} fontWeight={'bold'}>
            Set
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default SetPasswordForgotScreen;
