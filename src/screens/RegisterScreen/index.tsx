import React from 'react';
import { View, Image, Text } from 'react-native';
import Button from '../../components/Button';
import TextInputGlobal from '../../components/TextInput';
import styles from './style';
type Props = object;

const Register = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerLogo}>
        <Image source={require('../../../assets/Logo7S.png')} />
      </View>
      <View style={styles.coverForm}>
        <Text style={styles.textLogin}>Register</Text>
        <View style={styles.coverTextInput}>
          <TextInputGlobal
            style={styles.textIpnut}
            placeholder="Enter your phone number or email"
          />

          <View>
            <Button style={{ fontWeightL: 'bold' }} onPress={() => alert('124')} title="Register" />
          </View>

          <View style={styles.coverIconLoginWith}>
            <Image
              style={styles.iconLoginWith}
              source={require('../../../assets/icon_facebook.png')}
            />
            <Image
              style={styles.iconLoginWith}
              source={require('../../../assets/icon_google.png')}
            />
          </View>
          <View style={styles.coverTextHaveAccount}>
            <Text>Have you an account</Text>
            <Text style={styles.textButtonRegister}>Login</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Register;
