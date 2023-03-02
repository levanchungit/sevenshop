import { Button, Text } from 'native-base';

type Props = {
  variant: string;
};

const SSButton = (props: Props) => {
  const { variant } = props;
  return variant === 'red' ? (
    <Button fontFamily={'Raleway_700Bold'} borderRadius={10}>
      <Text fontFamily={'Raleway_700Bold'} variant={'h3'} color={'white'}>
        Hello
      </Text>
    </Button>
  ) : variant === 'white' ? (
    <Button
      fontFamily={'Raleway_700Bold'}
      backgroundColor={'white'}
      borderRadius={10}
      borderColor={'primary.600'}
      borderWidth={1}
    >
      <Text fontFamily={'Raleway_700Bold'} variant={'h3'} color={'primary.600'}>
        Hello
      </Text>
    </Button>
  ) : null;
};

export default SSButton;
