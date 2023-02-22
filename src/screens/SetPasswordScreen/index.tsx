import React from 'react';
import { Text, View, Image } from 'native-base';
import { TextInput, TouchableOpacity } from 'react-native';
import * as Icon from 'react-native-feather';
import styles from './style';
type Props = object;

const SetPassWordScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        shadow={1}
        source={{
          uri: 'https://th.bing.com/th/id/OIP.cH80uEpp8kXrYliDjpuk2AHaFh?pid=ImgDet&rs=1',
        }}
      />
      <Text style={styles.title}>Set Password</Text>

      <View style={styles.viewFrom}>
        <View style={styles.viewUser}>
          <Icon.User stroke="black" width={24} height={24} style={{ marginRight: 5 }} />
          <TextInput
            style={styles.inputuser}
            secureTextEntry={true}
            placeholder="Enter your password..."
          />
          <Icon.EyeOff stroke="black" width={24} height={24} />
        </View>

        <View style={styles.viewPass}>
          <Icon.Lock stroke="black" width={24} height={24} style={{ marginRight: 5 }} />
          <TextInput
            style={styles.inputuser}
            placeholder="Enter confirm your password..."
            secureTextEntry={true}
          />
          <Icon.EyeOff stroke="black" width={24} height={24} />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={{ fontSize: 14 }}>Set</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SetPassWordScreen;
