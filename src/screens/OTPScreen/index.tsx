import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, Button, Toast } from 'native-base';
import * as Icon from 'react-native-feather';
// import { CheckOTPPayload } from 'interfaces/Auth';
import SSTextInput from 'components/SSTextInput';
import { URL_IMG_AUTH } from 'global/constants';
import { authAPI } from 'modules';
import { AppNavigationProp } from 'providers/navigation/types';

const OTPScreen = (props: any) => {
  const navigation = useNavigation<AppNavigationProp>();

  const [id] = useState(props.route.params.user_id);
  const [otp, setOtp] = useState('');
  const [disableButton, setDisable] = useState(false);

  const onSubmit = async () => {
    setDisable(true);

    try {
      const response = await authAPI.check_otp({ id, otp });
      Toast.show({
        title: response.data.message,
        duration: 3000,
      });

      navigation.replace('SetPassword');
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
        alt="Image OTP"
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
        OTP Verification
      </Text>

      <View h={200} alignItems={'center'}>
        <Text
          mt={8}
          w={'80%'}
          fontSize={16}
          fontWeight={500}
          fontFamily={'heading'}
          fontStyle={'normal'}
        >
          We have sent OTP to the phone number. The expiry date is 5 minutes
        </Text>

        <SSTextInput
          placeholder={'Enter your OTP...'}
          typePassword={false}
          inputLeftElement={<Icon.Mail stroke="black" width={24} height={24} />}
          value={otp}
          changeValue={setOtp}
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
            Verify
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default OTPScreen;
