import { useState } from 'react';
import { Text, View, Flex, Pressable, Image, Center, Modal, Box, FlatList } from 'native-base';
import { Dimensions } from 'react-native';
import * as Icon from 'react-native-feather';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const DetailsScreen = () => {
  const data = [
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
  // const data3 = [
  //   {
  //     title: 'Effortless Shirt',
  //     data: 'Effortless Shirt',
  //   },
  //   {
  //     title: 'Intuitive Shirt',
  //     data: 'Intuitive Shirt',
  //   },
  //   {
  //     title: 'Pro Series X Shirt',
  //     data: 'Pro Series X Shirt',
  //   },
  //   {
  //     title: 'SuperB Shirt',
  //     data: 'SuperB Shirt',
  //   },
  //   {
  //     title: 'Shirt Plus',
  //     data: 'Shirt Plus',
  //   },
  //   {
  //     title: 'Fusion Shirt',
  //     data: 'Fusion Shirt',
  //   },
  // ];
  // const [selectedColor, setSelectedColor] = useState<string>();
  const [selectedSize, setSelectedSize] = useState<string>();
  const [statusLike, setStatusLike] = useState(false);
  const initialWidth = Dimensions.get('window').width;
  let [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const DescriptionRoute = () => (
    <View style={{ flex: 1, backgroundColor: 'transparent' }}>
      <Text style={{ fontSize: 18 }}>
        This playful hoodie has an allover Monogram Comics motif in which House signatures become
        cartoon characters in an overlapping collage with vibrant colored details. This joyful piece
        has a kangaroo pocket and a ribbed hem and cuffs, with an inside-out label at the back.
      </Text>
    </View>
  );
  const ReviewRoute = () => <View style={{ flex: 1, backgroundColor: 'transparent' }} />;
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
        <Pressable>
          <Icon.ChevronLeft stroke="black" />
        </Pressable>
        <Pressable>
          <Icon.ShoppingCart stroke="black" />
        </Pressable>
      </Flex>

      <Image
        source={{
          uri: 'https://wallpaperaccess.com/full/317501.jpg',
        }}
        alt="Alternate Text"
        size="full"
        shadow="9"
        alignSelf="center"
        style={{ width: '90%', height: '50%' }}
      />

      <Text fontSize="24" fontWeight="semibold">
        Product Name
      </Text>
      <Flex direction="row" alignItems="center" justifyContent="flex-start">
        <Text fontSize="20" fontWeight="semibold" color="red.600" marginRight="1.5">
          100.000đ
        </Text>
        <Text fontSize="md" strikeThrough color="gray.500">
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
                style={{
                  padding: 10,
                  fontSize: 14,
                  color: focused ? 'black' : 'gray',
                  borderBottomColor: focused ? 'black' : 'green',
                  borderBottomWidth: focused ? 1 : 0,
                }}
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

      <Flex direction="row" justifyContent="space-between">
        <Text fontSize="md" fontWeight="bold">
          Recommend for you
        </Text>
        <Pressable>
          <Text fontSize="md" fontWeight="bold">
            See all
          </Text>
        </Pressable>
      </Flex>
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

      <Center
        height="auto"
        width="100%"
        borderTopRadius="10"
        flexDirection="row"
        backgroundColor="white"
        paddingTop="5"
        paddingBottom="5"
        justifyContent="space-evenly"
        shadow="9"
      >
        <Pressable
          width="43"
          height="43"
          borderRadius="6"
          alignItems="center"
          backgroundColor="primary.600"
          onPress={() => setStatusLike(!statusLike)}
          justifyContent="center"
        >
          <Icon.Heart stroke="white" fill={statusLike ? 'white' : 'none'} />
        </Pressable>
        <Pressable
          flexDirection="row"
          width="40%"
          height="43"
          borderRadius="6"
          borderWidth="1"
          borderColor="#C9C9C9"
          backgroundColor="transparent"
          alignItems="center"
          justifyContent="center"
          onPress={() => setShowModal(true)}
        >
          <Icon.ShoppingCart stroke="#AC1506" />
          <Text color="primary.600" fontWeight="bold" marginLeft="3" fontSize="14">
            Add to cart
          </Text>
        </Pressable>
        <Pressable
          width="40%"
          height="43"
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

          <Modal.Body style={{ height: 'auto' }}>
            <Flex direction="row" marginBottom="3">
              <Image
                source={{
                  uri: 'https://wallpaperaccess.com/full/317501.jpg',
                }}
                alt="Alternate Text"
                size="full"
                style={{ width: 100, height: 100 }}
              />
              <Flex marginLeft="2" direction="column" height="100" justifyContent="space-between">
                <Box>
                  <Text fontSize="22" fontWeight="semibold" color="red.600">
                    100.000đ
                  </Text>
                  <Text fontSize="md" strikeThrough color="gray.500">
                    400.000đ
                  </Text>
                </Box>
                <Flex
                  direction="row"
                  width="77%"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Text fontSize="md">Warehouse: 20</Text>
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
                data={data}
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
                    w="41"
                    h="41"
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
                    w="41"
                    h="41"
                    borderRadius="10"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Text
                      fontSize="12"
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
