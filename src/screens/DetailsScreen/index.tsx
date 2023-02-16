import { useState } from 'react';
import { Text, View, Flex, Pressable, Image, Center } from 'native-base';
import { Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const DetailsScreen = () => {
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
    <View style={{ flex: 1, paddingTop: 12, paddingHorizontal: 10, flexDirection: 'column' }}>
      <Flex direction="row" justifyContent={'space-between'}>
        <Pressable>
          <Text>Back</Text>
        </Pressable>
        <Pressable>
          <Text>Cart</Text>
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
        style={{ width: '80%', height: '50%' }}
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
        initialLayout={{ width: Dimensions.get('window').width, height: 0 }}
      />
      <Flex direction="row" justifyContent="space-between">
        <Text fontSize="md" fontWeight="bold">
          Recommend for you
        </Text>
        <Text fontSize="md" fontWeight="bold">
          See all
        </Text>
      </Flex>
      <Center
        height="auto"
        width="100%"
        borderTopRadius="10"
        flexDirection="row"
        borderWidth="1"
        paddingTop="5"
        paddingBottom="5"
        justifyContent="space-evenly"
      >
        <Pressable
          width="43"
          height="43"
          borderRadius="6"
          backgroundColor="#AC1506"
          justifyContent="center"
        ></Pressable>
        <Pressable
          width="40%"
          height="43"
          borderRadius="6"
          borderWidth="1"
          borderColor="#C9C9C9"
          backgroundColor="transparent"
          alignItems="center"
          justifyContent="center"
        >
          <Text color="#AC1506" fontWeight="bold" fontSize="14">
            Buy now
          </Text>
        </Pressable>
        <Pressable
          width="40%"
          height="43"
          borderRadius="6"
          backgroundColor="#AC1506"
          alignItems="center"
          justifyContent="center"
        >
          <Text color="white" fontWeight="bold" fontSize="14">
            Add to cart
          </Text>
        </Pressable>
      </Center>
    </View>
  );
};

export default DetailsScreen;
