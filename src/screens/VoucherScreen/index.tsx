import { useState } from 'react';
import { Box, FlatList, Pressable } from 'native-base';
import { useTranslation } from 'react-i18next';
import * as Icon from 'react-native-feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import ItemVoucher from 'components/ItemVoucher';
import SSHeaderNavigation from 'components/SSHeaderNavigation';
import SSTextInput from 'components/SSTextInput';
import { DATA6 } from 'mocks';

const VoucherScreen = () => {
  const { t } = useTranslation();
  const [voucher, setVoucher] = useState('');
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
        titleHeaderScreen={'Voucher'}
        iconRightHeaderScreen={false}
        quantityItems={0}
        iconRightHeaderCart={false}
        quantityHeaderCarts={0}
      />
      <SSTextInput
        placeholder={t('SelectVoucher.title')}
        typePassword={false}
        inputLeftElement={<Icon.Gift strokeWidth={1} stroke={'black'} />}
        inputRightElement={
          <Pressable onPress={() => console.log('Add voucher')}>
            <Icon.PlusCircle strokeWidth={1} stroke={'black'} />
          </Pressable>
        }
        value={voucher}
        changeValue={setVoucher}
      />
      <Box marginBottom={3} />
      <FlatList
        data={DATA6}
        renderItem={({ item }) => <ItemVoucher voucher={item} />}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
};

export default VoucherScreen;
