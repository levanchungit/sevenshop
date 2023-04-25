import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, FlatList, Pressable, ScrollView, Modal, Input, Toast } from 'native-base';
import * as Icon from 'react-native-feather';
import ItemFavoritesProduct from 'components/ItemFavoritesProduct';
import useGetColors from 'hook/colors/useGetColors';
import useGetCategories from 'hook/product/useGetCategories';
import useGetSearchProducts from 'hook/product/useGetSearchProducts';
import useGetSizes from 'hook/sizes/useGetSizes';
import { ICategory } from 'interfaces/Category';
import { IColor } from 'interfaces/Color';
import { IProduct } from 'interfaces/Product';
import { ISize } from 'interfaces/Size';
import searchAPI from 'modules/searchAPI';
import { AppNavigationProp, ProductRouteProp } from 'providers/navigation/types';

type ProductScreenProps = { route: ProductRouteProp };

const data = [
  { _id: '1', price_min: '0', price_max: '200000' },

  {
    _id: '2',
    price_min: '200000',
    price_max: '400000',
  },
  {
    _id: '3',
    price_min: '400000',
    price_max: '600000',
  },

  {
    _id: '4',
    price_min: '600000',
    price_max: '800000',
  },
];

const ProductScreen = (props: ProductScreenProps) => {
  const { keyword } = props.route.params;
  const navigation = useNavigation<AppNavigationProp>();
  const [showModal, setShowModal] = useState(false);
  const limitProducts = 8;
  const [productPage] = useState(1);
  const { searchproducts } = useGetSearchProducts(productPage, limitProducts, keyword);
  const { categories } = useGetCategories();
  const { sizes } = useGetSizes();
  const { colors } = useGetColors();
  const [selectedcategories, setSelectedcategories]: any = useState([]);
  const [selectedSize, setSelectedSize]: any = useState([]);
  const [selectedColor, setSelectedColor]: any = useState([]);
  const [selectedPrice, setSelectedPice]: any = useState({});

  const [displayData, setDisplayData]: any = useState([]);
  useEffect(() => {
    if (searchproducts) {
      setDisplayData(searchproducts[0]?.data.results);
    }
  }, [searchproducts]);

  useEffect(() => {
    const newDataCategory = categories?.data.results.map((item: any) => ({
      ...item,
      isChecked: false,
    }));
    setSelectedcategories(newDataCategory);

    const newDataSize = sizes?.data.results.map((item: any) => ({ ...item, isChecked: false }));
    setSelectedSize(newDataSize);

    const newDataColorolor = colors?.data.results.map((item: any) => ({
      ...item,
      isChecked: false,
    }));
    setSelectedColor(newDataColorolor);

    const newDataPrice = data.map((item: any) => ({ ...item, isChecked: false }));
    setSelectedPice(newDataPrice);
  }, []);

  const onCheckedItemCategory = (index: number) => {
    const newItems = [...selectedcategories];
    newItems[index].isChecked = !newItems[index].isChecked;
    setSelectedcategories(newItems);
    // setItemIsChecked(checkedItems.filter((item: IData) => item.isChecked === true));
  };

  const onCheckedItemSize = (index: number) => {
    const newItems = [...selectedSize];
    newItems[index].isChecked = !newItems[index].isChecked;
    setSelectedSize(newItems);
  };

  const onCheckedItemColor = (index: number) => {
    const newItems = [...selectedColor];
    newItems[index].isChecked = !newItems[index].isChecked;
    setSelectedColor(newItems);
  };
  const Colorseleted = selectedColor
    ? selectedColor
        .filter((item: any) => item.isChecked === true)
        .map((color: any) => `colors=${color._id}`)
        .join('&')
    : [];
  const categoriesseleted = selectedcategories
    ? selectedcategories
        .filter((item: any) => item.isChecked === true)
        .map((categories: any) => `categories=${categories._id}`)
        .join('&')
    : [];

  const Sizeseleted = selectedSize
    ? selectedSize
        .filter((item: any) => item.isChecked === true)
        .map((size: any) => `sizes=${size._id}`)
        .join('&')
    : [];
  const addSearch = async () => {
    try {
      const response = await searchAPI.getFillterProducts(
        categoriesseleted,
        Sizeseleted,
        Colorseleted,
        selectedPrice.price_min ? selectedPrice.price_min : '',
        selectedPrice.price_max ? selectedPrice.price_max : ''
      );
      setDisplayData(response.data.results);
      Toast.show({
        title: response.data.message,
        duration: 3000,
      });
      navigation.navigate('Product', { keyword });
    } catch (e: any) {
      Toast.show({
        title: e.response?.data?.message,
        duration: 3000,
      });
    }
  };

  return (
    <View flex={1} py={5} px={3} backgroundColor={'white'}>
      <View flexDirection="row">
        <View w="10%" justifyContent={'center'} alignItems={'center'} mt={5}>
          <Icon.ChevronLeft stroke="black" width={24} height={24} />
        </View>
        <Pressable
          flexDirection="row"
          w="90%"
          alignItems="center"
          backgroundColor={'primary.600'}
          px={2}
          mt={5}
          borderRadius={7}
        >
          <Input
            onPressIn={() => navigation.navigate('SearchProduct')}
            autoCapitalize="none"
            fontSize={16}
            fontFamily="heading"
            fontStyle="normal"
            w={{ base: '100%' }}
            variant="unstyled"
            color={'white'}
            placeholderTextColor={'white'}
            placeholder="Search"
            InputRightElement={<Icon.Search stroke="white" width={24} height={24} />}
          />
        </Pressable>
      </View>

      <View
        flexDirection={'row'}
        justifyContent={'space-between'}
        borderRadius={3}
        borderWidth={0}
        w={'100%'}
        mt={2}
        py={1}
      >
        <Pressable
          flexDirection={'row'}
          borderRadius={7}
          p={2}
          justifyContent={'center'}
          backgroundColor={'#D1D1D6'}
          onPress={() => setShowModal(true)}
        >
          <Icon.Filter stroke="black" width={18} height={18} />
          <Text ml={1} variant={'caption'} fontWeight={500} fontFamily={'heading'}>
            Filter
          </Text>
        </Pressable>

        <Pressable
          flexDirection={'row'}
          borderRadius={7}
          p={2}
          justifyContent={'center'}
          alignItems={'center'}
          backgroundColor={'gray.300'}
        >
          <Text variant={'caption'} fontWeight={500} fontFamily={'heading'} textAlign={'center'}>
            Latest
          </Text>
        </Pressable>
        <Pressable
          flexDirection={'row'}
          borderRadius={7}
          p={2}
          justifyContent={'center'}
          alignItems={'center'}
          backgroundColor={'gray.300'}
        >
          <Text variant={'caption'} fontWeight={500} fontFamily={'heading'}>
            Hot Selling
          </Text>
        </Pressable>
        <Pressable
          flexDirection={'row'}
          borderRadius={7}
          p={2}
          justifyContent={'center'}
          alignItems={'center'}
          backgroundColor={'gray.300'}
        >
          <Text variant={'caption'} fontWeight={500} fontFamily={'heading'}>
            Relate
          </Text>
        </Pressable>
        <Pressable
          flexDirection={'row'}
          borderRadius={7}
          px={1}
          alignItems={'center'}
          justifyContent={'space-between'}
          backgroundColor={'gray.300'}
        >
          <Text variant={'caption'} fontWeight={500} fontFamily={'heading'}>
            Price
          </Text>
          <Icon.ChevronDown stroke="black" width={20} height={20} />
        </Pressable>
      </View>

      <View>
        <FlatList
          w={'100%'}
          keyExtractor={(item) => item._id}
          data={displayData}
          renderItem={({ item }: { item: IProduct }) => {
            return (
              // <ItemProductForYou
              //   name={item.name}
              //   image={item.images[0]}
              //   price={item.price_sale}
              //   selled={123}
              //   onPress={() => navigation.navigate('Detail', { _id: item._id })}
              // />
              <ItemFavoritesProduct
                data={item}
                onPress={() => navigation.navigate('Detail', { _id: item._id })}
              ></ItemFavoritesProduct>
            );
          }}
          numColumns={2}
          showsHorizontalScrollIndicator={false}
          columnWrapperStyle={{
            flexGrow: 1,
            justifyContent: 'space-between',
          }}
        />
      </View>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content width={'100%'} style={{ marginBottom: 0, marginTop: 'auto' }}>
          {/* <Modal.CloseButton /> */}

          <Modal.Body height="auto" w="full">
            <View
              flexDirection={'row'}
              justifyContent={'space-between'}
              justifyItems={'center'}
              alignItems={'center'}
            >
              <Icon.ChevronLeft stroke="black" width={24} height={24} />
              <Text variant={'title'}>Filter</Text>
              <Text variant={'caption'}>Reset</Text>
            </View>
            <Text mt={4} variant={'button'}>
              Category
            </Text>
            <View borderBottomWidth={1} borderColor={'gray.300'} py={2} flexDirection={'row'}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {selectedcategories
                  ? selectedcategories.map((category: ICategory, index: number) => {
                      return (
                        <Pressable
                          onPress={() => onCheckedItemCategory(index)}
                          justifyContent="center"
                          mr={3}
                          p={2}
                          alignItems="center"
                          backgroundColor={
                            selectedcategories[index].isChecked ? 'gray.400' : 'white'
                          }
                          borderWidth={1}
                          borderColor="black"
                          borderRadius={8}
                          key={category._id}
                        >
                          <Text variant="button">{category.name}</Text>
                        </Pressable>
                      );
                    })
                  : null}
              </ScrollView>
            </View>
            <Text mt={4} variant={'button'}>
              Size
            </Text>
            <View borderBottomWidth={1} borderColor={'gray.300'} py={2} flexDirection={'row'}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {selectedSize
                  ? selectedSize.map((size: ISize, index: number) => {
                      return (
                        <Pressable
                          onPress={() => onCheckedItemSize(index)}
                          justifyContent="center"
                          w={60}
                          mr={3}
                          p={2}
                          alignItems="center"
                          backgroundColor={selectedSize[index].isChecked ? 'gray.400' : 'white'}
                          borderWidth={1}
                          borderColor="black"
                          borderRadius={8}
                          key={size._id}
                        >
                          <Text variant="button">{size.size}</Text>
                        </Pressable>
                      );
                    })
                  : null}
              </ScrollView>
            </View>
            <Text mt={4} variant={'button'}>
              Color
            </Text>
            <View borderBottomWidth={1} borderColor={'gray.300'} py={2} flexDirection={'row'}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {selectedColor
                  ? selectedColor.map((size: IColor, index: number) => {
                      return (
                        <Pressable
                          onPress={() => onCheckedItemColor(index)}
                          justifyContent="center"
                          mr={3}
                          p={2}
                          alignItems="center"
                          backgroundColor={selectedColor[index].isChecked ? 'gray.400' : 'white'}
                          borderWidth={1}
                          borderColor="black"
                          borderRadius={8}
                          key={size._id}
                        >
                          <Text variant="button">{size.name}</Text>
                        </Pressable>
                      );
                    })
                  : null}
              </ScrollView>
            </View>
            <Text mt={4} variant={'button'}>
              Price
            </Text>
            <View justifyItems={'center'} borderBottomWidth={1} borderColor={'gray.300'} py={2}>
              <View
                flexDirection={'row'}
                justifyContent={'center'}
                px={6}
                alignItems={'center'}
                h={'30%'}
              >
                <View
                  justifyContent="center"
                  mr={3}
                  p={2}
                  h={'60%'}
                  alignItems="center"
                  borderWidth={1}
                  borderColor="black"
                  flexDirection={'row'}
                  borderRadius={8}
                >
                  <Input
                    textAlign={'center'}
                    alignItems={'center'}
                    w={100}
                    variant="button"
                    placeholder="MIN"
                    placeholderTextColor={'black'}
                  />
                </View>
                <Icon.Minus stroke="grey" width={24} height={24} />
                <View
                  justifyContent="center"
                  mr={3}
                  p={2}
                  h={'60%'}
                  alignItems="center"
                  borderWidth={1}
                  borderColor="black"
                  flexDirection={'row'}
                  borderRadius={8}
                >
                  <Input
                    textAlign={'center'}
                    alignItems={'center'}
                    w={100}
                    variant="button"
                    placeholder="MAX"
                    placeholderTextColor={'black'}
                  />
                </View>
              </View>
              <View borderBottomWidth={1} borderColor={'gray.300'} py={2} flexDirection={'row'}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {data.map((item) => (
                    <Pressable
                      onPress={() => setSelectedPice(item)}
                      flexDirection={'row'}
                      mr={3}
                      p={2}
                      alignItems="center"
                      backgroundColor={
                        selectedPrice._id
                          ? item._id === selectedPrice._id
                            ? 'gray.400'
                            : 'white'
                          : 'white'
                      }
                      borderWidth={1}
                      borderColor="black"
                      borderRadius={8}
                      key={item._id}
                    >
                      <Text variant="button">{item.price_min}</Text>
                      <Text variant="button"> - </Text>
                      <Text variant="button">{item.price_max}</Text>
                    </Pressable>
                  ))}
                </ScrollView>
              </View>
            </View>
          </Modal.Body>
          <Modal.Footer>
            <Pressable
              width="100%"
              height="43"
              borderRadius="6"
              backgroundColor="#AC1506"
              alignItems="center"
              justifyContent="center"
              onPress={() => {
                addSearch();
              }}
            >
              <Text color="white" fontWeight="bold" fontSize="14">
                Apply
              </Text>
            </Pressable>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </View>
  );
};

export default ProductScreen;
