import { useState } from 'react';
import {
  Box,
  Text,
  Flex,
  Pressable,
  Image,
  Center,
  ScrollView,
  Skeleton,
  Toast,
} from 'native-base';
import { Dimensions, LogBox } from 'react-native';
import { useTranslation } from 'react-i18next';
import * as Icon from 'react-native-feather';
import { Rating } from 'react-native-ratings';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import FlatListRating from 'components/FlatListRating';
import FlatListRecommendForYou from 'components/FlatListRecommendForYou';
import ModalPopupCart from 'components/ModalPopupCart';
import SSButton from 'components/SSButton';
import SSHeaderNavigation from 'components/SSHeaderNavigation';
import useGetProductDetail from 'hook/product/useGetProductDetail';
import useGetProducts from 'hook/product/useGetProducts';
import useGetQuantityCart from 'hook/product/useGetQuantityCart';
import { productAPI } from 'modules';
import { DetailRouteProp } from 'providers/navigation/types';
import { formatNumberCurrencyVN } from 'utils/common';

type DetailScreenProps = {
  route: DetailRouteProp;
};

const DetailScreen = (props: DetailScreenProps) => {
  const { t } = useTranslation();
  const { _id } = props.route.params;
  LogBox.ignoreAllLogs();

  //api detail
  const { product, err_product, loading_product, mutate_product } = useGetProductDetail(_id);
  //api cart
  const { quantity, mutate_quantity } = useGetQuantityCart();

  //api products
  const limitProducts = 8;
  const [productPage] = useState(1);
  const { products, error_products, loading_products } = useGetProducts(productPage, limitProducts);

  const [statusLike, setStatusLike] = useState<boolean>(product?.isFavorite);
  const [showModal, setShowModal] = useState(false);
  const [typeModal, setTypeModal] = useState<string>('');
  const initialWidth = Dimensions.get('window').width;

  //api favorite
  const handleUpdateFavorite = async () => {
    try {
      await productAPI.updateFavorite(_id);
      if (product?.isFavorite) {
        Toast.show({
          title: 'Successfully removed from favorite',
          placement: 'top',
        });
        mutate_product();
        setStatusLike(false);
      }
      if (!product?.isFavorite) {
        Toast.show({
          title: 'Successfully add to favorite',
          placement: 'top',
        });
        mutate_product();
        setStatusLike(true);
      }
    } catch (error: any) {
      Toast.show({
        title: 'Cannot update favorite product',
        description: error.response.data.message ? error.response.data.message : error.message,
        placement: 'top',
      });
    }
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
        <Text variant="button">{t('Details.relatedProducts')}</Text>
        <Pressable>
          <Text variant="button">{t('Details.seeAll')}</Text>
        </Pressable>
      </Flex>
      {error_products ? (
        <Text variant="title" alignSelf="center">
          Failed to load
        </Text>
      ) : (
        <FlatListRecommendForYou
          products={products ? products[0].data.results : null}
          isLoading={loading_products}
        />
      )}
    </ScrollView>
  );
  const ReviewRoute = () => (
    <Box backgroundColor="transparent">
      <Rating
        readonly={true}
        startingValue={product ? product?.average_rating : 0}
        imageSize={40}
        style={{ paddingVertical: 12 }}
      />
      {err_product ? (
        <Text variant="title" alignSelf="center">
          Failed to load: {err_product.response.data.message}
        </Text>
      ) : (
        <FlatListRating ratings={product ? product?.ratings : null} isLoading={loading_product} />
      )}
    </Box>
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
    <Box w="100%" h="100%">
      <Box w="100%" safeArea paddingY={2} paddingX={3} backgroundColor="white" flex={1}>
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
          <Box h="90%" position="absolute" top={8} left={3} right={3}>
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
                {!product
                  ? 0
                  : product?.price_sale
                  ? formatNumberCurrencyVN(product.price_sale)
                  : formatNumberCurrencyVN(product.price)}
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
                  {!product ? 0 : formatNumberCurrencyVN(product.price)}
                </Text>
              ) : null}
            </Skeleton.Text>
            <TabView
              navigationState={{
                index,
                routes,
              }}
              swipeEnabled={false}
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
          </Box>
        )}

        <SSHeaderNavigation
          tabHeaderSearchEnabled={false}
          titleHeaderSearchEnabled={false}
          iconSearchEnabled={true}
          iconOther={true}
          titleHeaderSearch={''}
          titleHeaderScreen={t('Details.title')}
          iconRightHeaderScreen={true}
          quantityItems={quantity?.data.quantity}
          iconRightHeaderCart={true}
          quantityHeaderCarts={quantity?.data.quantity}
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
                text={''}
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
                onPress={() => {
                  setShowModal(!showModal);
                  setTypeModal('addCart');
                }}
                width="40%"
              />
              <SSButton
                height="full"
                variant={'red'}
                text={'Buy now'}
                onPress={() => {
                  setShowModal(!showModal);
                  setTypeModal('buyNow');
                }}
                width="40%"
              />
            </Flex>
          </Center>
        )}
      </Box>
      {err_product ? null : !product && !loading_product ? null : loading_product ? null : (
        <ModalPopupCart
          product={product ? product : null}
          showModal={showModal}
          setShowModal={setShowModal}
          functionButton={typeModal}
          mutate={mutate_quantity}
        />
      )}
    </Box>
  );
};

export default DetailScreen;
