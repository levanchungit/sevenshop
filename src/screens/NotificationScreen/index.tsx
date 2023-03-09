import React from 'react';
import { View, FlatList } from 'native-base';
import SSHeaderNavigation from 'components/SSHeaderNavigation';
import SSItemNotification from 'components/SSItemNotifications';

type Props = object;
type Item = {
  id: string;
  title: string;
  details: string;
  date: string;
};

const data: Item[] = [
  {
    id: '1',
    title: 'Quà cho thành viên mới 👋',
    details:
      '🌈Mã giảm giá 8% tối đa 20.000 VNĐ🔥 - Đơn hàng từ 100.000 VNĐ🎁. Hàng chính hãng 💯% - Giảm sốc đến 50%',
    date: '02-06-2000',
  },
  {
    id: '2',
    title: 'Quà cho thành viên mới 👋',
    details:
      '🌈Mã giảm giá 8% tối đa 20.000 VNĐ🔥 - Đơn hàng từ 100.000 VNĐ🎁. Hàng chính hãng 💯% - Giảm sốc đến 50%',
    date: '02-06-2000',
  },
  {
    id: '3',
    title: 'Quà cho thành viên mới 👋',
    details:
      '🌈Mã giảm giá 8% tối đa 20.000 VNĐ🔥 - Đơn hàng từ 100.000 VNĐ🎁. Hàng chính hãng 💯% - Giảm sốc đến 50%',
    date: '02-06-2000',
  },
  {
    id: '4',
    title: 'Quà cho thành viên mới 👋',
    details:
      '🌈Mã giảm giá 8% tối đa 20.000 VNĐ🔥 - Đơn hàng từ 100.000 VNĐ🎁. Hàng chính hãng 💯% - Giảm sốc đến 50%',
    date: '02-06-2000',
  },
  {
    id: '5',
    title: 'Quà cho thành viên mới 👋',
    details:
      '🌈Mã giảm giá 8% tối đa 20.000 VNĐ🔥 - Đơn hàng từ 100.000 VNĐ🎁. Hàng chính hãng 💯% - Giảm sốc đến 50%',
    date: '02-06-2000',
  },
  {
    id: '6',
    title: 'Quà cho thành viên mới 👋',
    details:
      '🌈Mã giảm giá 8% tối đa 20.000 VNĐ🔥 - Đơn hàng từ 100.000 VNĐ🎁. Hàng chính hãng 💯% - Giảm sốc đến 50%',
    date: '02-06-2000',
  },
];
const NotificationScreen = (props: Props) => {
  const RenderItemNotification = ({ data }: { data: Item }) => {
    return (
      <SSItemNotification
        onPress={() => null}
        title={data.title}
        details={data.details}
        date={data.date}
      />
    );
  };

  return (
    <View pt={8} flex={1} backgroundColor="white">
      <SSHeaderNavigation
        tabHeaderSearchEnabled={true}
        titleHeaderSearchEnabled={true}
        iconSearchEnabled={true}
        iconOther={false}
        titleHeaderSearch={'Notification'}
        titleHeaderScreen={''}
        iconRightHeaderScreen={false}
        quantityItems={0}
      />
      <FlatList
        paddingX={8}
        pb={4}
        mt={3}
        data={data}
        renderItem={({ item }) => <RenderItemNotification data={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default NotificationScreen;
