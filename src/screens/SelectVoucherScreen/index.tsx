import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Box, Pressable, Text, Toast, View } from 'native-base';
import { useTranslation } from 'react-i18next';
import * as Icon from 'react-native-feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import FlatListSelectVoucher from 'components/FlatListSelectVoucher';
import SSButton from 'components/SSButton';
import SSHeaderNavigation from 'components/SSHeaderNavigation';
import SSTextInput from 'components/SSTextInput';
import useGetVouchersUser from 'hook/voucher/useGetVouchersUser';
import { IVoucher } from 'interfaces/Voucher';
import voucherAPI from 'modules/voucherAPI';
import { AppNavigationProp } from 'providers/navigation/types';
import { CheckoutContext } from 'screens/CheckoutScreen/CheckoutContext';

const SelectVoucherScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<AppNavigationProp>();
  const [voucher, setVoucher] = useState('');
  const [selectVoucher1, setSelectVoucher1] = useState('');
  const { vouchers, err_vouchers, loading_vouchers, mutate_vouchers } = useGetVouchersUser();
  const { setSelectVoucher } = useContext(CheckoutContext);
  const addVoucher = async () => {
    try {
      if (voucher === '')
        Toast.show({
          title: 'Please select type of color & size',
          placement: 'top',
        });
      else {
        await voucherAPI.addVoucherUser(voucher);
        Toast.show({
          title: 'Successfully added voucher to account',
          placement: 'top',
        });
        mutate_vouchers();
      }
    } catch (error: any) {
      Toast.show({
        title: 'Cannot add voucher to account',
        description: error.response.data.message ? error.response.data.message : error.message,
        placement: 'top',
      });
    }
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 10,
        backgroundColor: 'white',
      }}
    >
      <SSHeaderNavigation
        tabHeaderSearchEnabled={false}
        titleHeaderSearchEnabled={false}
        iconSearchEnabled={false}
        iconOther={false}
        titleHeaderSearch={''}
        titleHeaderScreen={t('SelectVoucher.title')}
        iconRightHeaderScreen={false}
        iconRightHeaderCart={false}
      />
      <SSTextInput
        width="100%"
        placeholder={t('SelectVoucher.title')}
        typePassword={false}
        inputLeftElement={<Icon.Gift strokeWidth={1} stroke={'black'} />}
        inputRightElement={
          <Pressable onPress={() => addVoucher()}>
            <Icon.PlusCircle strokeWidth={1} stroke={'black'} />
          </Pressable>
        }
        value={voucher}
        changeValue={setVoucher}
      />
      <Box marginBottom={3} />
      {err_vouchers ? (
        <Text variant="title" alignSelf="center">
          Failed to load: {err_vouchers.response.data.message}
        </Text>
      ) : (
        <FlatListSelectVoucher
          vouchers={vouchers?.data.results.unused}
          isLoading={loading_vouchers}
          selectVoucher={selectVoucher1}
          setSelectVoucher={setSelectVoucher1}
        />
      )}
      <View bottom={0} width="100%" paddingTop={3}>
        <SSButton
          variant={'red'}
          text={t('SelectVoucher.title')}
          width="100%"
          onPress={() => {
            if (selectVoucher1) {
              setSelectVoucher(
                vouchers?.data.results.unused.find((item: IVoucher) => item._id === selectVoucher1)
              );
            } else {
              Toast.show({
                title: 'Please you do not have any voucher',
                placement: 'top',
              });
            }
            navigation.goBack();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SelectVoucherScreen;
