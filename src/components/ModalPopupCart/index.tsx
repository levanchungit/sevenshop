import { useState } from 'react';
import { Box, Flex, Image, Modal, Pressable, Text, Toast } from 'native-base';
import * as Icon from 'react-native-feather';
import SSButton from 'components/SSButton';
import useGetColors from 'hook/colors/useGetColors';
import useGetSizes from 'hook/sizes/useGetSizes';
import { IColor } from 'interfaces/Color';
import { IProduct } from 'interfaces/Product';
import { ISize } from 'interfaces/Size';

type Props = {
  product: IProduct;
  showModal: boolean;
  setShowModal: Function;
};

const ModalPopupCart = (props: Props) => {
  const numberWithCommas = (num?: number) => {
    return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  const { product, showModal, setShowModal } = props;
  const { colors } = useGetColors();
  const { sizes } = useGetSizes();
  // const [stockIndex, setStockIndex] = useState<number>();
  // const [selectedSize, setSelectedSize] = useState('');
  // const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState<number>(product?.stock[0].quantity);
  const [selectedQuantity, setSelectedQuantity] = useState<number>(0);
  const increaseQuantity = (quantity: number) => {
    if (selectedQuantity < quantity) {
      setSelectedQuantity(selectedQuantity + 1);
      setQuantity(quantity - 1);
    } else {
      Toast.show({
        description: 'Cannot increase quantity',
      });
    }
  };
  const decreaseQuantity = (quantity: number) => {
    if (quantity === 0) {
      Toast.show({
        description: 'Cannot decrease quantity',
      });
    } else {
      setSelectedQuantity(selectedQuantity - 1);
      setQuantity(quantity + 1);
    }
  };

  return (
    <Modal isOpen={showModal} onClose={() => setShowModal(!showModal)}>
      <Modal.Content width="100%" marginBottom={0} marginTop="auto">
        <Modal.CloseButton />

        <Modal.Body height="auto">
          <Flex
            direction="row"
            justifyContent="center"
            alignItems="center"
            position="absolute"
            right={8}
            top={55}
          >
            <Pressable onPress={() => decreaseQuantity(selectedQuantity)}>
              <Icon.Minus width={18} height={18} stroke="black" />
            </Pressable>
            <Box
              borderWidth={1}
              borderColor="#C9C9C9"
              borderRadius={10}
              marginX={3}
              w={10}
              h={10}
              justifyContent="center"
              alignItems="center"
            >
              <Text variant="body2">{selectedQuantity}</Text>
            </Box>
            <Pressable onPress={() => increaseQuantity(selectedQuantity)}>
              <Icon.Plus width={18} height={18} stroke="black" />
            </Pressable>
          </Flex>
          <Flex direction="row" marginBottom={3}>
            <Image
              source={
                product?.images[0] === undefined
                  ? require('../../assets/images/logo_sevenshop_image_default.png')
                  : { uri: product?.images[0] }
              }
              alt="Alternate Text"
              size="full"
              w={100}
              h={100}
            />
            <Flex marginLeft={2} direction="column" height={100} justifyContent="space-between">
              <Box>
                <Text
                  variant="body1"
                  color="red.600"
                  style={{
                    fontVariant: ['lining-nums'],
                  }}
                >
                  {product?.price_sale
                    ? numberWithCommas(product?.price_sale)
                    : numberWithCommas(product?.price)}
                  đ
                </Text>
                {product?.price_sale ? (
                  <Text
                    variant="caption"
                    strikeThrough
                    color="gray.500"
                    style={{
                      fontVariant: ['lining-nums'],
                    }}
                  >
                    {numberWithCommas(product?.price)}đ
                  </Text>
                ) : null}
              </Box>
              <Text
                variant="body2"
                style={{
                  fontVariant: ['lining-nums'],
                }}
              >
                Warehouse: {quantity}
              </Text>
            </Flex>
          </Flex>
          <Flex direction="row" w="100%" justifyContent="space-between">
            <Box>
              <Text variant="body1" fontWeight="bold" mb={3}>
                Colors:
              </Text>
              <Flex direction="row" justifyContent="space-between" w="30%">
                {colors?.data.results
                  .filter((c: IColor) => product?.color_ids.includes(c._id))
                  .map((color: IColor) => {
                    return (
                      <Pressable
                        w={8}
                        h={8}
                        borderRadius="full"
                        key={color._id}
                        borderWidth={1}
                        borderColor={color.code === '#FFFFFF' ? '#C9C9C9' : 'transparent'}
                        backgroundColor={color.code}
                      />
                    );
                  })}
              </Flex>
            </Box>

            <Box>
              <Text variant="body1" fontWeight="bold" mb={3}>
                Sizes:
              </Text>
              <Flex direction="row" justifyContent="space-between" w="30%">
                {sizes?.data.results
                  .filter((s: ISize) => product?.size_ids.includes(s._id))
                  .map((size: ISize) => {
                    return (
                      <Pressable
                        w={8}
                        h={8}
                        justifyContent="center"
                        alignItems="center"
                        backgroundColor="transparent"
                        borderWidth={1}
                        borderColor="primary.600"
                        borderRadius={8}
                        key={size._id}
                      >
                        <Text variant="button" color="primary.600">
                          {size.size}
                        </Text>
                      </Pressable>
                    );
                  })}
              </Flex>
            </Box>

            {/* <FlatList
              data={colors}
              scrollEnabled={false}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              numColumns={3}
              ListHeaderComponent={
                <Text fontSize={14} fontWeight="bold">
                  Color
                </Text>
              }
              renderItem={({ item }) => (
                <Pressable
                  marginRight="3"
                  marginBottom="3"
                  backgroundColor={item.data}
                  borderWidth="1"
                  borderColor={item.data === 'white' ? '#C9C9C9' : 'transparent'}
                  w={41}
                  h={41}
                  justifyContent="center"
                  alignItems="center"
                  borderRadius="full"
                  onPress={() => setSelectedColor(item.data)}
                >
                  {item.data === selectedColor ? (
                    <Icon.Check stroke={item.data === 'white' ? 'black' : 'white'} />
                  ) : null}
                </Pressable>
              )}
              keyExtractor={(item) => item.title}
            /> */}

            {/* <FlatList
              data={size}
              scrollEnabled={false}
              numColumns={3}
              ListHeaderComponent={
                <Text fontSize="14" fontWeight="bold">
                  Size
                </Text>
              }
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => setSelectedSize(item.title)}
                  marginRight="3"
                  marginBottom="3"
                  borderWidth="1"
                  backgroundColor={item.title === selectedSize ? 'primary.600' : 'transparent'}
                  borderColor="primary.600"
                  w={[7, 41, 51]}
                  h={[7, 41, 51]}
                  borderRadius={[5, 10]}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Text
                    fontSize={[8, 12]}
                    // color={item.title === selectedSize ? 'white' : 'primary.600'}
                    fontWeight="bold"
                  >
                    {item.title}
                  </Text>
                </Pressable>
              )}
              keyExtractor={(item) => item.title}
            /> */}
          </Flex>
        </Modal.Body>
        <Modal.Footer>
          <SSButton
            variant={'red'}
            text={'Submit'}
            width="100%"
            onPress={() => console.log('Hello')}
          />
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default ModalPopupCart;
