import React from 'react';
import { View, Text, Image } from 'native-base';
import { TextInput, TouchableOpacity } from 'react-native';
import * as Icon from 'react-native-feather';
import styles from './style';
type Props = object;

const RegisterScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://th.bing.com/th/id/OIP.cH80uEpp8kXrYliDjpuk2AHaFh?pid=ImgDet&rs=1',
        }}
      />
      <Text style={styles.title}>Register</Text>

      <View style={styles.viewFrom}>
        <View style={styles.viewUser}>
          <Icon.Phone stroke="black" width={24} height={24} style={{ marginRight: 5 }} />
          <TextInput style={styles.inputuser} placeholder="Enter your email/phone number" />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={{ fontSize: 14 }}>Register</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 14, marginTop: 10 }}>Or login with</Text>
        <View style={styles.viewimage}>
          <Image
            style={{ width: 40, height: 40 }}
            source={{
              uri: 'https://storage.googleapis.com/nexzinc/2019/06/Facebook-Icon-3-600x600.png',
            }}
          />
          <Image
            style={{ width: 40, height: 40 }}
            source={{
              uri: 'https://imagepng.org/wp-content/uploads/2019/08/google-icon.png',
            }}
          />
        </View>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <Text style={{ fontSize: 14 }}>You had an account?</Text>
          <Text style={{ fontSize: 14, color: 'red' }}>Login</Text>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;
