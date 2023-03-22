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
import useGetProductDetail from 'hook/product/useGetProductDetail';
import { IProduct } from 'interfaces/Product';
import { AppNavigationProp, DetailRouteProp } from 'providers/navigation/types';
import { DATA3, DATA4, DATA2, DATA } from '../../mocks';

type DetailScreenProps = {
  route: DetailRouteProp;
};

const id = '6413204e3182be020da254d4';

const DetailScreen = (props: DetailScreenProps) => {
  // const { name, description, price, image } = props.route.params;
  const navigation = useNavigation<AppNavigationProp>();

  const { product, err_product } = useGetProductDetail(id);
  if (err_product) {
    //lỗi khi không call được api
    console.log('ERROR', err_product);
  }
  if (!product) {
    //xử lý skeleton khi chưa có product
    console.log('CHUA CO PRODUCT');
  }
  console.log('DETAIL', product);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [statusLike, setStatusLike] = useState(false);
  const initialWidth = Dimensions.get('window').width;
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const DescriptionRoute = () => (
    <ScrollView style={{ flex: 1, backgroundColor: 'transparent' }}>
      <Text
        variant="body1"
        numberOfLines={3}
        style={{
          fontVariant: ['lining-nums'],
        }}
      >
        This playful hoodie has an allover Monogram Comics motif in which House signatures become
        cartoon characters in an overlapping collage with vibrant colored details. This joyful piece
        has a kangaroo pocket and a ribbed hem and cuffs, with an inside-out label at the back.
      </Text>
      <Flex direction="row" justifyContent="space-between">
        <Text variant="button">Recommend for you</Text>
        <Pressable>
          <Text variant="button">See all</Text>
        </Pressable>
      </Flex>
      <FlatList
        data={DATA}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({ item }: { item: IProduct }) => (
          <ItemProductFlashSale
            onPress={() => navigation.navigate('Detail', { id_product: '' })}
            data={item}
          />
        )}
      />
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
        iconSearchEnabled={true}
        iconOther={true}
        titleHeaderSearch={''}
        titleHeaderScreen={'Details'}
        iconRightHeaderScreen={true}
        quantityItems={0}
        iconRightHeaderCart={false}
      />

      <Image
        source={{
          uri: 'https://wallpaperaccess.com/full/317501.jpg',
        }}
        alt="Alternate Text"
        size="full"
        alignSelf="center"
        w="100%"
        h="50%"
      />

      <Text
        variant="h3"
        fontWeight="semibold"
        style={{
          fontVariant: ['lining-nums'],
        }}
      >
        Hello
      </Text>
      <Flex direction="row" alignItems="center" justifyContent="flex-start">
        <Text
          variant="title"
          fontWeight="semibold"
          color="red.600"
          marginRight="1.5"
          style={{
            fontVariant: ['lining-nums'],
          }}
        >
          200.000đ
        </Text>
        <Text
          variant="caption"
          strikeThrough
          color="gray.500"
          style={{
            fontVariant: ['lining-nums'],
          }}
        >
          400.000đ
        </Text>
      </Flex>

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

      <Center
        height="auto"
        width="100%"
        borderTopRadius={2}
        flexDirection="row"
        backgroundColor="white"
        paddingTop={3}
        paddingBottom={3}
        justifyContent="space-evenly"
        shadow="9"
      >
        {/* <Pressable
          width={43}
          height={43}
          borderRadius="6"
          alignItems="center"
          backgroundColor="primary.600"
          onPress={() => setStatusLike(!statusLike)}
          justifyContent="center"
        >
          <Icon.Heart width={24} stroke="white" fill={statusLike ? 'white' : 'none'} />
        </Pressable> */}
        <SSButton
          variant={'red'}
          leftIcon={<Icon.Heart width={24} stroke="white" fill={statusLike ? 'white' : 'none'} />}
          onPress={() => setStatusLike(!statusLike)}
        />
        <SSButton
          leftIcon={
            <Icon.ShoppingCart width={24} stroke="#AC1506" fill={statusLike ? 'white' : 'none'} />
          }
          variant={'white'}
          text={'Add to cart'}
          onPress={() => console.log('Add to cart')}
          width="40%"
        />
        <SSButton
          height="full"
          variant={'red'}
          text={'Buy now'}
          onPress={() => console.log('Buy now')}
          width="40%"
        />
      </Center>
      <ModalPopupCart
        price={200000}
        colors={DATA2}
        size={DATA4}
        showModal={showModal}
        setShowModal={setShowModal}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        quantity={quantity}
        setQuantity={setQuantity}
        onPress={() => console.log('Hello')}
      />
    </SafeAreaView>
  );
};

export default DetailScreen;
