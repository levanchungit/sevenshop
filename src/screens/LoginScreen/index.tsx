import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Input, Button, Image, Pressable, Toast } from 'native-base';
import * as Icon from 'react-native-feather';
import { SignInPayload } from 'interfaces/Auth';
import { authAPI } from 'modules';
import { AppNavigationProp } from 'providers/navigation/types';

const LoginScreen = () => {
  const [showPass, setShowPass] = useState(false);

  const navigation = useNavigation<AppNavigationProp>();

  const [formData, setFormData] = useState<SignInPayload>({
    email: '',
    password: '',
  });

  const onSubmit = async () => {
    try {
      const response = await authAPI.login(formData);
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

  //useEffect check isLoggedIn == true ? navigation Main : Home

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
        <View flexDirection="row" w="80%" alignItems="center" borderBottomWidth={1} px={4} mt={5}>
          <Icon.User stroke="#1C1C1C" width={24} height={24} />
          <Input
            autoCapitalize="none"
            fontSize={16}
            fontFamily="heading"
            fontStyle="normal"
            w={{ base: '85%' }}
            variant="unstyled"
            placeholder="Enter your email/phone number"
            value={formData.email}
            onChangeText={(value) => setFormData({ ...formData, email: value })}
          />
        </View>

        <View flexDirection="row" w="80%" alignItems="center" borderBottomWidth={1} px={4} mt={5}>
          <Icon.Lock stroke="#1C1C1C" width={24} height={24} />
          <Input
            fontSize={16}
            w={{ base: '85%' }}
            variant="unstyled"
            placeholder="Enter your password"
            secureTextEntry={!showPass}
            value={formData.password}
            onChangeText={(value) => setFormData({ ...formData, password: value })}
          />
          <Pressable
            onPress={() => {
              setShowPass(!showPass);
            }}
          >
            {showPass ? (
              <Icon.Eye stroke="grey" width={24} height={24} />
            ) : (
              <Icon.EyeOff stroke="grey" width={24} height={24} />
            )}
          </Pressable>
        </View>
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
        <View mt={3} flexDirection="row" w="25%" justifyContent="space-around">
          <Image
            style={{ width: 40, height: 40 }}
            alt="Image Facebook"
            source={{
              uri: 'https://images.vexels.com/media/users/3/223136/isolated/preview/984f500cf9de4519b02b354346eb72e0-facebook-icon-social-media-by-vexels.png',
            }}
          />
          <Image
            style={{ width: 40, height: 40 }}
            source={{
              uri: 'https://imagepng.org/wp-content/uploads/2019/08/google-icon.png',
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
