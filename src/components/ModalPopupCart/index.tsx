import { Box, FlatList, Flex, Image, Modal, Pressable, Text } from 'native-base';
import { Dimensions } from 'react-native';
import * as Icon from 'react-native-feather';
import { color, size } from 'interfaces/Auth';

const initialWidth = Dimensions.get('window').width;

//Tạo 4 hook cho color, size, quantity và showModal
type Props = {
  showModal: boolean;
  setShowModal: Function;
  selectedSize: string;
  setSelectedSize: Function;
  selectedColor: string;
  setSelectedColor: Function;
  quantity: number;
  setQuantity: Function;
  image?: string;
  price: number;
  priceDiscount?: number;
  colors: color[];
  size: size[];
  onPress: Function;
};

const ModalPopupCart = (props: Props) => {
  const {
    showModal,
    setShowModal,
    selectedSize,
    setSelectedSize,
    selectedColor,
    setSelectedColor,
    quantity,
    setQuantity,
    size,
    colors,
    // image,
    price,
    priceDiscount,
    onPress,
  } = props;
  return (
    <Modal isOpen={showModal} onClose={() => setShowModal(!showModal)}>
      <Modal.Content maxWidth={initialWidth} marginBottom={0} marginTop="auto">
        <Modal.CloseButton />

        <Modal.Body height="auto" w="full">
          <Flex direction="row" marginBottom={3}>
            <Image
              source={{
                uri: 'https://wallpaperaccess.com/full/317501.jpg',
              }}
              alt="Alternate Text"
              size="full"
              w={100}
              h={100}
            />
            <Flex marginLeft={2} direction="column" height={100} justifyContent="space-between">
              <Box>
                <Text fontSize={22} fontWeight="semibold" color="red.600">
                  {price}đ
                </Text>
                {priceDiscount ? (
                  <Text fontSize={16} strikeThrough color="gray.500">
                    {priceDiscount}đ
                  </Text>
                ) : null}
              </Box>
              <Flex direction="row" width="77%" justifyContent="space-between" alignItems="center">
                <Text fontSize={16}>Warehouse: 20</Text>
                <Flex direction="row" justifyContent="center" alignItems="center">
                  <Pressable onPress={() => setQuantity(quantity - 1)}>
                    <Icon.Minus stroke="black" />
                  </Pressable>
                  <Box
                    borderWidth={1}
                    borderColor="#C9C9C9"
                    borderRadius={10}
                    marginX={5}
                    w={10}
                    h={10}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Text>{quantity}</Text>
                  </Box>
                  <Pressable onPress={() => setQuantity(quantity + 1)}>
                    <Icon.Plus stroke="black" />
                  </Pressable>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex direction="row">
            <FlatList
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
            />

            <FlatList
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
                    color={item.title === selectedSize ? 'white' : 'primary.600'}
                    fontWeight="bold"
                  >
                    {item.title}
                  </Text>
                </Pressable>
              )}
              keyExtractor={(item) => item.title}
            />
          </Flex>
        </Modal.Body>
        <Modal.Footer>
          <Pressable
            width="100%"
            height="43"
            borderRadius="6"
            backgroundColor="#AC1506"
            alignItems="center"
            justifyContent="center"
            onPress={() => {
              onPress();
            }}
          >
            <Text color="white" fontWeight="bold" fontSize="14">
              Confirm
            </Text>
          </Pressable>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default ModalPopupCart;
