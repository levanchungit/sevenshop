const baseStyle = (props: Record<string, any>) => {
  const { variant } = props;
  return {
    _text: {
      color: props.colorMode === 'dark' ? 'white' : 'gray.800',
      fontWeight: 'bold',
      fontFamily: 'heading',
    },
    bg: variant === 'solid' ? 'primary.500' : 'transparent',
    endIcon: {
      size: 5,
      color: 'white',
    },
  };
};

export default {
  baseStyle,
};
