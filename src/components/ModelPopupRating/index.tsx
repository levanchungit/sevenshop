import { useState } from 'react';
import { Flex, Image, Modal, Text, TextArea, Toast } from 'native-base';
import { Dimensions } from 'react-native';
// import {
//   ImagePickerResponse,
//   launchImageLibrary,
//   MediaType,
//   PhotoQuality,
//   Asset,
// } from 'react-native-image-picker';
import { Rating } from 'react-native-ratings';
import SSButton from 'components/SSButton';
import { INotYetRated, RatingPayload } from 'interfaces/Rating';
import ratingAPI from 'modules/ratingAPI';

const initialWidth = Dimensions.get('window').width;

type Props = {
  showModal: boolean;
  setShowModal: Function;
  rating: number;
  product: INotYetRated;
};

const ModelPopupRating = (props: Props) => {
  const { showModal, setShowModal, rating, product } = props;
  const [content, setContent] = useState<string>('');
  // const [image, setImage] = useState<string[]>();
  // const openImagePicker = () => {
  //   const options = {
  //     mediaType: 'photo' as MediaType,
  //     quality: 1 as PhotoQuality,
  //   };

  //   launchImageLibrary(options, (response: ImagePickerResponse) => {
  //     try {
  //       if (response.didCancel) {
  //         console.log('User cancelled image picker');
  //       } else {
  //         setImage(response.assets.uri);
  //       }
  //     } catch (error) {
  //       console.log('ImagePicker Error: ', error);
  //     }
  //   });
  // };
  const data: RatingPayload = {
    product_id: product.product_id,
    color_id: product.color_id,
    size_id: product.size_id,
    images: ['https://res.cloudinary.com/dzhlsdyqv/image/upload/v1681145262/file_oqm3zt.jpg'],
    content,
    rating,
  };
  const addRating = async () => {
    try {
      await ratingAPI.addRating(data);
      Toast.show({
        title: 'Successfully added rating',
        placement: 'top',
      });
      setShowModal(!showModal);
    } catch (error: any) {
      Toast.show({
        title: 'Cannot add rating',
        description: error.response.data.message ? error.response.data.message : error.message,
        placement: 'top',
      });
    }
  };
  return (
    <Modal isOpen={showModal} onClose={() => setShowModal(!showModal)}>
      <Modal.Content maxWidth={initialWidth} marginBottom={0} marginTop="auto">
        <Modal.CloseButton />
        <Modal.Header>
          <Flex direction="row" w="100%">
            <Image
              source={{
                uri: product?.product_image,
              }}
              alt="Product img"
              size="full"
              alignSelf="flex-start"
              h={50}
              w="15%"
            />
            <Flex direction="column" w="100%" marginLeft={3}>
              <Text variant="body2">{product?.product_name}</Text>
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
            value={content}
            onChangeText={setContent}
            placeholder="Put your comment right here..."
            w="100%"
            autoCompleteType={undefined}
          />
          {/* <SSButton variant={'red'} text="Image" onPress={() => openImagePicker()} /> */}
        </Modal.Body>
        <Modal.Footer>
          <SSButton width="100%" variant={'red'} text={'Submit'} onPress={() => addRating()} />
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default ModelPopupRating;
