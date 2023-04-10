import { useState } from 'react';
import { Text, FlatList, Flex } from 'native-base';
import { useTranslation } from 'react-i18next';
import { Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import FlatListRating from 'components/FlatListRating';
import ItemNotYetRated from 'components/ItemNotYetRated';
import ModelPopupRating from 'components/ModelPopupRating';
import SSHeaderNavigation from 'components/SSHeaderNavigation';
import useGetNotYetRated from 'hook/ratings/useGetNotYetRated';
import useGetRated from 'hook/ratings/useGetRated';
import { IProduct } from 'interfaces/Product';
import { DATA } from 'mocks';

const RatingScreen = () => {
  const { t } = useTranslation();
  const initialWidth = Dimensions.get('window').width;
  const [showModal, setShowModal] = useState(false);
  const { rated, err_rated, loading_rated } = useGetRated();
  const { not_yet_rated, loading_not_yet_rated } = useGetNotYetRated();

  if (!loading_rated) {
    console.log('Rated: ', rated?.data.results);
  }

  if (!loading_not_yet_rated) {
    console.log('Not yet rated: ', not_yet_rated?.data.results);
  }

  const Rated = () => (
    <Flex backgroundColor="white">
      {err_rated ? (
        <Text variant="body1" alignSelf="center">
          No comment yet
        </Text>
      ) : (
        <FlatListRating ratings={rated?.data} isLoading={loading_rated} />
      )}
    </Flex>
  );

  const NotYetRated = () => (
    <Flex backgroundColor="white">
      {/* <SSButton variant={'red'} text={'Hi'} onPress={() => setShowModal(!showModal)} /> */}
      <FlatList
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        data={DATA}
        numColumns={2}
        renderItem={({ item }: { item: IProduct }) => <ItemNotYetRated product={item} />}
      />
    </Flex>
  );

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'first',
      title: t('MyRating.notRated'),
    },
    {
      key: 'second',
      title: t('MyRating.rated'),
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
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: 'white',
      }}
    >
      <SSHeaderNavigation
        tabHeaderSearchEnabled={false}
        titleHeaderSearchEnabled={false}
        iconSearchEnabled={false}
        iconOther={false}
        titleHeaderSearch={''}
        titleHeaderScreen={t('MyRating.title')}
        iconRightHeaderScreen={false}
        quantityItems={0}
        iconRightHeaderCart={false}
        quantityHeaderCarts={0}
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
      <ModelPopupRating
        showModal={showModal}
        setShowModal={setShowModal}
        rating={4}
        product={DATA[0]}
      />
    </SafeAreaView>
  );
};

export default RatingScreen;
