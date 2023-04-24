import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, FlatList } from 'react-native';
import SSHeaderNavigation from 'components/SSHeaderNavigation';
import SSItemNotification from 'components/SSItemNotifications';
import useGetMe from 'hook/auth/useGetMe';
import useGetNotifications from 'hook/notification/useGetNotifications';

const NotificationScreen = () => {
  const { t } = useTranslation();
  const { me } = useGetMe();
  const { notifications } = useGetNotifications(me?.data.result._id);

  const RenderItemNotification = ({ data }: { data: any }) => {
    return (
      <SSItemNotification
        onPress={() => null}
        title={data.title}
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
        titleHeaderSearch={t('Notification.title')}
        titleHeaderScreen={''}
        iconRightHeaderScreen={false}
        iconRightHeaderCart={false}
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
