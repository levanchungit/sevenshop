const baseStyle = (props: Record<string, any>) => {
  const { variant } = props;
  return {
    fontSize:
      variant === 'h1'
        ? '4xl'
        : variant === 'h2'
        ? '3xl'
        : variant === 'h3'
        ? '2xl'
        : variant === 'h4'
        ? 'xl'
        : variant === 'h5'
        ? 'lg'
        : variant === 'h6'
        ? 'md'
        : 'md',
    fontWeight: variant === 'h1' ? 'bold' : 'normal',
    ...props,
  };
};

export default {
  baseStyle,
};
