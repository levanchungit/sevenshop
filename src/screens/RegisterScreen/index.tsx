import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, Button, Input } from 'native-base';
import * as Icon from 'react-native-feather';
import { AppNavigationProp } from 'providers/navigation/types';
type Props = object;

const RegisterScreen = (props: Props) => {
  const navigation = useNavigation<AppNavigationProp>();
  return (
    <View w={'100%'} h={'100%'} flex={1}>
      <Image
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
        <View
          flexDirection={'row'}
          w={'80%'}
          alignItems={'center'}
          borderBottomWidth={1}
          px={3}
          mt={5}
        >
          <Icon.Phone stroke="black" width={24} height={24} style={{ marginRight: 5 }} />
          <Input
            fontSize={16}
            fontFamily={'heading'}
            fontStyle={'normal'}
            w={{ base: '85%' }}
            variant="unstyled"
            placeholder="Enter your email/phone number"
          />
        </View>

        <Button
          onPress={() => {
            navigation.navigate('SetPassWord');
          }}
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
        <View mt={3} flexDirection={'row'} w={'25%'} justifyContent={'space-around'}>
          <Image
            style={{ width: 40, height: 40 }}
            source={{
              uri: 'https://images.vexels.com/media/users/3/223136/isolated/preview/984f500cf9de4519b02b354346eb72e0-facebook-icon-social-media-by-vexels.png',
            }}
          />
          <Image
            style={{ width: 40, height: 40 }}
            source={{
              uri: 'https://imagepng.org/wp-content/uploads/2019/08/google-icon.png',
            }}
          />
        </View>
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
