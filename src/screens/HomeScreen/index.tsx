import React from 'react';
import BottomTabs from 'providers/navigation/Tabs';
import { MainRouteProp } from 'providers/navigation/types';

type MainProps = {
  route: MainRouteProp;
};

const HomeScreen = ({ route }: MainProps) => {
  return <BottomTabs quantity={3} />;
};

export default HomeScreen;
