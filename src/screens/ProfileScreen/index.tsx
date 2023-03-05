import { Text, View } from 'native-base';
import SSHeaderNavigation from 'components/SSHeaderNavigation';

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, paddingTop: 30, paddingHorizontal: 10 }}>
      <SSHeaderNavigation
        tabHeaderSearchEnabled={true}
        titleHeaderSearchEnabled={true}
        titleHeaderSearch="Your Products Favorite"
        iconSearchEnabled={true}
        iconOther={false}
        titleHeaderScreen="Payment Success"
        iconRightHeaderScreen={false}
        quantityItems={12}
      />
      <Text style={{ fontSize: 18, marginTop: 50 }}>Profile Screen</Text>
    </View>
  );
};

export default ProfileScreen;
