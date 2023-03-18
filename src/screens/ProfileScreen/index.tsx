import { Image, Pressable, Text, View } from 'native-base';
import * as Icon from 'react-native-feather';
import SSHeaderNavigation from 'components/SSHeaderNavigation';
const ProfileScreen = () => {
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
        <View h={'90%'} justifyContent={'space-between'}>
          <SSHeaderNavigation
            tabHeaderSearchEnabled={true}
            titleHeaderSearchEnabled={true}
            titleHeaderSearch="Proflie"
            iconSearchEnabled={false}
            iconOther={true}
            titleHeaderScreen="Payment Success"
            iconRightHeaderScreen={false}
            quantityItems={12}
          />

          <View flexDirection={'row'} pb={1}>
            <Image
              alt="Image OTP"
              w={100}
              h={100}
              borderRadius={'full'}
              source={{
                uri: 'https://th.bing.com/th/id/R.07236489f54f5a6f91ede61a5b805da6?rik=m7AJs7zCdXB2Bg&pid=ImgRaw&r=0',
              }}
            />
            <View ml={3} justifyContent={'center'}>
              <Text variant={'subtitle1'} color={'primary.600'}>
                SevenShop
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
                  Member Sliver
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
              My Purchase
            </Text>
          </View>
          <View flexDirection={'row'}>
            <Text mr={2} variant={'body2'}>
              Purchase history
            </Text>
            <Icon.ChevronRight stroke="black" width={24} height={24} />
          </View>
        </View>

        <View flexDirection={'row'} mt={2} px={7} justifyContent={'space-between'}>
          <View>
            <View flexDirection={'row'} ml={2} mb={1}>
              <View mt={2}>
                <Icon.Box stroke="black" width={24} height={24} />
              </View>
              <View w={5} h={5} borderRadius={'full'} backgroundColor={'primary.600'}>
                <Text fontSize={11} color={'white'} textAlign={'center'}>
                  1
                </Text>
              </View>
            </View>

            <Text variant={'body2'}>To Pay</Text>
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
                <Text fontSize={11} color={'white'}>
                  1
                </Text>
              </View>
            </View>

            <Text variant={'body2'}>To Ship</Text>
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
                <Text fontSize={11} color={'white'}>
                  1
                </Text>
              </View>
            </View>

            <Text variant={'body2'}>To Receive</Text>
          </View>

          <View>
            <View flexDirection={'row'} ml={2} mb={1}>
              <View mt={2}>
                <Icon.Star stroke="black" width={24} height={24} />
              </View>
            </View>

            <Text variant={'body2'}>Rating</Text>
          </View>
        </View>
        <View px={3} mt={5} h={'35%'} justifyContent={'space-between'}>
          <View flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <View flexDirection={'row'}>
              <Icon.Award stroke="black" width={24} height={24} />
              <Text ml={2} variant={'body1'}>
                Membership
              </Text>
            </View>
            <Icon.ChevronRight stroke="black" width={24} height={24} />
          </View>

          <View flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <View flexDirection={'row'}>
              <Icon.Bookmark stroke="black" width={24} height={24} />
              <Text ml={2} variant={'body1'}>
                Recently Viewed
              </Text>
            </View>
            <Icon.ChevronRight stroke="black" width={24} height={24} />
          </View>

          <View flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <View flexDirection={'row'}>
              <Icon.Gift stroke="black" width={24} height={24} />
              <Text ml={2} variant={'body1'}>
                My Voucher
              </Text>
            </View>
            <Icon.ChevronRight stroke="black" width={24} height={24} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
