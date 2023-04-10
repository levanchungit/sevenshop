import { useState } from 'react';
import { Box, Flex, Image, Modal, Pressable, Text, Toast } from 'native-base';
import * as Icon from 'react-native-feather';
import SSButton from 'components/SSButton';
import { AddCartPayload } from 'interfaces/Cart';
import { IColor } from 'interfaces/Color';
import { IProduct, IStock } from 'interfaces/Product';
import { ISize } from 'interfaces/Size';
import { cartAPI } from 'modules';
import { formatNumberCurrencyVN } from 'utils/common';

type Props = {
  product: IProduct;
  showModal: boolean;
  setShowModal: Function;
  functionButton: string;
  mutate: Function;
};

const ModalPopupCart = (props: Props) => {
  const { product, showModal, setShowModal, functionButton, mutate } = props;
  const [selectedSize, setSelectedSize] = useState<string>(product?.stock[0].size_id._id);
  const [selectedColor, setSelectedColor] = useState<string>(product?.stock[0].color_id._id);
  const [quantity, setQuantity] = useState<number>(product?.stock[0].quantity);
  const [selectedQuantity, setSelectedQuantity] = useState<number>(0);
  const data: AddCartPayload = {
    size_id: selectedSize,
    color_id: selectedColor,
    quantity: selectedQuantity,
    product_id: product?._id,
  };

  const addCart = async () => {
    try {
      if (selectedSize === '' || selectedColor === '')
        Toast.show({
          title: 'Please select type of color & size',
          placement: 'top',
        });
      else if (selectedQuantity === 0)
        Toast.show({
          title: 'Please select a quantity',
          placement: 'top',
        });
      else {
        await cartAPI.addCart(data);
        Toast.show({
          title: 'Successfully added product to cart',
          placement: 'top',
        });
        mutate();
        setShowModal(false);
      }
    } catch (error: any) {
      Toast.show({
        title: 'Cannot add product to cart',
        description: error.response.data.message ? error.response.data.message : error.message,
        placement: 'top',
      });
    }
  };

  const update = async (data: { idSize?: string; idColor?: string }) => {
    if (data.idSize) setSelectedSize(data.idSize);
    if (data.idColor) setSelectedColor(data.idColor);

    const filterStock = product.stock.filter(
      (stock: IStock) =>
        stock.color_id._id === (data.idColor ? data.idColor : selectedColor) &&
        stock.size_id._id === (data.idSize ? data.idSize : selectedSize)
    );
    setQuantity(filterStock[0].quantity);
    setSelectedQuantity(0);
  };

  const increaseQuantity = () => {
    if (selectedQuantity >= quantity) {
      Toast.show({
        title: 'You have selected maximum quantity',
        placement: 'top',
      });
    } else {
      setSelectedQuantity(selectedQuantity + 1);
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
                    ? formatNumberCurrencyVN(product?.price_sale)
                    : formatNumberCurrencyVN(product?.price)}
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
                    {formatNumberCurrencyVN(product?.price)}
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
                {product?.color_ids.map((color: IColor) => {
                  return (
                    <Pressable
                      onPress={() => update({ idColor: color._id })}
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
                {product?.size_ids.map((size: ISize) => {
                  return (
                    <Pressable
                      onPress={() => update({ idSize: size._id })}
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
          {functionButton === 'buyNow' ? (
            <SSButton
              variant={'red'}
              text={'Buy now'}
              width="100%"
              onPress={() => console.log('Buy now')}
            />
          ) : functionButton === 'updateQuantity' ? (
            <SSButton
              variant={'red'}
              text={'Update'}
              width="100%"
              onPress={() => console.log('Update quantity')}
            />
          ) : functionButton === 'addCart' ? (
            <SSButton variant={'white'} text={'Add to cart'} width="100%" onPress={addCart} />
          ) : null}
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default ModalPopupCart;
