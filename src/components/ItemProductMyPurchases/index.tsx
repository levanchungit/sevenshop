import React from 'react';
import { Text, View, Pressable, Image, Skeleton } from 'native-base';
import { useTranslation } from 'react-i18next';
import SSButton from 'components/SSButton';
import { formatNumberCurrencyVN } from 'utils/common';

type Props = {
  total: number;
  quantitiesProduct: number;
  name: string;
  image: string;
  onPressViewDetail: Function;
  onPressBuyAgain: Function;
};

const ItemProductMyPurchases = (props: Props) => {
  const { t } = useTranslation();
  const { total, quantitiesProduct, name, image, onPressBuyAgain, onPressViewDetail } = props;

  return (
    <View px={1} pt={2} borderBottomColor={'gray.300'} borderBottomWidth={3}>
      <Pressable flexDirection={'column'}>
        <View w={'100%'} borderBottomColor="gray.400" pb={5}>
          <View flexDirection={'row'} m={3} alignItems={'center'}>
            <Skeleton isLoaded={image !== ''} w={120} h={120} mr={3}>
              <Image
                alt="gsgsdg"
                w={120}
                h={120}
                borderRadius={12}
                mr={3}
                resizeMode="cover"
                source={{ uri: image }}
              />
            </Skeleton>
            <View flexDirection={'column'} justifyContent={'space-between'} w="65%" mt={-4}>
              <Skeleton isLoaded={name !== ''} w={'100%'} h={10}>
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
              </Skeleton>
              <View flexDirection={'row'} justifyContent="flex-start" alignItems={'center'}>
                <Skeleton isLoaded={quantitiesProduct !== 0} w={'100%'} h={10}>
                  <Text
                    style={{
                      fontVariant: ['lining-nums'],
                    }}
                    color="black"
                    fontSize={15}
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
                    fontSize={15}
                    variant={'Button'}
                    fontFamily="Raleway_500Medium"
                  >
                    {' '}
                    {formatNumberCurrencyVN(total)}
                  </Text>
                </Skeleton>
              </View>
            </View>
          </View>
          <View flexDirection={'row'} alignItems="center" justifyContent={'space-evenly'}>
            <Skeleton isLoaded={!!name} w={'48%'} h={10}>
              <SSButton
                width={'48%'}
                variant={'white'}
                text={t('MyPurchases.viewDetail')}
                onPress={onPressViewDetail}
              />
            </Skeleton>
            <Skeleton isLoaded={!!name} w={'48%'} h={10}>
              <SSButton
                width={'48%'}
                variant={'red'}
                text={t('MyPurchases.buyAgain')}
                onPress={onPressBuyAgain}
              />
            </Skeleton>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default ItemProductMyPurchases;
