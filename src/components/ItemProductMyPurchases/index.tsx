import React from 'react';
import { Text, View, Pressable, Image, Button } from 'native-base';

type Props = {
  total: number;
  quantitiesProduct: number;
  name: string;
  image: string;
};

const ItemProductMyPurchases = (props: Props) => {
  const { total, quantitiesProduct, name, image } = props;

  return (
    <View width={'100%'} px={3} borderBottomColor={'gray.300'} borderBottomWidth={12}>
      <Pressable flexDirection={'column'}>
        <View w={'100%'} borderBottomColor="gray.400" pb={5}>
          <View flexDirection={'row'} style={{ paddingHorizontal: 12 }} alignItems={'center'}>
            <Image
              alt="gsgsdg"
              style={{ width: 120, height: 120, borderRadius: 12 }}
              resizeMode="cover"
              source={{ uri: image }}
            />
            <View flexDirection={'column'} justifyContent={'space-between'} w="65%" mt={-4}>
              <Text
                numberOfLines={1}
                fontSize={18}
                color="black"
                variant={'Body1'}
                mb={1}
                fontFamily="Raleway_500Medium"
              >
                {name}
              </Text>
              <View flexDirection={'row'} justifyContent="flex-start" alignItems={'center'}>
                <Text
                  style={{
                    fontVariant: ['lining-nums'],
                  }}
                  color="black"
                  fontSize={16}
                  variant={'Subtitle2'}
                  fontWeight="semibold"
                >
                  {quantitiesProduct} products |
                </Text>
                <Text
                  style={{
                    fontVariant: ['lining-nums'],
                  }}
                  color="primary.600"
                  fontSize={16}
                  variant={'Button'}
                  fontFamily="Raleway_500Medium"
                >
                  {' '}
                  {total}đ
                </Text>
              </View>
            </View>
          </View>
          <View flexDirection={'row'} alignItems="center" justifyContent={'space-between'}>
            <View
              style={{ width: '48%' }}
              borderWidth={1}
              borderColor="primary.500"
              borderRadius={6}
            >
              <Button borderRadius={10} backgroundColor="white">
                <Text color={'primary.500'} fontWeight="bold" fontSize={16}>
                  Xem chi tiết
                </Text>
              </Button>
            </View>
            <View
              style={{ width: '48%' }}
              borderWidth={1}
              borderColor="primary.500"
              borderRadius={6}
            >
              <Button borderRadius={10} backgroundColor="white">
                <Text color={'primary.500'} fontWeight="bold" fontSize={16}>
                  Mua Thêm
                </Text>
              </Button>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default ItemProductMyPurchases;
