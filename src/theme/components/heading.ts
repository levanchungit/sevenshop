const baseStyle = (props: Record<string, any>) => {
  return {
    color: props.colorMode === 'dark' ? 'white' : 'gray.800',
    fontWeight: 'bold',
    fontFamily: 'heading',
  };
};

export default {
  baseStyle,
};
