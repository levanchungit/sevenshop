import { useNavigation } from '@react-navigation/native';
import { Image, Pressable, Text, View } from 'native-base';
import { useTranslation } from 'react-i18next';
import * as Icon from 'react-native-feather';
import SSHeaderNavigation from 'components/SSHeaderNavigation';
import useGetMe from 'hook/auth/useGetMe';
import useGetOrders from 'hook/order/useGetOrders';
import { AppNavigationProp } from 'providers/navigation/types';
const ProfileScreen = () => {
  const navigation = useNavigation<AppNavigationProp>();
  const { t } = useTranslation();
  const { orders } = useGetOrders();
  const { me } = useGetMe();
  return (
    <View flex={1}>
      <View
        px={3}
        h={'30%'}
        justifyContent={'flex-end'}
        borderBottomLeftRadius={30}
        borderBottomRightRadius={30}
        borderRightWidth={1}
        borderLeftWidth={1}
        borderBottomWidth={1}
        borderColor={'gray.400'}
        backgroundColor={'gray.300'}
      >
        <View h={'90%'} justifyContent={'space-between'} mb={3}>
          <View>
            <SSHeaderNavigation
              tabHeaderSearchEnabled={true}
              titleHeaderSearchEnabled={true}
              titleHeaderSearch={t('Profile.title')}
              iconSearchEnabled={false}
              iconOther={true}
              titleHeaderScreen="Payment Success"
              iconRightHeaderScreen={false}
              iconRightHeaderCart={false}
            />
          </View>
          <View flexDirection={'row'} pb={1}>
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
            <View ml={3} justifyContent={'center'}>
              <Text variant={'subtitle1'} color={'primary.600'}>
                {me?.data.result.full_name}
              </Text>
              <Pressable
                backgroundColor={'primary.600'}
                px={3}
                py={1}
                h={'35%'}
                borderRadius={10}
                mt={1}
              >
                <Text variant={'body1'} color={'white'} textAlign={'center'}>
                  {t('Profile.memberSliver')}
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <View px={3} mt={3}>
        <View flexDirection={'row'} justifyContent={'space-between'}>
          <View flexDirection={'row'}>
            <Icon.User stroke="black" width={24} height={24} />
            <Text ml={2} variant={'subtitle1'}>
              {t('Profile.myPurchase')}
            </Text>
          </View>
          <Pressable flexDirection={'row'} onPress={() => navigation.navigate('MyPurchaseScreen')}>
            <Text mr={2} variant={'body2'}>
              {t('Profile.purchaseHistory')}
            </Text>
            <Icon.ChevronRight stroke="black" width={24} height={24} />
          </Pressable>
        </View>

        <View flexDirection={'row'} mt={2} px={7} justifyContent={'space-between'}>
          <View>
            <View flexDirection={'row'} ml={2} mb={1}>
              <View mt={2}>
                <Icon.Box stroke="black" width={24} height={24} />
              </View>
              <View
                w={5}
                h={5}
                borderRadius={'full'}
                backgroundColor={'primary.600'}
                alignItems={'center'}
              >
                <Text fontSize={11} color={'white'} textAlign={'center'} lineHeight={15}>
                  {orders?.data.results
                    ? orders?.data.results.filter((item: any) => item.status === 'pending').length
                    : 0}
                </Text>
              </View>
            </View>

            <Text variant={'body2'}>{t('Profile.toPay')}</Text>
          </View>

          <View>
            <View flexDirection={'row'} ml={3} mb={1}>
              <View mt={2}>
                <Icon.ShoppingBag stroke="black" width={24} height={24} />
              </View>
              <View
                w={5}
                h={5}
                borderRadius={'full'}
                backgroundColor={'primary.600'}
                alignItems={'center'}
              >
                <Text fontSize={11} color={'white'} lineHeight={15}>
                  {orders?.data.results
                    ? orders?.data.results.filter((item: any) => item.status === 'shipping').length
                    : 0}
                </Text>
              </View>
            </View>

            <Text variant={'body2'}>{t('Profile.toShip')}</Text>
          </View>

          <View>
            <View flexDirection={'row'} ml={5} mb={1}>
              <View mt={2}>
                <Icon.Truck stroke="black" width={24} height={24} />
              </View>
              <View
                w={5}
                h={5}
                borderRadius={'full'}
                backgroundColor={'primary.600'}
                alignItems={'center'}
              >
                <Text fontSize={11} color={'white'} lineHeight={15}>
                  {orders?.data.results
                    ? orders?.data.results.filter((item: any) => item.status === 'completed').length
                    : 0}
                </Text>
              </View>
            </View>

            <Text variant={'body2'}>{t('Profile.toReceive')}</Text>
          </View>

          <Pressable onPress={() => navigation.navigate('Rating')}>
            <View flexDirection={'row'} ml={2} mb={1}>
              <View mt={2}>
                <Icon.Star stroke="black" width={24} height={24} />
              </View>
            </View>

            <Text variant={'body2'}>{t('Rating')}</Text>
          </Pressable>
        </View>
        <View px={3} mt={5} h={'35%'} justifyContent={'space-between'}>
          <View flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <View flexDirection={'row'}>
              <Icon.Award stroke="black" width={24} height={24} />
              <Text ml={2} variant={'body1'}>
                {t('Profile.memberShip')}
              </Text>
            </View>
            <Icon.ChevronRight stroke="black" width={24} height={24} />
          </View>

          <View flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <View flexDirection={'row'}>
              <Icon.Bookmark stroke="black" width={24} height={24} />
              <Text ml={2} variant={'body1'}>
                {t('Profile.recentlyViewed')}
              </Text>
            </View>
            <Icon.ChevronRight stroke="black" width={24} height={24} />
          </View>

          <Pressable
            onPress={() => navigation.navigate('VoucherScreen')}
            flexDirection={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <View flexDirection={'row'}>
              <Icon.Gift stroke="black" width={24} height={24} />
              <Text ml={2} variant={'body1'}>
                {t('Profile.myVoucher')}
              </Text>
            </View>
            <Icon.ChevronRight stroke="black" width={24} height={24} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
