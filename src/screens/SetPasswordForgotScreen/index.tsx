import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Image, Button, Toast } from 'native-base';
import { useTranslation } from 'react-i18next';
import * as Icon from 'react-native-feather';
import SSTextInput from 'components/SSTextInput';
import { URL_IMG_AUTH } from 'global/constants';
import { authAPI } from 'modules';
import { AppNavigationProp } from 'providers/navigation/types';

const SetPasswordForgotScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<AppNavigationProp>();

  const [password, setPassword] = useState('');
  const [password_new, setPassword_new] = useState('');
  const [disableButton, setDisable] = useState(false);

  const onSubmit = async () => {
    setDisable(true);

    try {
      const response = await authAPI.set_password_forgot({ password });
      Toast.show({
        title: response.data.message,
        duration: 3000,
      });
      navigation.replace('Main');
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
    <View w="100%" h="100%" flex={1}>
      <Image
        alt="Image"
        w="100%"
        h={250}
        borderBottomLeftRadius={12}
        borderBottomRightRadius={12}
        shadow={1}
        source={{
          uri: URL_IMG_AUTH,
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
        {t('SetPassWord.title')}
      </Text>

      <View h={200} alignItems="center">
        <SSTextInput
          placeholder={t('SetPassWord.password')}
          typePassword={false}
          inputLeftElement={<Icon.Lock stroke="black" width={24} height={24} />}
          value={password}
          changeValue={setPassword}
        ></SSTextInput>

        <SSTextInput
          placeholder={t('SetPassWord.confirmPassword')}
          typePassword={false}
          inputLeftElement={<Icon.Lock stroke="black" width={24} height={24} />}
          value={password_new}
          changeValue={setPassword_new}
        ></SSTextInput>

        <Button onPress={onSubmit} w={{ base: '50%' }} mb="1" mt="6" disabled={disableButton}>
          <Text fontSize={14} color={'light.100'} fontWeight={'bold'}>
            Set
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default SetPasswordForgotScreen;
