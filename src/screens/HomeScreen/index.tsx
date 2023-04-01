import React from 'react';
// import useGetNotifications from 'hook/notification/useGetNotifications';
import BottomTabs from 'providers/navigation/Tabs';
import { MainRouteProp } from 'providers/navigation/types';

type MainProps = {
  route: MainRouteProp;
};

const HomeScreen = ({ route }: MainProps) => {
  // const { id_user } = route.params;
  // console.log('id_user', id_user);
  // const { notifications } = useGetNotifications(id_user);
  // console.log('notification', notifications);
  return <BottomTabs quantity={3} />;
};

export default HomeScreen;
