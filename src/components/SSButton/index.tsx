import { Button, Text } from 'native-base';

type Props = {
  variant: string;
  text?: string;
  width?: any;
  height?: any;
  onPress: Function;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
};

const SSButton = (props: Props) => {
  const { variant, text, width, height, onPress, leftIcon, rightIcon } = props;
  return variant === 'red' ? (
    <Button
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      onPress={() => onPress()}
      fontFamily={'Raleway_700Bold'}
      borderRadius={10}
      width={width ? width : 'auto'}
      height={height}
      justifyContent={'center'}
      alignItems={'center'}
    >
      {text ? (
        <Text fontFamily={'Raleway_700Bold'} variant={'button'} color={'white'}>
          {text}
        </Text>
      ) : null}
    </Button>
  ) : variant === 'white' ? (
    <Button
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      onPress={() => onPress()}
      fontFamily={'Raleway_700Bold'}
      backgroundColor={'white'}
      borderRadius={10}
      justifyContent={'center'}
      alignItems={'center'}
      borderColor={'primary.600'}
      width={width ? width : 'auto'}
      height={height}
      borderWidth={2}
    >
      <Text fontFamily={'Raleway_700Bold'} variant={'button'} color={'primary.600'}>
        {text}
      </Text>
    </Button>
  ) : null;
};

export default SSButton;
