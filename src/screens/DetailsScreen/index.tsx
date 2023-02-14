import { useState } from 'react';
import { Text, View, Flex, Pressable, Box } from 'native-base';
import { Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const DetailsScreen = () => {
  const DescriptionRoute = () => <View style={{ flex: 1, backgroundColor: '#ffffff' }} />;
  const ReviewRoute = () => <View style={{ flex: 1, backgroundColor: '#ffffff' }} />;
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

  // const renderTabBar = (props: string) => (

  //   // <TabBar
  //   //   indicatorStyle={{ backgroundColor: 'black' }}
  //   //   style={{ backgroundColor: 'white' }}
  //     // layout={{
  //     //   width: Dimensions.get('window').width,
  //     //   height: 0,
  //     // }}
  //     // position={0}
  //     // jumpTo={function (key: string): void {
  //     //   throw new Error('Function not implemented.');
  //     // }}
  //     // navigationState={{
  //     //   index: 0,
  //     //   routes: [
  //     //     { key: 'first', title: 'Description' },
  //     //     { key: 'second', title: 'Review' },
  //     //   ],
  //     // }}
  //   // />
  // );

  return (
    <View style={{ flex: 1, paddingTop: 12, paddingHorizontal: 10, flexDirection: 'column' }}>
      <Text fontSize="2xl" fontWeight="semibold">
        Product Name
      </Text>
      <Flex direction="row" justifyContent="flex-start">
        <Text fontSize="xl" fontWeight="semibold" color="red.600">
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
              backgroundColor: 'white',
            }}
            renderLabel={({ route, focused }) => (
              <Text
                style={{
                  padding: 10,
                  borderBottomColor: focused ? 'black' : 'green',
                  borderBottomWidth: focused ? 1 : 0,
                }}
              >
                {route.title}
              </Text>
            )}
            inactiveColor={'gray'}
            pressColor={'transparent'}
            tabStyle={{
              width: 'auto',
            }}
            activeColor={'black'}
          />
        )}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
      <Flex direction="row" justifyContent="space-between">
        <Text fontSize="md" fontWeight="bold">
          Recommend for you
        </Text>
        <Text fontSize="md" fontWeight="bold">
          See all
        </Text>
      </Flex>
      <Box shadow="9" borderLeftRadius="5" borderRightRadius="5">
        <Pressable>
          <Text>Hello</Text>
        </Pressable>
      </Box>
    </View>
  );
};

export default DetailsScreen;
