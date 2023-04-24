import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Modal, Toast, Box, Text } from 'native-base';
import { useTranslation } from 'react-i18next';
import { ScrollView, View, Pressable, FlatList, Image } from 'react-native';
import * as Icon from 'react-native-feather';
import IconCheck from 'components/IconCheck';
import ItemCart from 'components/ItemCart';
import SSHeaderNavigation from 'components/SSHeaderNavigation';
import useGetCarts from 'hook/product/useGetCarts';
import { IData } from 'interfaces/Cart';
import { ChangeColorSize } from 'interfaces/ChangeColorSIze';
import { IColor } from 'interfaces/Color';
import { IProduct, IStock } from 'interfaces/Product';
import { ISize } from 'interfaces/Size';
import { cartAPI, checkoutAPI, productAPI } from 'modules';
import { AppNavigationProp } from 'providers/navigation/types';
import { formatNumberCurrencyVN } from 'utils/common';

const Cart = () => {
  const navigation = useNavigation<AppNavigationProp>();
  const { t } = useTranslation();
  const { carts, mutate } = useGetCarts();
  const [showModal, setShowModal] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedItem, setSelectedItem] = useState<IData>({} as IData);
  const [productSelected, setProductSelected] = useState<IProduct>({} as IProduct);
  const [total, setTotal] = useState(0);
  const [selectIsCheckAll, setSelectIsCheckAll] = useState(false);
  const [checkedItems, setCheckedItems]: any = useState([]);
  const [itemIsChecked, setItemIsChecked]: any = useState([]);
  const [quantityWareHouses, setQuantityWareHouses] = useState<number>();
  const [quantityModal, setQuantityModal] = useState<number>(0);

  useEffect(() => {
    const newData1 = carts?.data.map((item: IData) => ({ ...item, isChecked: false }));
    setCheckedItems(newData1);
  }, []);

  useEffect(() => {
    setTotal(0);
    const checkedItemsList = checkedItems
      ? checkedItems.filter((item: IData) => item.isChecked === true)
      : [];
    checkedItemsList.map((item: IData) => {
      setTotal((prev) => prev + item.price_sale * item.quantity);
    });
  }, [checkedItems]);

  const newData = carts?.data
    ? itemIsChecked.map(
        (item: { size_id: any; size: { _id: any }; color_id: any; color: { _id: any } }) => {
          item.size_id = item.size._id;
          item.color_id = item.color._id;
          return item;
        }
      )
    : [];

  const onCheckedItem = (index: number) => {
    const newItems = [...checkedItems];
    newItems[index].isChecked = !newItems[index].isChecked;
    setCheckedItems(newItems);
    setItemIsChecked(checkedItems.filter((item: IData) => item.isChecked === true));
  };

  const onSelectedAll = () => {
    setSelectIsCheckAll(!selectIsCheckAll);
    const newData1 = carts?.data.map((item: IData) => ({ ...item, isChecked: !selectIsCheckAll }));
    setCheckedItems(newData1);
    setItemIsChecked(newData1.filter((item: IData) => item.isChecked === true));
  };

  const onGetInvoice = async () => {
    if (itemIsChecked.length > 0) {
      try {
        const response = await checkoutAPI.getInvoice({ products: newData });
        Toast.show({
          title: response.data.message,
          duration: 3000,
        });
        navigation.replace('CheckoutScreen', { data: response.data });
      } catch (e: any) {
        Toast.show({
          title: e.response?.data?.message,
          duration: 3000,
        });
      }
    } else {
      Toast.show({
        title: 'Please select product',
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
      mutate(carts);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const getProductSelected = async (item: IData) => {
    try {
      const product = await productAPI.getProductID(item.product_id);
      setProductSelected(product);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const updateSizeColor = async (data: { idSize?: string; idColor?: string }) => {
    if (data.idSize) setSelectedSize(data.idSize);
    if (data.idColor) setSelectedColor(data.idColor);

    const filterStock = productSelected.stock.filter(
      (stock: IStock) =>
        stock.color_id._id === (data.idColor ? data.idColor : selectedColor) &&
        stock.size_id._id === (data.idSize ? data.idSize : selectedSize)
    );
    setQuantityWareHouses(filterStock[0].quantity);
    // setSelectedQuantity(0);
  };

  const itemChangeColorSize: ChangeColorSize = {
    _size_id: selectedSize,
    _color_id: selectedColor,
    _quantity: quantityModal,
  };

  const onChangeColorSize = async (item: ChangeColorSize) => {
    if (quantityModal > 0) {
      try {
        await cartAPI.updateColorSize(
          item,
          selectedItem.product_id,
          selectedItem.color._id,
          selectedItem.size._id
        );
        setShowModal(false);
        Toast.show({
          title: 'Change color size success!',
          duration: 3000,
        });
      } catch (error: any) {
        console.error(error.message);
      }
    } else {
      // setShowModal(false);
      Toast.show({
        title: 'Please select quantity',
        duration: 3000,
        position: 'revert',
      });
    }
  };

  return (
    <View style={{ width: '100%', height: '100%', flex: 1, paddingVertical: 20 }}>
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
      <View style={{ width: '100%', height: '100%', padding: 12 }}>
        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center' }}>
          <View style={{ width: '95%', flexDirection: 'row' }}>
            <Pressable onPress={() => onSelectedAll()}>
              <IconCheck isChecked={selectIsCheckAll} />
            </Pressable>
            <Text ml={3} variant={'body2'}>
              {t('Cart.selectedAll')}
            </Text>
          </View>
          <View style={{ width: '5%' }}>
            <Icon.Trash2 stroke="#ac1506" width={24} height={24} />
          </View>
        </View>
        <View style={{ height: '85%', marginTop: 1 }}>
          <FlatList
            style={{ marginTop: 12 }}
            keyExtractor={(item, index) => index + ''}
            data={checkedItems ? checkedItems : []}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }: { item: IData; index: number }) => (
              <ItemCart
                cart={item}
                setShowModal={() => {
                  setShowModal(true);
                  setSelectedSize(item.size._id);
                  setSelectedColor(item.color._id);
                  setSelectedItem(item);
                  getProductSelected(item);
                  setQuantityModal(item.quantity);
                }}
                increaseQuantity={() =>
                  ChangQuantity(item.product_id, item.quantity + 1, item.size._id, item.color._id)
                }
                decreaseQuantity={() =>
                  ChangQuantity(item.product_id, item.quantity - 1, item.size._id, item.color._id)
                }
                isChecked={item.isChecked}
                onPressChecked={() => onCheckedItem(index)}
                key={index}
              />
            )}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            width: '100%',
            alignItems: 'flex-end',
            // backgroundColor: 'red',
          }}
        >
          <Text style={{ flex: 1, fontSize: 20, fontWeight: 'bold' }}>{t('Cart.total')}</Text>
          <Text color={'primary.600'} textAlign={'right'} variant={'title'}>
            {formatNumberCurrencyVN(total)}
          </Text>
        </View>
        <View style={{ width: '100%', marginVertical: 12 }}>
          <Button onPress={() => onGetInvoice()} width={'100%'}>
            <Text fontSize={14} color="light.100" fontWeight={'bold'}>
              {t('Cart.buyNow')}
            </Text>
          </Button>
        </View>

        <Modal isOpen={showModal} zIndex={50}>
          <Modal.Content width={'100%'} style={{ marginBottom: 0, marginTop: 'auto' }}>
            <Modal.CloseButton onPress={() => setShowModal(false)} />
            <Modal.Body height="auto" w="full">
              <View style={{ flexDirection: 'row', marginBottom: 3 }}>
                <Image
                  source={{
                    uri: selectedItem.images
                      ? selectedItem.images[0]
                      : 'https://th.bing.com/th/id/OIP.oUOPI9UXvoNDMrG-0D9KTgHaJL?pid=ImgDet&rs=1',
                  }}
                  style={{ width: 100, height: 100, borderRadius: 10, marginRight: 6 }}
                />
                <View
                  style={{
                    marginLeft: 2,
                    flexDirection: 'column',
                    height: 100,
                    justifyContent: 'space-between',
                  }}
                >
                  <Box>
                    <Text variant={'button'} color="primary.600">
                      {formatNumberCurrencyVN(
                        selectedItem.price_sale ? selectedItem.price_sale : 0
                      )}
                    </Text>
                    <Text
                      strikeThrough
                      color="gray.500"
                      variant={'caption'}
                      style={{
                        fontVariant: ['lining-nums'],
                      }}
                    >
                      {formatNumberCurrencyVN(selectedItem.price ? selectedItem.price : 0)}
                    </Text>
                  </Box>
                  <View
                    style={{
                      flexDirection: 'row',
                      width: '70%',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Text
                      variant={'caption'}
                      style={{
                        fontVariant: ['lining-nums'],
                      }}
                    >
                      {t('Cart.wareHouse')}: {quantityWareHouses}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '30%',
                      }}
                    >
                      <Pressable
                        onPress={() => setQuantityModal(quantityModal > 1 ? quantityModal - 1 : 1)}
                      >
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
                          {quantityWareHouses !== 0 ? quantityModal : 0}
                        </Text>
                      </Box>
                      <Pressable
                        onPress={() =>
                          setQuantityModal(quantityWareHouses !== 0 ? quantityModal + 1 : 0)
                        }
                      >
                        <Icon.Plus stroke="black" width={18} height={18} />
                      </Pressable>
                    </View>
                  </View>
                </View>
              </View>
              <ScrollView
                horizontal
                scrollEnabled={false}
                contentContainerStyle={{ justifyContent: 'space-between', width: '100%' }}
              >
                <View style={{ width: '50%' }}>
                  <Text mb={3} variant={'button'}>
                    Color
                  </Text>
                  {productSelected.color_ids ? (
                    productSelected.color_ids.map((color: IColor) => (
                      <Pressable
                        onPress={() => updateSizeColor({ idColor: color._id })}
                        style={{
                          backgroundColor: color.code,
                          marginRight: 3,
                          marginBottom: 3,
                          borderWidth: 5,
                          borderColor: color._id === selectedColor ? '#C9C9C9' : 'transparent',
                          width: 40,
                          height: 40,
                          borderRadius: 50,
                          borderBottomColor: 'gray',
                        }}
                        key={color._id}
                      />
                    ))
                  ) : (
                    <View></View>
                  )}
                </View>

                <View style={{ width: '50%' }}>
                  <Text mb={3} variant={'button'}>
                    Size
                  </Text>
                  {productSelected.size_ids ? (
                    productSelected.size_ids.map((size: ISize) => (
                      <Pressable
                        onPress={() => updateSizeColor({ idSize: size._id })}
                        style={{
                          marginRight: 12,
                          marginBottom: 12,
                          borderWidth: 1,
                          backgroundColor: size._id === selectedSize ? 'red' : 'transparent',
                          borderColor: 'red',
                          width: 39,
                          height: 39,
                          borderRadius: 8,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                        key={size._id}
                      >
                        <Text
                          fontSize={14}
                          color={size._id === selectedSize ? 'white' : 'primary.600'}
                          fontWeight="bold"
                        >
                          {size.size}
                        </Text>
                      </Pressable>
                    ))
                  ) : (
                    <View></View>
                  )}
                </View>
              </ScrollView>
              <Pressable
                style={{
                  width: '100%',
                  height: 43,
                  borderRadius: 6,
                  backgroundColor: '#AC1506',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => {
                  onChangeColorSize(itemChangeColorSize);
                }}
              >
                <Text color="white" fontWeight="bold" fontSize="14">
                  {t('Cart.confirm')}
                </Text>
              </Pressable>
            </Modal.Body>
          </Modal.Content>
        </Modal>
      </View>
    </View>
  );
};

export default Cart;
