import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Text,
  View,
  Flex,
  Pressable,
  Image,
  Center,
  Modal,
  Box,
  FlatList,
  ScrollView,
} from 'native-base';
import { Dimensions } from 'react-native';
import * as Icon from 'react-native-feather';
import { Rating } from 'react-native-ratings';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { AppNavigationProp } from 'providers/navigation/types';

const DetailsScreen = (data: any, onBack: any) => {
  const { name, description, price, image } = data.route.params;
  const navigation = useNavigation<AppNavigationProp>();

  const dataColor = [
    {
      title: 'Cyan',
      data: 'cyan.500',
    },
    {
      title: 'Yellow',
      data: 'yellow.100',
    },
    {
      title: 'Violet',
      data: 'violet.200',
    },
    {
      title: 'red',
      data: 'red.200',
    },
    {
      title: 'blue',
      data: 'blue.200',
    },
    {
      title: 'white',
      data: 'white',
    },
    {
      title: 'green',
      data: 'green.300',
    },
    {
      title: 'black',
      data: 'black',
    },
  ];

  const data2 = [
    {
      title: 'Size S',
      data: 'S',
    },
    {
      title: 'Size M',
      data: 'M',
    },
    {
      title: 'Size L',
      data: 'L',
    },
    {
      title: 'Size XL',
      data: 'XL',
    },
    {
      title: 'Size XXL',
      data: 'XXL',
    },
    {
      title: 'Size XXXL',
      data: 'XXXL',
    },
  ];

  const data4 = [
    {
      name: 'Lê Văn Chung',
      rating: '5',
      comment:
        'Dùng oke lắm luôn mọi người ạ. Shop giao hàng nhanh, đóng gói cẩn thận.Tư vấn siu nhiệt tình luôn. Cho shop 5 sao',
      time: '2015-02-01 9:00PM',
    },
    {
      name: 'Trần Trọng Đăng Khoa',
      rating: '5',
      comment: 'Very good product',
      time: '2015-02-01 9:00PM',
    },
  ];
  const [selectedSize, setSelectedSize] = useState<string>();
  const [statusLike, setStatusLike] = useState(false);
  const initialWidth = Dimensions.get('window').width;
  let [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const DescriptionRoute = () => (
    <View style={{ flex: 1, backgroundColor: 'transparent' }}>
      <ScrollView>
        <Text fontSize={[12, 16, 20]}>{description}</Text>
        <Flex direction="row" justifyContent="space-between">
          <Text fontSize={[12, 16, 20]} fontWeight="bold">
            Recommend for you
          </Text>
          <Pressable>
            <Text fontSize={[12, 16, 20]} fontWeight="bold">
              See all
            </Text>
          </Pressable>
        </Flex>
      </ScrollView>

      {/* <FlatList
        style={{ borderWidth: 1, height: 100 }}
        data={data3}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Pressable w="100" h="100">
            <Image
              source={{
                uri: 'https://wallpaperaccess.com/full/317501.jpg',
              }}
              alt="Alternate Text"
              size="full"
              style={{ width: 100, height: 100 }}
            />
            <Text>{item.title}</Text>
          </Pressable>
        )}
        keyExtractor={(item) => item.title}
      /> */}
    </View>
  );
  const ReviewRoute = () => (
    <View style={{ flex: 1, backgroundColor: 'transparent' }}>
      <Rating readonly={true} imageSize={15} style={{ paddingVertical: 5, width: '30%' }} />
      <FlatList
        data={data4}
        renderItem={({ item }) => (
          <Box paddingY="5" w="100%" borderTopWidth="1" borderTopColor="#C9C9C9">
            <Flex direction="row">
              <Image
                source={{
                  uri: 'https://wallpaperaccess.com/full/317501.jpg',
                }}
                alt="Alternate Text"
                size="full"
                shadow="9"
                alignSelf="flex-start"
                borderRadius="full"
                w={[10, 50, 70]}
                h={[10, 50, 70]}
                margin={[2, 10]}
              />
              <Flex direction="column" w="80%">
                <Flex direction="row" justifyContent="space-between">
                  <Text fontSize={[12, 20, 24]} fontWeight="bold">
                    {item.name}
                  </Text>
                  <Text fontSize={[10, 16, 24]}>{item.time}</Text>
                </Flex>
                <Rating
                  imageSize={15}
                  readonly={true}
                  style={{
                    paddingVertical: 10,
                    width: '30%',
                    alignItems: 'flex-start',
                  }}
                />
                <Text fontSize={[12, 16, 24]} width="80%">
                  {item.comment}
                </Text>
              </Flex>
            </Flex>
          </Box>
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
    <View
      style={{
        flex: 1,
        paddingTop: 12,
        paddingHorizontal: 10,
        flexDirection: 'column',
        backgroundColor: 'white',
      }}
    >
      <Flex direction="row" justifyContent={'space-between'}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon.ChevronLeft stroke="black" />
        </Pressable>
        <Pressable>
          <Icon.ShoppingCart stroke="black" />
        </Pressable>
      </Flex>

      <Image
        source={{
          uri: image,
        }}
        alt="Alternate Text"
        size="full"
        shadow="9"
        alignSelf="center"
        w="90%"
        h="50%"
      />

      <Text fontSize={[18, 24, 26]} fontWeight="semibold">
        {name}
      </Text>
      <Flex direction="row" alignItems="center" justifyContent="flex-start">
        <Text fontSize={[16, 20, 24]} fontWeight="semibold" color="red.600" marginRight="1.5">
          {price}đ
        </Text>
        <Text fontSize={[12, 16, 20]} strikeThrough color="gray.500">
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
                fontSize={[10, 16, 20]}
                color={focused ? 'black' : 'gray'}
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
        borderTopRadius={[5, 10]}
        flexDirection="row"
        backgroundColor="white"
        paddingTop="5"
        paddingBottom="5"
        justifyContent="space-evenly"
        shadow="9"
      >
        <Pressable
          width={[8, 43, 50]}
          height={[8, 43, 50]}
          borderRadius="6"
          alignItems="center"
          backgroundColor="primary.600"
          onPress={() => setStatusLike(!statusLike)}
          justifyContent="center"
        >
          <Icon.Heart width="60%" stroke="white" fill={statusLike ? 'white' : 'none'} />
        </Pressable>
        <Pressable
          flexDirection="row"
          width="40%"
          height={[8, 43, 50]}
          borderRadius="6"
          borderWidth="1"
          borderColor="#C9C9C9"
          backgroundColor="transparent"
          alignItems="center"
          justifyContent="center"
          onPress={() => setShowModal(true)}
        >
          <Icon.ShoppingCart width="13%" stroke="#AC1506" />
          <Text color="primary.600" fontWeight="bold" marginLeft="3" fontSize="14">
            Add to cart
          </Text>
        </Pressable>
        <Pressable
          width="40%"
          height={[8, 43, 50]}
          borderRadius="6"
          backgroundColor="primary.600"
          alignItems="center"
          justifyContent="center"
          onPress={() => setShowModal(true)}
        >
          <Text color="white" fontWeight="bold" fontSize="14">
            Buy now
          </Text>
        </Pressable>
      </Center>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content
          maxWidth={initialWidth}
          style={{ marginBottom: 0, marginTop: 'auto', marginHorizontal: 0 }}
        >
          <Modal.CloseButton />

          <Modal.Body height="auto" w="full">
            <Flex direction="row" marginBottom="3">
              <Image
                source={{
                  uri: image,
                }}
                alt="Alternate Text"
                size="full"
                w={[60, 100, 120]}
                h={[60, 100, 120]}
              />
              <Flex marginLeft="2" direction="column" height="100" justifyContent="space-between">
                <Box>
                  <Text fontSize={[12, 22, 24]} fontWeight="semibold" color="red.600">
                    {price}đ
                  </Text>
                  <Text fontSize={[10, 16, 20]} strikeThrough color="gray.500">
                    400.000đ
                  </Text>
                </Box>
                <Flex
                  direction="row"
                  width="77%"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Text fontSize={[10, 16, 20]}>Warehouse: 20</Text>
                  <Flex direction="row" justifyContent="center" alignItems="center">
                    <Pressable onPress={() => setQuantity(quantity--)}>
                      <Icon.Minus stroke="black" />
                    </Pressable>
                    <Box
                      borderWidth="1"
                      borderColor="#C9C9C9"
                      borderRadius="10"
                      marginX="5"
                      w="10"
                      h="10"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Text>{quantity}</Text>
                    </Box>
                    <Pressable onPress={() => setQuantity(quantity++)}>
                      <Icon.Plus stroke="black" />
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
                  <Text fontSize="14" fontWeight="bold">
                    Color
                  </Text>
                }
                renderItem={({ item }) => (
                  <Pressable
                    marginRight="3"
                    marginBottom="3"
                    backgroundColor={item.data}
                    borderWidth="1"
                    borderColor={item.data === 'white' ? '#C9C9C9' : 'transparent'}
                    w={[7, 41, 51]}
                    h={[7, 41, 51]}
                    borderRadius="full"
                  />
                )}
                keyExtractor={(item) => item.title}
              />

              <FlatList
                data={data2}
                scrollEnabled={false}
                numColumns={3}
                ListHeaderComponent={
                  <Text fontSize="14" fontWeight="bold">
                    Size
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
                    w={[7, 41, 51]}
                    h={[7, 41, 51]}
                    borderRadius={[5, 10]}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Text
                      fontSize={[8, 12]}
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
                setShowModal(false);
              }}
            >
              <Text color="white" fontWeight="bold" fontSize="14">
                Confirm
              </Text>
            </Pressable>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </View>
  );
};

export default DetailsScreen;
