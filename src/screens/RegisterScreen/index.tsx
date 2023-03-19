import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, Button, Toast } from 'native-base';
import * as Icon from 'react-native-feather';
import SSTextInput from 'components/SSTextInput';
import { authAPI } from 'modules';
import { AppNavigationProp } from 'providers/navigation/types';
type Props = object;

const RegisterScreen = (props: Props) => {
  const navigation = useNavigation<AppNavigationProp>();

  const [email, setEmail] = useState('');

  const onSubmit = async () => {
    try {
      const response = await authAPI.register({ email });
      Toast.show({
        title: response.data.message,
        duration: 3000,
      });
      navigation.replace('OTP', response.data.result);
    } catch (e: any) {
      console.error(e.response);
      Toast.show({
        title: e.response?.data?.message,
        duration: 3000,
      });
    }
  };

  return (
    <View w={'100%'} h={'100%'} flex={1}>
      <Image
        alt="Image Register"
        w={'100%'}
        h={250}
        borderBottomLeftRadius={12}
        borderBottomRightRadius={12}
        source={{
          uri: 'https://th.bing.com/th/id/OIP.cH80uEpp8kXrYliDjpuk2AHaFh?pid=ImgDet&rs=1',
        }}
      />
      <Text
        mt="5"
        fontFamily={'heading'}
        fontStyle={'normal'}
        fontWeight={400}
        fontSize={36}
        textAlign={'center'}
      >
        Register
      </Text>

      <View h={200} alignItems={'center'}>
        <SSTextInput
          placeholder={'Enter your email/phone number'}
          typePassword={false}
          inputLeftElement={<Icon.Phone stroke="black" width={24} height={24} />}
          value={email}
          changeValue={setEmail}
        ></SSTextInput>

        <Button
          backgroundColor="primary.600"
          variant={'abc'}
          onPress={onSubmit}
          w={{ base: '50%' }}
          mb="1"
          mt="8"
        >
          <Text fontSize={14} color={'light.100'} fontWeight={'bold'}>
            Register
          </Text>
        </Button>

        <Text mt={5} fontSize={14} fontWeight={500} fontStyle={'normal'} fontFamily={'heading'}>
          Or login with
        </Text>
        <View flexDirection={'row'} alignItems={'center'} mt={5}>
          <Text fontSize={16} fontWeight={500}>
            Don’t you have an account?
          </Text>
          <Text
            onPress={() => {
              navigation.navigate('Login');
            }}
            fontSize={14}
            ml={1}
            fontWeight={'bold'}
            color={'primary.600'}
          >
            Login
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;
