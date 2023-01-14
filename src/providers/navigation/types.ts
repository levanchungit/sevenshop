import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type AppStackNavigatorParamList = {
  Main: undefined;
  Login: undefined;
  Details: {
    name: string;
    birthYear: string;
  };
};

export type LoginScreenNavigationProp = NativeStackNavigationProp<
  AppStackNavigatorParamList,
  'Main'
>;

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  AppStackNavigatorParamList,
  'Details'
>;

export type DetailsScreenRouteProp = RouteProp<AppStackNavigatorParamList, 'Details'>;

export type BottomTabNavigatorParamList = {
  Home: undefined;
  Favorites: undefined;
  Profile: undefined;
};
