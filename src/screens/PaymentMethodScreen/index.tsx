import React, { useContext, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Box, Flex, Text, Image, Pressable } from 'native-base';
import { useTranslation } from 'react-i18next';
import * as Icon from 'react-native-feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import IconCheck from 'components/IconCheck';
import SSButton from 'components/SSButton';
import SSHeaderNavigation from 'components/SSHeaderNavigation';
import { PAYMENT_TYPE } from 'global/constants';
import { AppNavigationProp } from 'providers/navigation/types';
import { CheckoutContext } from 'screens/CheckoutScreen/CheckoutContext';

const PaymentMethodScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<AppNavigationProp>();
  const [isCod, setIsCod] = useState(false);
  const [isBank, setIsBank] = useState(false);
  const [isMomo, setIsMomo] = useState(false);
  const { paymentType, setPaymentType } = useContext(CheckoutContext);

  useEffect(() => {
    if (paymentType === PAYMENT_TYPE.cod) {
      setIsCod(true);
    } else if (paymentType === PAYMENT_TYPE.bank) {
      setIsBank(true);
    } else if (paymentType === PAYMENT_TYPE.momo) {
      setIsMomo(true);
    }
  }, []);

  const onSetPaymentType = () => {
    if (isCod) {
      setPaymentType(PAYMENT_TYPE.cod);
    } else if (isBank) {
      setPaymentType(PAYMENT_TYPE.bank);
    } else if (isMomo) {
      setPaymentType(PAYMENT_TYPE.momo);
    }
    navigation.goBack();
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: 'white',
      }}
    >
      <SSHeaderNavigation
        tabHeaderSearchEnabled={false}
        titleHeaderSearchEnabled={false}
        iconSearchEnabled={false}
        iconOther={false}
        titleHeaderSearch={''}
        titleHeaderScreen={t('PaymentMethod.title')}
        iconRightHeaderScreen={false}
        iconRightHeaderCart={false}
      />
      <Box marginBottom={3} />

      <Pressable
        onPress={() => {
          setIsCod(true);
          setIsBank(false);
          setIsMomo(false);
        }}
      >
        <Flex
          w="100%"
          direction="row"
          padding={3}
          borderBottomWidth={1}
          borderBottomColor="#C9C9C9"
          marginBottom={3}
          justifyContent="space-between"
          alignItems="center"
        >
          {t('PaymentMethod.cashOnDelivery')}
          <IconCheck isChecked={isCod} />
        </Flex>
      </Pressable>

      <Pressable
        onPress={() => {
          setIsCod(false);
          setIsBank(true);
          setIsMomo(false);
        }}
      >
        <Flex
          w="100%"
          direction="row"
          padding={3}
          borderBottomWidth={1}
          borderBottomColor="#C9C9C9"
          marginBottom={3}
          justifyContent="space-between"
          alignItems="center"
        >
          <Icon.CreditCard stroke="black" width={24} />
          <Text
            variant={'body1'}
            style={{
              fontVariant: ['lining-nums'],
            }}
            width="80%"
            marginLeft={3}
          >
            Credit card
          </Text>
          <IconCheck isChecked={isBank} />
        </Flex>
      </Pressable>

      <Pressable
        onPress={() => {
          setIsCod(false);
          setIsBank(false);
          setIsMomo(true);
        }}
      >
        <Flex
          w="100%"
          direction="row"
          padding={3}
          borderBottomWidth={1}
          borderBottomColor="#C9C9C9"
          marginBottom={3}
          justifyContent="space-between"
          alignItems="center"
        >
          <Image
            source={{
              uri: 'https://res.cloudinary.com/dzhlsdyqv/image/upload/v1680442639/Image/MoMo_Logo_ejfll5.png',
            }}
            alt="Icon"
            size="full"
            w={6}
            h={6}
          />
          <Text
            variant={'body1'}
            style={{
              fontVariant: ['lining-nums'],
            }}
            width="80%"
            marginLeft={5}
          >
            MoMo E-Wallet
          </Text>
          <IconCheck isChecked={isMomo} />
        </Flex>
      </Pressable>
      <Box position={'absolute'} bottom={0} mb={1} w="100%" ml={3}>
        <SSButton
          variant={'red'}
          text={'Agree'}
          onPress={() => {
            onSetPaymentType();
          }}
        />
      </Box>
    </SafeAreaView>
  );
};

export default PaymentMethodScreen;
