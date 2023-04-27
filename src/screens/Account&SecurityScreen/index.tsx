import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Button, Image, Input, Toast } from 'native-base';
import { useTranslation } from 'react-i18next';
import SSHeaderNavigation from 'components/SSHeaderNavigation';
import useGetMe from 'hook/auth/useGetMe';
import { authAPI } from 'modules';
import { AppNavigationProp } from 'providers/navigation/types';

const AccountSecurityScreen = () => {
  const { t } = useTranslation();
  const { me, mutate_me } = useGetMe();
  const navigation = useNavigation<AppNavigationProp>();

  const [full_name, setfull_name] = useState<string>(me?.data.result.full_name);
  const [phone, setphone] = useState<string>(me?.data.result.phone);
  const [birthday, setbirthday] = useState<string>(me?.data.result.birthday);
  const UpdateSelfUser = async () => {
    try {
      const response = await authAPI.UpdateSelfUser({ full_name, phone, birthday });
      Toast.show({
        title: response.data.message,
        duration: 3000,
      });
      navigation.replace('AccountSettings');
      mutate_me();
    } catch (e: any) {
      Toast.show({
        title: e.response?.data?.message,
        duration: 3000,
      });
    }
  };
  return (
    <View py={3} backgroundColor={'white'} h={600}>
      <SSHeaderNavigation
        tabHeaderSearchEnabled={false}
        titleHeaderSearchEnabled={true}
        titleHeaderSearch="Your Favorites"
        iconSearchEnabled={true}
        iconOther={false}
        titleHeaderScreen={t('Settings.accountSecurity')}
        iconRightHeaderScreen={false}
        iconRightHeaderCart={false}
      />

      <View h={'100%'} px={3}>
        <View alignItems={'center'} justifyContent={'center'} h={'30%'}>
          <Image
            alt="Image OTP"
            w={100}
            h={100}
            borderRadius={'full'}
            source={
              me?.data.result.avatar
                ? { uri: me?.data.result.avatar }
                : require('../../assets/images/logo_sevenshop_image_default.png')
            }
          />
        </View>
        <View h={'60%'} justifyContent={'space-between'}>
          <View h={'12%'} borderBottomWidth={1} borderBottomColor={'gray.300'}>
            <View
              px={3}
              flexDirection={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Text variant={'body1'}>{t('Settings.fullName')}</Text>
              <Input
                w={'60%'}
                variant={'body1'}
                fontSize={16}
                style={{
                  fontVariant: ['lining-nums'],
                  textAlign: 'right',
                }}
                value={full_name}
                onChangeText={(full_name) => setfull_name(full_name)}
              >
                {/* {me?.data.result.full_name} */}
              </Input>
            </View>
          </View>
          <View h={'12%'} borderBottomWidth={1} borderBottomColor={'gray.300'}>
            <View
              px={3}
              flexDirection={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Text variant={'body1'}>{t('Settings.phone')}</Text>
              <Input
                w={'50%'}
                variant={'body1'}
                fontSize={16}
                style={{
                  fontVariant: ['lining-nums'],
                  textAlign: 'right',
                }}
                value={phone}
                onChangeText={(phone) => setphone(phone)}
                keyboardType="numeric"
              >
                {/* {me?.data.result.phone} */}
              </Input>
            </View>
          </View>
          <View h={'10%'} borderBottomWidth={1} borderBottomColor={'gray.300'}>
            <View
              px={3}
              pr={4}
              flexDirection={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Text variant={'body1'}>Email</Text>
              <Text
                variant={'body1'}
                style={{
                  fontVariant: ['lining-nums'],
                }}
              >
                {me?.data.result.email}
              </Text>
            </View>
          </View>
          <View h={'12%'} borderBottomWidth={1} borderBottomColor={'gray.300'}>
            <View
              px={3}
              flexDirection={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Text variant={'body1'}>{t('Settings.birthday')}</Text>
              <Input
                w={'50%'}
                variant={'body1'}
                fontSize={16}
                style={{
                  fontVariant: ['lining-nums'],
                  textAlign: 'right',
                }}
                value={birthday}
                onChangeText={(birthday) => setbirthday(birthday)}
                keyboardType="numeric"
              >
                {/* {me?.data.result.phone} */}
              </Input>
            </View>
          </View>
        </View>
        <View mt={5}>
          <Button width={'100%'} onPress={UpdateSelfUser}>
            <Text fontSize={14} color="light.100" fontWeight={'bold'}>
              {t('Settings.confirm')}
            </Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default AccountSecurityScreen;
