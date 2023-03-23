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
  const [stockIndex, setStockIndex] = useState<number>(2);
  const [selectedSize, setSelectedSize] = useState(product?.stock[stockIndex].size_id);
  const [selectedColor, setSelectedColor] = useState(product?.stock[stockIndex].color_id);
  const [quantity, setQuantity] = useState<number>(product?.stock[stockIndex].quantity);
  const [selectedQuantity, setSelectedQuantity] = useState<number>(0);
  const update = (idSize: string, idColor: string) => {
    setSelectedSize(idSize);
    setSelectedColor(idColor);
    setStockIndex(
      product?.stock.findIndex(function find(stock) {
        return stock.size_id === selectedSize && stock.color_id === selectedColor;
      })
    );
    setQuantity(product?.stock[stockIndex].quantity);
  };

  const increaseQuantity = () => {
    if (quantity === 0) {
      Toast.show({
        title: 'Cannot increase quantity',
        placement: 'top',
      });
    } else {
      setSelectedQuantity(selectedQuantity + 1);
      setQuantity(quantity - 1);
    }
  };
  const decreaseQuantity = () => {
    if (selectedQuantity === 0) {
      Toast.show({
        title: 'Cannot decrease quantity',
        placement: 'top',
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
            <Pressable onPress={() => decreaseQuantity()}>
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
            <Pressable onPress={() => increaseQuantity()}>
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
              <Flex direction="row" w={150} wrap="wrap">
                {colors?.data.results
                  .filter((c: IColor) => product?.color_ids.includes(c._id))
                  .map((color: IColor) => {
                    return (
                      <Pressable
                        onPress={() => update(selectedSize, color._id)}
                        w={8}
                        h={8}
                        borderRadius="full"
                        justifyContent="center"
                        alignItems="center"
                        mr={3}
                        mb={3}
                        key={color._id}
                        borderWidth={1}
                        borderColor={color.code === '#FFFFFF' ? '#C9C9C9' : 'transparent'}
                        backgroundColor={color.code}
                      >
                        {color._id === selectedColor ? (
                          <Icon.Check stroke={color.code === '#FFFFFF' ? '#000000' : '#FFFFFF'} />
                        ) : null}
                      </Pressable>
                    );
                  })}
              </Flex>
            </Box>

            <Box>
              <Text variant="body1" fontWeight="bold" mb={3}>
                Sizes:
              </Text>
              <Flex direction="row" w={150} wrap="wrap">
                {sizes?.data.results
                  .filter((s: ISize) => product?.size_ids.includes(s._id))
                  .map((size: ISize) => {
                    return (
                      <Pressable
                        onPress={() => update(size._id, selectedColor)}
                        w={8}
                        h={8}
                        justifyContent="center"
                        mr={3}
                        mb={3}
                        alignItems="center"
                        backgroundColor={size._id === selectedSize ? 'primary.600' : 'white'}
                        borderWidth={1}
                        borderColor="primary.600"
                        borderRadius={8}
                        key={size._id}
                      >
                        <Text
                          variant="button"
                          color={size._id === selectedSize ? 'white' : 'primary.600'}
                        >
                          {size.size}
                        </Text>
                      </Pressable>
                    );
                  })}
              </Flex>
            </Box>
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
