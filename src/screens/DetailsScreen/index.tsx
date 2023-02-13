import { useState } from 'react';
import { Text, View, Flex, Pressable, Box } from 'native-base';
import { useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => <View style={{ flex: 1, backgroundColor: '#ff4081' }} />;

const SecondRoute = () => <View style={{ flex: 1, backgroundColor: '#673ab7' }} />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const DetailsScreen = () => {
  const layout = useWindowDimensions();
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
        initialLayout={{ width: layout.width }}
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
