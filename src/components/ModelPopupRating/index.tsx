import { Flex, Image, Modal, Text, TextArea } from 'native-base';
import { Dimensions } from 'react-native';
import { Rating } from 'react-native-ratings';
import SSButton from 'components/SSButton';
import { color, size } from 'interfaces/Auth';

const initialWidth = Dimensions.get('window').width;

//Tạo 4 hook cho color, size, quantity và showModal
type Props = {
  showModal: boolean;
  setShowModal: Function;
  rating: number;
  product?: {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    type: {
      size: size;
      color: color;
    };
    selled: number;
    categories: number;
  };
};

const ModelPopupRating = (props: Props) => {
  const { showModal, setShowModal, rating, product } = props;
  return (
    <Modal isOpen={showModal} onClose={() => setShowModal(!showModal)}>
      <Modal.Content maxWidth={initialWidth} marginBottom={0} marginTop="auto">
        <Modal.CloseButton />
        <Modal.Header>
          <Flex direction="row" w="100%">
            <Image
              source={{
                uri: product?.image,
              }}
              alt="Product img"
              size="full"
              alignSelf="flex-start"
              h={50}
              w="15%"
            />
            <Flex direction="column" w="100%" marginLeft={3}>
              <Text variant="body2">{product?.name}</Text>
              <Rating
                startingValue={rating}
                imageSize={15}
                readonly={true}
                style={{
                  paddingVertical: 10,
                  alignSelf: 'flex-start',
                }}
              />
            </Flex>
          </Flex>
        </Modal.Header>
        <Modal.Body height="auto" w="full">
          <Text variant="body2" marginBottom={3}>
            Tell us how you feel:
          </Text>
          <TextArea
            placeholder="Put your comment right here..."
            w="100%"
            autoCompleteType={undefined}
          />
        </Modal.Body>
        <Modal.Footer>
          <SSButton
            width="100%"
            variant={'red'}
            text={'Submit'}
            onPress={() => console.log('Submit comment')}
          />
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default ModelPopupRating;
