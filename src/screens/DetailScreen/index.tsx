import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Text,
  View,
  Flex,
  Pressable,
  Image,
  Center,
  FlatList,
  ScrollView,
  Skeleton,
  // useToast,
} from 'native-base';
import { Dimensions } from 'react-native';
import * as Icon from 'react-native-feather';
import { Rating } from 'react-native-ratings';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import ItemProductFlashSale from 'components/ItemProductFlashSale';
import ItemRating from 'components/ItemRating';
import ModalPopupCart from 'components/ModalPopupCart';
import SSButton from 'components/SSButton';
import SSHeaderNavigation from 'components/SSHeaderNavigation';
import useGetCarts from 'hook/product/useGetCarts';
import useGetProductDetail from 'hook/product/useGetProductDetail';
import useGetProducts from 'hook/product/useGetProducts';
import { IProduct } from 'interfaces/Product';
import { AppNavigationProp, DetailRouteProp } from 'providers/navigation/types';
import { DATA3 } from '../../mocks';

type DetailScreenProps = {
  route: DetailRouteProp;
};

const DetailScreen = (props: DetailScreenProps) => {
  const { _id } = props.route.params;
  // const _id = '641a7c581358f1dd563383e9';
  //api detail
  const { product, err_product, loading_product } = useGetProductDetail(_id);
  //api cart
  const { carts } = useGetCarts();
  //api products
  const limit = 8;
  const [page] = useState(1);
  const { products, error } = useGetProducts(page, limit);

  const navigation = useNavigation<AppNavigationProp>();
  const [statusLike, setStatusLike] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const initialWidth = Dimensions.get('window').width;

  const numberWithCommas = (num?: number) => {
    return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const DescriptionRoute = () => (
    <ScrollView
      flex={1}
      backgroundColor="transparent"
      flexDirection="column"
      contentContainerStyle={{
        justifyContent: 'space-evenly',
      }}
    >
      <Skeleton.Text lines={3} isLoaded={!loading_product}>
        <Text
          variant="body1"
          numberOfLines={3}
          style={{
            fontVariant: ['lining-nums'],
          }}
        >
          {product?.description}
        </Text>
      </Skeleton.Text>

      <Flex direction="row" justifyContent="space-between" mt={3}>
        <Text variant="button">Recommend for you</Text>
        <Pressable>
          <Text variant="button">See all</Text>
        </Pressable>
      </Flex>
      {error ? (
        <Text variant="body1">Failed to load</Text>
      ) : !products ? null : (
        <FlatList
          data={products ? products[0].data.results : null}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({ item }: { item: IProduct }) => (
            <ItemProductFlashSale
              onPress={() => navigation.navigate('Detail', { _id: item._id })}
              data={item}
            />
          )}
          keyExtractor={(item) => item._id}
        />
      )}
    </ScrollView>
  );
  const ReviewRoute = () => (
    <View style={{ flex: 1, backgroundColor: 'transparent' }}>
      <Rating readonly={true} imageSize={24} style={{ paddingVertical: 12, width: '30%' }} />
      <FlatList
        data={DATA3}
        renderItem={({ item }) => (
          <ItemRating
            name={item.name}
            time={item.time}
            comment={item.comment}
            rating={item.rating}
          />
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'first',
      title: 'Description',
    },
    {
      key: 'second',
      title: 'Review',
    },
  ]);

  const renderScene = SceneMap({
    first: DescriptionRoute,
    second: ReviewRoute,
  });

  return (
    <View w="100%" h="100%">
      <SafeAreaView
        style={{
          width: '100%',
          flex: 1,
          paddingVertical: 8,
          paddingHorizontal: 12,
          backgroundColor: 'white',
        }}
      >
        {err_product ? (
          <Center
            h="100%"
            position="absolute"
            top={8}
            left={3}
            right={3}
            backgroundColor={'transparent'}
          >
            <Text variant="title">Error</Text>
          </Center>
        ) : !product && !loading_product ? (
          <Center
            h="100%"
            position="absolute"
            top={8}
            left={3}
            right={3}
            backgroundColor={'transparent'}
          >
            <Text variant="title">Cannot find product</Text>
          </Center>
        ) : (
          <View h="90%" position="absolute" top={8} left={3} right={3}>
            <Skeleton w="100%" h="50%" mb="3" isLoaded={!loading_product}>
              <Image
                source={
                  product?.images[0] === undefined
                    ? require('../../assets/images/logo_sevenshop_image_default.png')
                    : { uri: product?.images[0] }
                }
                alt="Invalid product image"
                size="full"
                alignSelf="center"
                w="100%"
                h="50%"
              />
            </Skeleton>

            <Skeleton mb="3" w="70%" borderRadius="full" isLoaded={!loading_product}>
              <Text
                variant="h3"
                fontWeight="semibold"
                style={{
                  fontVariant: ['lining-nums'],
                }}
              >
                {product?.name}
              </Text>
            </Skeleton>

            <Skeleton.Text lines={1} w="30%" borderRadius="full" mb={3} isLoaded={!loading_product}>
              <Text
                variant="title"
                fontWeight="semibold"
                color="red.600"
                marginRight="1.5"
                style={{
                  fontVariant: ['lining-nums'],
                }}
              >
                {product?.price_sale
                  ? numberWithCommas(product?.price_sale)
                  : numberWithCommas(product?.price)}
                vnđ
              </Text>

              {product?.price_sale ? (
                <Text
                  variant="caption"
                  strikeThrough
                  color="gray.500"
                  style={{
                    fontVariant: ['lining-nums'],
                  }}
                >
                  {numberWithCommas(product?.price)}vnđ
                </Text>
              ) : null}
            </Skeleton.Text>
            <TabView
              navigationState={{
                index,
                routes,
              }}
              renderScene={renderScene}
              onIndexChange={setIndex}
              renderTabBar={(prop) => (
                <TabBar
                  {...prop}
                  indicatorStyle={{ backgroundColor: 'transparent' }}
                  style={{
                    backgroundColor: 'transparent',
                  }}
                  renderLabel={({ route, focused }) => (
                    <Text
                      padding={[2, 4, 8]}
                      variant="button"
                      color={focused ? 'black' : '#C9C9C9'}
                      borderBottomColor={focused ? 'black' : 'green'}
                      borderBottomWidth={focused ? 1 : 0}
                    >
                      {route.title}
                    </Text>
                  )}
                  pressColor={'transparent'}
                  tabStyle={{
                    width: 'auto',
                  }}
                />
              )}
              initialLayout={{ width: initialWidth, height: 0 }}
            />
          </View>
        )}

        <SSHeaderNavigation
          tabHeaderSearchEnabled={false}
          titleHeaderSearchEnabled={false}
          iconSearchEnabled={true}
          iconOther={true}
          titleHeaderSearch={''}
          titleHeaderScreen={'Details'}
          iconRightHeaderScreen={true}
          quantityItems={carts?.data.length}
          iconRightHeaderCart={true}
          quantityHeaderCarts={carts?.data.length}
        />
        {err_product ? null : !product && !loading_product ? null : loading_product ? null : (
          <Center
            w={initialWidth}
            h="10%"
            borderTopRadius={10}
            backgroundColor="white"
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            borderColor="#C9C9C9"
            borderWidth={1}
          >
            <Flex direction="row" w="100%" py={3} justifyContent="space-evenly">
              <SSButton
                variant={'red'}
                leftIcon={
                  <Icon.Heart width={24} stroke="white" fill={statusLike ? 'white' : 'none'} />
                }
                onPress={() => setStatusLike(!statusLike)}
              />
              <SSButton
                leftIcon={
                  <Icon.ShoppingCart
                    width={24}
                    stroke="#AC1506"
                    fill={statusLike ? 'white' : 'none'}
                  />
                }
                variant={'white'}
                text={'Add to cart'}
                onPress={() => setShowModal(!showModal)}
                width="40%"
              />
              <SSButton
                height="full"
                variant={'red'}
                text={'Buy now'}
                onPress={() => setShowModal(!showModal)}
                width="40%"
              />
            </Flex>
          </Center>
        )}
      </SafeAreaView>
      {err_product ? null : !product && !loading_product ? null : loading_product ? null : (
        <ModalPopupCart product={product} showModal={showModal} setShowModal={setShowModal} />
      )}
    </View>
  );
};

export default DetailScreen;
