import React from 'react';
import { View, Text, Image } from 'native-base';
import { TextInput, TouchableOpacity } from 'react-native';
import * as Icon from 'react-native-feather';
import styles from './style';
type Props = object;

const OTPScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://th.bing.com/th/id/OIP.cH80uEpp8kXrYliDjpuk2AHaFh?pid=ImgDet&rs=1',
        }}
      />
      <Text style={styles.title}>OTP Verification</Text>

      <View style={styles.viewFrom}>
        <Text style={styles.txtOTP}>
          We have sent OTP to the phone number. The expiry date is 5 minutes
        </Text>
        <View style={styles.viewUser}>
          <Icon.Mail stroke="black" width={24} height={24} style={{ marginRight: 5 }} />
          <TextInput style={styles.inputuser} placeholder="Enter your OTP..." />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={{ fontSize: 14 }}>Verify</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OTPScreen;
