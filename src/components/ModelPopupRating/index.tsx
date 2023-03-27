import { Flex, Image, Modal, Text, TextArea } from 'native-base';
import { Dimensions } from 'react-native';
import { Rating } from 'react-native-ratings';
import SSButton from 'components/SSButton';
import { STATUS_PRODUCT } from 'global/constants';
import { review } from 'interfaces/Auth';
import { IModify } from 'interfaces/Basic';
import { IStock } from 'interfaces/Product';

const initialWidth = Dimensions.get('window').width;

type Props = {
  showModal: boolean;
  setShowModal: Function;
  rating: number;
  product?: {
    _id?: string;
    name: string;
    price: number;
    price_sale: number;
    description: string;
    images: string[];
    stock: IStock[];
    status: STATUS_PRODUCT;
    category_ids: string[];
    color_ids: string[];
    size_ids: string[];
    created_at: string;
    created_by: string;
    modify: IModify[];
    reviews: review[];
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
                uri: product?.images[0],
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
