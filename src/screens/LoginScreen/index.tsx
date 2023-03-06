import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Button, Image, Toast } from 'native-base';
import * as Icon from 'react-native-feather';
// import { SignInPayload } from 'interfaces/Auth';
import SSTextInput from 'components/SSTextInput';
import { authAPI } from 'modules';
import { AppNavigationProp } from 'providers/navigation/types';

const LoginScreen = () => {
  const navigation = useNavigation<AppNavigationProp>();

  const [email, setEmail] = useState('phamkhuyen0879249035@gmail.com');
  const [password, setPassword] = useState('123');

  const onSubmit = async () => {
    try {
      const response = await authAPI.login({ email, password });
      Toast.show({
        title: response.data.message,
        duration: 3000,
      });
      navigation.navigate('Main');
    } catch (e: any) {
      Toast.show({
        title: e.response?.data?.message,
        duration: 3000,
      });
    }
  };

  return (
    <View w="100%" h="100%" flex={1}>
      <Image
        alt="Image Login"
        w="100%"
        h={250}
        borderBottomLeftRadius={12}
        borderBottomRightRadius={12}
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
        Login
      </Text>

      <View h={200} alignItems="center">
        <SSTextInput
          placeholder={'Enter your email/phone number'}
          value={email}
          changeValue={setEmail}
          inputLeftElement={<Icon.User stroke="#1C1C1C" width={24} height={24} />}
          typePassword={false}
        ></SSTextInput>

        <SSTextInput
          placeholder={'Enter your password'}
          value={password}
          changeValue={setPassword}
          typePassword={true}
          inputLeftElement={<Icon.Lock stroke="#1C1C1C" width={24} height={24} />}
        ></SSTextInput>

        <View style={{ width: '80%' }}>
          <Text
            textAlign="right"
            fontSize={14}
            fontStyle="normal"
            fontFamily="heading"
            fontWeight={400}
            color="primary.600"
            mt={3}
            onPress={() => {
              navigation.navigate('ForgotPassWord');
            }}
          >
            Forgot password?
          </Text>
        </View>

        <Button
          onPress={() => navigation.navigate('Main')}
          borderRadius={6}
          w={{ base: '50%' }}
          mb="1"
          mt="3"
        >
          <Text fontSize={14} color="light.100" fontWeight={'bold'}>
            Login
          </Text>
        </Button>
        <Text mt={5} fontSize={14} fontWeight={500} fontStyle="normal" fontFamily="heading">
          Or login with
        </Text>
        <View mt={3} flexDirection="row" w="25%" justifyContent="space-around">
          <Image
            style={{ width: 40, height: 40 }}
            alt="Image Facebook"
            source={{
              uri: 'https://res.cloudinary.com/dzhlsdyqv/image/upload/v1677553446/SevenShop/facebook_abaweh.png',
            }}
          />
          <Image
            style={{ width: 40, height: 40 }}
            source={{
              uri: 'https://res.cloudinary.com/dzhlsdyqv/image/upload/v1677553444/SevenShop/google_wopk5u.png',
            }}
            alt="Image Gmail"
          />
        </View>
        <View flexDirection="row" alignItems="center" mt={5}>
          <Text fontSize={16} fontWeight={500}>
            Don’t you have an account?
          </Text>
          <Text
            onPress={() => {
              navigation.navigate('Register');
            }}
            fontSize={14}
            ml={1}
            fontWeight="bold"
            color="primary.600"
          >
            Register
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
