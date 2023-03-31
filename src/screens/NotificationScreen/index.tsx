import React from 'react';
import { View, FlatList } from 'react-native';
import SSHeaderNavigation from 'components/SSHeaderNavigation';
import SSItemNotification from 'components/SSItemNotifications';
import useGetMe from 'hook/auth/useGetMe';
import useGetNotifications from 'hook/notification/useGetNotifications';
import useGetCarts from 'hook/product/useGetCarts';

const NotificationScreen = () => {
  const { me } = useGetMe();
  const { notifications } = useGetNotifications(me?.data.result._id);
  const { carts } = useGetCarts();

  const RenderItemNotification = ({ data }: { data: any }) => {
    return (
      <SSItemNotification
        onPress={() => null}
        title={data.title + '👋'}
        details={data.body}
        date={data.modify[0].date}
      />
    );
  };

  return (
    <View style={{ paddingTop: 32, flex: 1, backgroundColor: 'white' }}>
      <SSHeaderNavigation
        tabHeaderSearchEnabled={true}
        titleHeaderSearchEnabled={true}
        iconSearchEnabled={true}
        iconOther={false}
        titleHeaderSearch={'Notification'}
        titleHeaderScreen={''}
        iconRightHeaderScreen={false}
        quantityItems={carts?.data.length}
        iconRightHeaderCart={false}
        quantityHeaderCarts={3}
      />
      {notifications?.data.results ? (
        <FlatList
          style={{ paddingHorizontal: 24, paddingBottom: 12 }}
          data={notifications?.data.results}
          renderItem={({ item }) => <RenderItemNotification data={item} />}
          keyExtractor={(item, index) => index + ''}
        />
      ) : (
        <View>
          <SSItemNotification title={''} details={''} date={''} onPress={() => null} />
          <SSItemNotification title={''} details={''} date={''} onPress={() => null} />
          <SSItemNotification title={''} details={''} date={''} onPress={() => null} />
          <SSItemNotification title={''} details={''} date={''} onPress={() => null} />
        </View>
      )}
    </View>
  );
};

export default NotificationScreen;
