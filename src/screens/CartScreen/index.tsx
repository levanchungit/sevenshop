import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Pressable, FlatList, Button, Modal, Toast } from 'native-base';
import { useTranslation } from 'react-i18next';
import * as Icon from 'react-native-feather';
import ItemCart from 'components/ItemCart';
import SSHeaderNavigation from 'components/SSHeaderNavigation';
import useGetCarts from 'hook/product/useGetCarts';
import { IData } from 'interfaces/Cart';
import { cartAPI, checkoutAPI } from 'modules';
import { AppNavigationProp } from 'providers/navigation/types';

const Cart = () => {
  const navigation = useNavigation<AppNavigationProp>();
  const { t } = useTranslation();
  const { carts, mutate_carts } = useGetCarts();
  const [showModal, setShowModal] = useState(false);
  // let [quantity, setQuantity] = useState(1);
  // const [selectedSize, setSelectedSize] = useState<string>();

  const onGetInvoice = async () => {
    try {
      const response = await checkoutAPI.getInvoice({ products: carts?.data });

      Toast.show({
        title: response.data.message,
        duration: 3000,
      });
      navigation.navigate('CheckoutScreen', { data: response.data });
    } catch (e: any) {
      Toast.show({
        title: e.response?.data?.message,
        duration: 3000,
      });
    }
  };

  const ChangQuantity = async (
    product_id: string,
    quantity: number,
    size_id: string,
    color_id: string
  ) => {
    try {
      await cartAPI.ChangeQuantity(product_id, quantity, size_id, color_id);
      mutate_carts();
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <View w={'100%'} h={'100%'} flex={1} py={5}>
      <SSHeaderNavigation
        tabHeaderSearchEnabled={false}
        titleHeaderSearchEnabled={true}
        titleHeaderSearch="Your Favorites"
        iconSearchEnabled={true}
        iconOther={false}
        titleHeaderScreen={t('Cart.title')}
        iconRightHeaderScreen={false}
        quantityItems={12}
        iconRightHeaderCart={false}
        quantityHeaderCarts={0}
      />
      <View w={'100%'} h={'100%'} p={3}>
        <View w={'100%'} flexDirection={'row'} justifyItems={'center'}>
          <View w={'95%'} flexDirection={'row'}>
            <Pressable
              justifyContent={'center'}
              alignItems={'center'}
              w={6}
              h={6}
              backgroundColor={'primary.600'}
              borderRadius={20}
            >
              <Icon.Check stroke="#FFFFFF" width={20} height={20} />
            </Pressable>
            <Text ml={3} variant={'body2'}>
              {t('Cart.selectedAll')}
            </Text>
          </View>
          <View w={'5%'}>
            <Icon.Trash2 stroke="#ac1506" width={24} height={24} />
          </View>
        </View>
        <View h={'70%'} mt={1}>
          <FlatList
            keyExtractor={(item, index) => index + ''}
            data={carts?.data}
            renderItem={({ item }: { item: IData }) => (
              <ItemCart
                cart={item}
                setShowModal={setShowModal}
                increaseQuantity={() =>
                  ChangQuantity(item.product_id, item.quantity + 1, item.size._id, item.color._id)
                }
                decreaseQuantity={() =>
                  ChangQuantity(item.product_id, item.quantity - 1, item.size._id, item.color._id)
                }
              ></ItemCart>
            )}
          ></FlatList>
        </View>
        <View flex={1} flexDirection={'row'} w={'100%'} alignItems={'flex-end'}>
          <Text flex={1} fontSize={20} fontWeight={'bold'}>
            {t('Cart.total')}
          </Text>
          <Text color={'primary.600'} textAlign={'right'} variant={'title'}>
            500.000đ
          </Text>
        </View>
        <View width={'100%'}>
          <Button onPress={() => onGetInvoice()} width={'100%'}>
            <Text fontSize={14} color="light.100" fontWeight={'bold'}>
              {t('Cart.buyNow')}
            </Text>
          </Button>
        </View>

        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          {/* <Modal.Content width={'100%'} style={{ marginBottom: 0, marginTop: 'auto' }}>
            <Modal.CloseButton />
            <Modal.Body height="auto" w="full">
              <Flex direction="row" marginBottom="3">
                <Image
                  source={{
                    uri: 'https://th.bing.com/th/id/OIP.oUOPI9UXvoNDMrG-0D9KTgHaJL?pid=ImgDet&rs=1',
                  }}
                  alt="Alternate Text"
                  size="full"
                  w={100}
                  h={100}
                  borderRadius={10}
                />
                <Flex marginLeft="2" direction="column" height="100" justifyContent="space-between">
                  <Box>
                    <Text variant={'button'} color="primary.600">
                      200.000đ
                    </Text>
                    <Text
                      strikeThrough
                      color="gray.500"
                      variant={'caption'}
                      style={{
                        fontVariant: ['lining-nums'],
                      }}
                    >
                      250.000đ
                    </Text>
                  </Box>
                  <Flex
                    direction="row"
                    width="74%"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Text variant={'caption'}>{t('Cart.wareHouse')}: 20</Text>
                    <Flex direction="row" ml={5} justifyItems={'center'} alignItems={'center'}>
                      <Pressable onPress={() => setQuantity(quantity--)}>
                        <Icon.Minus stroke="black" width={18} height={18} />
                      </Pressable>
                      <Box
                        borderWidth="1"
                        borderColor="#C9C9C9"
                        borderRadius="5"
                        marginX={2}
                        w="6"
                        h="6"
                        justifyContent="center"
                        alignItems="center"
                        textAlign={'center'}
                      >
                        <Text textAlign={'center'} fontSize={14} fontWeight={'bold'}>
                          {quantity}
                        </Text>
                      </Box>
                      <Pressable onPress={() => setQuantity(quantity++)}>
                        <Icon.Plus stroke="black" width={18} height={18} />
                      </Pressable>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Flex direction="row">
                <FlatList
                  data={dataColor}
                  scrollEnabled={false}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  numColumns={3}
                  ListHeaderComponent={
                    <Text fontSize="14" fontWeight="bold" mb={2}>
                      {t('Cart.color')}
                    </Text>
                  }
                  renderItem={({ item }) => (
                    <Pressable
                      marginRight="3"
                      marginBottom="3"
                      backgroundColor={item.data}
                      borderWidth="1"
                      borderColor={item.data === 'white' ? '#C9C9C9' : 'transparent'}
                      w={39}
                      h={39}
                      borderRadius="full"
                    />
                  )}
                  keyExtractor={(item) => item.title}
                />

                <FlatList
                  data={dataSize}
                  scrollEnabled={false}
                  numColumns={3}
                  ListHeaderComponent={
                    <Text fontSize="14" fontWeight="bold" mb={2}>
                      {t('Cart.size')}
                    </Text>
                  }
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => (
                    <Pressable
                      onPress={() => setSelectedSize(item.data)}
                      marginRight="3"
                      marginBottom="3"
                      borderWidth="1"
                      backgroundColor={item.data === selectedSize ? 'primary.600' : 'transparent'}
                      borderColor="primary.600"
                      w={39}
                      h={39}
                      borderRadius={[5, 10]}
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Text
                        fontSize={[14]}
                        color={item.data === selectedSize ? 'white' : 'primary.600'}
                        fontWeight="bold"
                      >
                        {item.data}
                      </Text>
                    </Pressable>
                  )}
                  keyExtractor={(item) => item.title}
                />
              </Flex>
              <Pressable
                width="100%"
                height="43"
                borderRadius="6"
                backgroundColor="#AC1506"
                alignItems="center"
                justifyContent="center"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                <Text color="white" fontWeight="bold" fontSize="14">
                  {t('Cart.confirm')}
                </Text>
              </Pressable>
            </Modal.Body>
          </Modal.Content> */}
        </Modal>
      </View>
    </View>
  );
};

export default Cart;
