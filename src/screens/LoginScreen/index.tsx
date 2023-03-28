import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Button, Image, Toast, Spinner, Box } from 'native-base';
import * as Icon from 'react-native-feather';
// import { SignInPayload } from 'interfaces/Auth';
import SSTextInput from 'components/SSTextInput';
import { authAPI } from 'modules';
import { AppNavigationProp } from 'providers/navigation/types';

const LoginScreen = () => {
  const navigation = useNavigation<AppNavigationProp>();

  const [email, setEmail] = useState('quyentran.02062000@gmail.com');
  const [password, setPassword] = useState('123456');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await authAPI.login({ email, password });
      Toast.show({
        title: response.data.message,
        duration: 3000,
      });
      navigation.navigate('MyPurchaseScreen');
    } catch (e: any) {
      Toast.show({
        title: e.response?.data?.message,
        duration: 3000,
      });
    }
    setIsLoading(false);
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

        <Button onPress={onSubmit} borderRadius={6} w={{ base: '50%' }} mb="1" mt="3">
          <Text fontSize={14} color="light.100" fontWeight={'bold'}>
            Login
          </Text>
        </Button>
        <Text mt={5} fontSize={14} fontWeight={500} fontStyle="normal" fontFamily="heading">
          Or login with
        </Text>
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

      {isLoading ? (
        <Box
          display={'flex'}
          justifyContent="center"
          backgroundColor={'rgba(0,0,0,0.1)'}
          w={'100%'}
          height={'100%'}
          position="absolute"
          alignItems="center"
        >
          <Spinner size={50}></Spinner>
        </Box>
      ) : null}
    </View>
  );
};

export default LoginScreen;
