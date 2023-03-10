import React, { useState } from 'react';
import { Box, FlatList, Pressable, Text } from 'native-base';
import * as Icon from 'react-native-feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import ItemSelectVoucher from 'components/ItemSelectVoucher';
import SSButton from 'components/SSButton';
import SSHeaderNavigation from 'components/SSHeaderNavigation';
import SSTextInput from 'components/SSTextInput';
import { DATA6 } from 'mocks';

const SelectVoucherScreen = () => {
  const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    (id: number) => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected]
  );
  const [voucher, setVoucher] = useState('');
  // const [totalDiscount, setTotalDiscount] = useState(1);
  // const [totalShipping, setTotalShipping] = useState(1);
  // const [totalVoucher, setTotalVoucher] = useState(0);

  // const select = (total: number, Function: Function, available: number) => {
  //   if (available === 0) return console.log('Can not select more voucher');
  //   return Function(available - 1) && total + 1;
  // };

  // const deselect = (total: number, Function: Function, available: number) => {
  //   return Function(available + 1) && total - 1;
  // };
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
      />
      <SSTextInput
        placeholder={'Voucher code'}
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
      <Box marginY={3}>
        <Text variant="subtitle1">Shipping voucher</Text>
        <Text variant="subtitle2">{1} more voucher can be selected</Text>
      </Box>
      <FlatList
        data={DATA6}
        renderItem={({ item }) => (
          <ItemSelectVoucher
            voucher={item}
            selected={!!selected.get(item.id)}
            onSelect={onSelect}
          />
        )}
        keyExtractor={(item) => item.name}
      />
      <Box marginY={3}>
        <Text variant="subtitle1">Discount voucher</Text>
        <Text variant="subtitle2">{1} more voucher can be selected</Text>
      </Box>
      <FlatList
        data={DATA6}
        renderItem={({ item }) => (
          <ItemSelectVoucher
            voucher={item}
            selected={!!selected.get(item.id)}
            onSelect={onSelect}
          />
        )}
        keyExtractor={(item) => item.name}
      />
      <Box height="auto" width="100%" paddingTop={3}>
        <Text variant="button">{0} voucher selected</Text>
        <SSButton
          variant={'red'}
          text={'Select voucher'}
          width="100%"
          onPress={() => console.log('Hello')}
        />
      </Box>
    </SafeAreaView>
  );
};

export default SelectVoucherScreen;
