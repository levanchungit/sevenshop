import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Moment from 'moment';
import { Image, Text, View, Pressable } from 'native-base';
import { useTranslation } from 'react-i18next';
import { PaymentSuccessRouteProp, AppNavigationProp } from 'providers/navigation/types';

type Success = {
  route: PaymentSuccessRouteProp;
};
const PaymentSuccess = ({ route }: Success) => {
  const { t } = useTranslation();
  const navigation = useNavigation<AppNavigationProp>();
  const { data_detail } = route.params;
  // console.log('data_detail', data_detail);
  let date = '';
  if (data_detail) {
    date =
      data_detail.results.created_at.slice(11, 16) +
      '-' +
      Moment(data_detail.results.created_at).format('DD/MM/YYYY');
  }

  return (
    <View bgColor={'white'} flex={1}>
      <View mt={7}>
        <View mt={50} alignItems="center">
          <Image
            alt="123"
            w={100}
            h={100}
            source={require('../../assets/images/paymentsuccess.png')}
          />
          <Text variant={'Title'} fontWeight="bold" fontSize={20} mt={3} mb={7} color="black">
            {t('PaymentSuccess.title')}
          </Text>
        </View>

        <View padding={3} borderRadius={6} borderWidth={0.4} m={3} borderColor="gray.500">
          <View>
            <View flexDirection={'row'} justifyContent="space-between" mb={2}>
              <Text
                variant={'Body1'}
                fontSize={16}
                fontWeight="medium"
                color={'black'}
                fontFamily="Raleway_500Medium"
              >
                {t('PaymentSuccess.paymentTime')}
              </Text>
              <Text
                style={{
                  fontVariant: ['lining-nums'],
                }}
                variant={'Body1'}
                fontSize={16}
                fontWeight="medium"
                color={'black'}
                fontFamily="Raleway_500Medium"
              >
                {date}
              </Text>
            </View>
            <View flexDirection={'row'} justifyContent="space-between" mb={2}>
              <Text variant={'Body1'} fontSize={16} color={'black'} fontFamily="Raleway_500Medium">
                {t('PaymentSuccess.tradingCode')}
              </Text>
              <Text
                style={{
                  fontVariant: ['lining-nums'],
                }}
                variant={'Body1'}
                fontSize={16}
                color={'primary.600'}
              >
                {data_detail ? '#' + data_detail.results._id : '...............'}
              </Text>
            </View>
            <View flexDirection={'row'} justifyContent="space-between" color={'black'} mb={3}>
              <Text
                variant={'Body1'}
                fontSize={16}
                fontWeight="extraBlack"
                fontFamily="Raleway_500Medium"
              >
                {t('PaymentSuccess.paidBy')}
              </Text>
              <Text variant={'Body1'} fontSize={16} color={'black'} fontFamily="Raleway_500Medium">
                {data_detail
                  ? data_detail?.results.payment_type === 'cod'
                    ? 'Cash'
                    : data_detail?.results.payment_type === 'bank'
                    ? 'bank'
                    : 'momo'
                  : '......'}
              </Text>
            </View>
            <View flexDirection={'row'} justifyContent="space-between" color={'black'}>
              <Text variant={'Body1'} fontSize={12} w={'60%'} fontFamily="Raleway_500Medium">
                {t('PaymentSuccess.details1')}{' '}
                <Text fontWeight={'extrabold'} fontSize={14} fontFamily="Raleway_700Bold">
                  {t('PaymentSuccess.profile')}
                </Text>{' '}
                {t('PaymentSuccess.details1')}{' '}
                <Text
                  fontSize={14}
                  fontWeight={'extrabold'}
                  lineHeight={19}
                  fontFamily="Raleway_700Bold"
                >
                  {t('PaymentSuccess.viewOrder')}
                </Text>
              </Text>
              <Pressable
                style={{
                  borderWidth: 0.4,
                  width: 150,
                  borderRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingBottom: 6,
                  height: 45,
                  marginTop: 8,
                  borderColor: 'gray',
                }}
                onPress={() => navigation.replace('MyPurchaseScreen')}
              >
                <Text
                  variant={'Button'}
                  fontFamily="Raleway_700Bold"
                  fontSize={16}
                  color={'primary.600'}
                >
                  {t('PaymentSuccess.viewOrder')}
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View mt={5}>
          <Text variant={'Caption'} textAlign="center" fontSize={12} fontFamily="Raleway_500Medium">
            {t('PaymentSuccess.thankYou1')}
          </Text>
          <Text variant={'Caption'} textAlign="center" fontSize={12} fontFamily="Raleway_500Medium">
            {t('PaymentSuccess.thankYou2')}
          </Text>
          <Text variant={'Caption'} textAlign="center" fontSize={12} fontFamily="Raleway_500Medium">
            {t('PaymentSuccess.thankYou3')}
          </Text>
        </View>
      </View>

      <View alignItems={'center'}>
        <Pressable
          style={{
            marginTop: 50,
            borderWidth: 0.4,
            width: '90%',
            borderRadius: 6,
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: 6,
            height: 50,
            borderColor: 'gray',
          }}
          backgroundColor={'primary.600'}
          onPress={() => navigation.navigate('Main')}
        >
          <Text variant={'Button'} fontFamily="Raleway_700Bold" fontSize={16} color={'white'}>
            {t('PaymentSuccess.keepShopping')}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default PaymentSuccess;
