import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, Button, Toast } from 'native-base';
import * as Icon from 'react-native-feather';
import SSTextInput from 'components/SSTextInput';
import { URL_IMG_AUTH } from 'global/constants';
import { authAPI } from 'modules';
import { AppNavigationProp } from 'providers/navigation/types';

type Props = object;

const ForgotPasswordScreen = (props: Props) => {
  const navigation = useNavigation<AppNavigationProp>();

  const [email, setEmail] = useState('');
  const [disableButton, setDisable] = useState(false);

  const onSubmit = async () => {
    setDisable(true);

    try {
      const response = await authAPI.forgot_password({ email });
      Toast.show({
        title: response.data.message,
        duration: 3000,
      });
      navigation.replace('OTPForgot', response.data.result);
    } catch (e: any) {
      console.log(e.response.status, e.response.data);
      Toast.show({
        title: e.response?.data?.message,
        duration: 3000,
      });
    }
    setDisable(false);
  };
  return (
    <View w={'100%'} h={'100%'} flex={1}>
      <Image
        alt="Image Forgotpassword"
        w={'100%'}
        h={250}
        borderBottomLeftRadius={12}
        borderBottomRightRadius={12}
        source={{
          uri: URL_IMG_AUTH,
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
        Forgot Password
      </Text>

      <View h={200} alignItems={'center'}>
        <Text
          mt={7}
          w={'80%'}
          fontSize={16}
          fontWeight={500}
          fontFamily={'heading'}
          fontStyle={'normal'}
        >
          Please enter your email or phone number:
        </Text>

        <SSTextInput
          placeholder={'Enter your email/phone number'}
          typePassword={false}
          inputLeftElement={<Icon.Phone stroke="black" width={24} height={24} />}
          value={email}
          changeValue={setEmail}
        ></SSTextInput>
        <Button
          onPress={onSubmit}
          w={{ base: '50%' }}
          mb="1"
          mt="6"
          borderRadius={6}
          disabled={disableButton}
        >
          <Text fontSize={14} color={'light.100'} fontWeight={'bold'}>
            Send
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;
