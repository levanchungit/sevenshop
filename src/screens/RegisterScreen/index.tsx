import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, Button, Toast, KeyboardAvoidingView } from 'native-base';
import { useTranslation } from 'react-i18next';
import { Platform } from 'react-native';
import * as Icon from 'react-native-feather';
import SSTextInput from 'components/SSTextInput';
import { URL_IMG_AUTH } from 'global/constants';
import { authAPI } from 'modules';
import { AppNavigationProp } from 'providers/navigation/types';
type Props = object;

const RegisterScreen = (props: Props) => {
  const { t } = useTranslation();
  const navigation = useNavigation<AppNavigationProp>();

  const [email, setEmail] = useState('');
  const [disableButton, setDisable] = useState(false);

  const onSubmit = async () => {
    setDisable(true);
    try {
      const response = await authAPI.register({ email });
      Toast.show({
        title: response.data.message,
        duration: 3000,
      });
      navigation.replace('OTP', response.data.result);
    } catch (e: any) {
      console.log(e.response.status, e.response.data);
      Toast.show({
        title: e.response?.data?.message,
        duration: 3000,
      });
    }
    setDisable(false);
  };

  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

  return (
    <KeyboardAvoidingView
      height={'100%'}
      bgColor={'white'}
      behavior="position"
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <View w={'100%'} h={'100%'} flex={1}>
        <Image
          alt="Image Register"
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
          {t('Register.title')}
        </Text>

        <View h={200} alignItems={'center'}>
          <SSTextInput
            placeholder={t('Register.email')}
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
            disabled={disableButton}
          >
            <Text fontSize={14} color={'light.100'} fontWeight={'bold'}>
              {t('Register.title')}
            </Text>
          </Button>

          <Text mt={5} fontSize={14} fontWeight={500} fontStyle={'normal'} fontFamily={'heading'}>
            {t('Register.loginWith')}
          </Text>
          <View flexDirection={'row'} alignItems={'center'} mt={5}>
            <Text fontSize={16} fontWeight={500}>
              {t('Register.haveAccount')}
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
              {t('Register.login')}
            </Text>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
