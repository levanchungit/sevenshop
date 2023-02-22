import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Image, Input, Button, Pressable } from 'native-base';
import * as Icon from 'react-native-feather';
import { AppNavigationProp } from 'providers/navigation/types';
type Props = object;

const SetPassWordScreen = (props: Props) => {
  const [showPass, setShowPass] = useState(false);
  const [showPass1, setShowPass1] = useState(false);
  const navigation = useNavigation<AppNavigationProp>();
  return (
    <View w={'100%'} h={'100%'} flex={1}>
      <Image
        alt="Image Setpassword"
        w={'100%'}
        h={250}
        borderBottomLeftRadius={12}
        borderBottomRightRadius={12}
        shadow={1}
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
        Set Password
      </Text>

      <View h={200} alignItems={'center'}>
        <View
          flexDirection={'row'}
          w={'80%'}
          alignItems={'center'}
          borderBottomWidth={1}
          px={4}
          mt={5}
        >
          <Icon.Lock stroke="black" width={24} height={24} style={{ marginRight: 5 }} />
          <Input
            fontSize={16}
            fontFamily={'heading'}
            fontStyle={'normal'}
            w={{ base: '85%' }}
            variant="unstyled"
            placeholder="Enter your email/phone number"
            secureTextEntry={!showPass}
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

        <View
          flexDirection={'row'}
          w={'80%'}
          alignItems={'center'}
          borderBottomWidth={1}
          px={4}
          mt={5}
        >
          <Icon.Lock stroke="black" width={24} height={24} style={{ marginRight: 5 }} />
          <Input
            fontSize={16}
            fontFamily={'heading'}
            fontStyle={'normal'}
            w={{ base: '85%' }}
            variant="unstyled"
            placeholder="Enter your email/phone number"
            secureTextEntry={!showPass1}
          />
          <Pressable
            onPress={() => {
              setShowPass1(!showPass1);
            }}
          >
            {showPass1 ? (
              <Icon.Eye stroke="grey" width={24} height={24} />
            ) : (
              <Icon.EyeOff stroke="grey" width={24} height={24} />
            )}
          </Pressable>
        </View>

        <Button
          onPress={() => {
            navigation.navigate('Login');
          }}
          w={{ base: '50%' }}
          mb="1"
          mt="6"
        >
          <Text fontSize={14} color={'light.100'} fontWeight={'bold'}>
            Set
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default SetPassWordScreen;
