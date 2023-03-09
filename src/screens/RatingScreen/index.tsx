import { useState } from 'react';
import { View, Text, FlatList } from 'native-base';
import { Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import ItemRating from 'components/ItemRating';
import SSHeaderNavigation from 'components/SSHeaderNavigation';
import { DATA3, DATA } from 'mocks';

const RatingScreen = () => {
  const initialWidth = Dimensions.get('window').width;

  const Rated = () => (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <FlatList
        data={DATA3}
        renderItem={({ item }) => (
          <ItemRating
            product={DATA[4]}
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

  const NotYetRated = () => <View style={{ flex: 1, backgroundColor: 'blue' }}></View>;

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'first',
      title: 'Not yet rated',
    },
    {
      key: 'second',
      title: 'Rated',
    },
  ]);

  const renderScene = SceneMap({
    first: NotYetRated,
    second: Rated,
  });

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 10,
        backgroundColor: 'white',
      }}
    >
      <SSHeaderNavigation
        tabHeaderSearchEnabled={false}
        titleHeaderSearchEnabled={false}
        iconSearchEnabled={false}
        iconOther={false}
        titleHeaderSearch={''}
        titleHeaderScreen={'My rating'}
        iconRightHeaderScreen={false}
        quantityItems={0}
      />

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
                padding={4}
                variant="body2"
                fontWeight={focused ? 'bold' : 'normal'}
                color={focused ? 'black' : 'gray'}
                borderBottomColor={focused ? 'black' : null}
                borderBottomWidth={focused ? 1 : 0}
              >
                {route.title}
              </Text>
            )}
            pressColor={'transparent'}
            tabStyle={{}}
          />
        )}
        initialLayout={{ width: initialWidth, height: 0 }}
      />
    </SafeAreaView>
  );
};

export default RatingScreen;
