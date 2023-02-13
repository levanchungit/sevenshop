import React from 'react';
import { Text, View, Image } from 'native-base';
import { TextInput, TouchableOpacity } from 'react-native';
import * as Icon from 'react-native-feather';
import styles from './style';
type Props = object;

const LoginScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        shadow={1}
        source={{
          uri: 'https://th.bing.com/th/id/OIP.cH80uEpp8kXrYliDjpuk2AHaFh?pid=ImgDet&rs=1',
        }}
      />
      <Text style={styles.title}>Login</Text>

      <View style={styles.viewFrom}>
        <View style={styles.viewUser}>
          <Icon.User stroke="black" width={24} height={24} style={{ marginRight: 5 }} />
          <TextInput style={styles.inputuser} placeholder="Enter your email/phone number" />
        </View>

        <View style={styles.viewPass}>
          <Icon.User stroke="black" width={24} height={24} style={{ marginRight: 5 }} />
          <TextInput style={styles.inputuser} placeholder="Enter your email/phone number" />
        </View>
        <View style={{ width: '80%' }}>
          <Text style={styles.txtFogot}>Forgot password?</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={{ fontSize: 14 }}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.viewBotoom}>
        <Text style={{ fontSize: 14 }}>Or login with</Text>
        <View>
          <Image
            style={{ width: 50, height: 50 }}
            shadow={1}
            source={{
              uri: 'https://imagepng.org/wp-content/uploads/2019/08/google-icon.png',
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
