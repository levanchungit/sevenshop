import { Button, Text } from 'native-base';

type Props = {
  variant: string;
  text: string;
  width?: any;
  onPress: Function;
};

const SSButton = (props: Props) => {
  const { variant, text, width, onPress } = props;
  return variant === 'red' ? (
    <Button
      onPress={() => onPress()}
      fontFamily={'Raleway_700Bold'}
      borderRadius={10}
      width={width}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Text fontFamily={'Raleway_700Bold'} variant={'button'} color={'white'}>
        {text}
      </Text>
    </Button>
  ) : variant === 'white' ? (
    <Button
      onPress={() => onPress()}
      fontFamily={'Raleway_700Bold'}
      backgroundColor={'white'}
      borderRadius={10}
      justifyContent={'center'}
      alignItems={'center'}
      borderColor={'primary.600'}
      width={width}
      borderWidth={2}
    >
      <Text fontFamily={'Raleway_700Bold'} variant={'button'} color={'primary.600'}>
        {text}
      </Text>
    </Button>
  ) : null;
};

export default SSButton;
