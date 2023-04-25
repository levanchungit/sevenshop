import { useState } from 'react';
import { Text, Flex } from 'native-base';
import { useTranslation } from 'react-i18next';
import { Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import FlatListNotYetRated from 'components/FlatListNotYetRated';
import FlatListRated from 'components/FlatListRated';
import SSHeaderNavigation from 'components/SSHeaderNavigation';
import useGetNotYetRated from 'hook/ratings/useGetNotYetRated';
import useGetRated from 'hook/ratings/useGetRated';

const RatingScreen = () => {
  const { t } = useTranslation();
  const initialWidth = Dimensions.get('window').width;
  const { rated, err_rated, loading_rated } = useGetRated();
  const { not_yet_rated, err_not_yet_rated, loading_not_yet_rated, mutate_not_yet_rated } =
    useGetNotYetRated();

  const Rated = () => (
    <Flex backgroundColor="white">
      {err_rated ? (
        <Text variant="body1" alignSelf="center">
          Error
        </Text>
      ) : (
        <FlatListRated rated={rated?.data.results} isLoading={loading_rated} />
      )}
    </Flex>
  );

  const NotYetRated = () => (
    <Flex backgroundColor="white">
      {err_not_yet_rated ? (
        <Text variant="body1" alignSelf="center">
          Error
        </Text>
      ) : (
        <FlatListNotYetRated
          ratings={not_yet_rated?.data.results}
          isLoading={loading_not_yet_rated}
          mutate={mutate_not_yet_rated}
        />
      )}
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
        iconRightHeaderCart={false}
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
                variant="body1"
                color={focused ? 'black' : '#C9C9C9'}
                borderBottomColor={focused ? 'black' : 'green'}
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
