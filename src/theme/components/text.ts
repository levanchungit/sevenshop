const baseStyle = (props: Record<string, any>) => {
  const { variant } = props;
  return {
    fontSize:
      variant === 'h1'
        ? 48
        : variant === 'h2'
        ? 34
        : variant === 'h3'
        ? 24
        : variant === 'h4'
        ? 20
        : variant === 'title'
        ? 20
        : variant === 'subtitle1'
        ? 16
        : variant === 'subtitle2'
        ? 14
        : variant === 'body1'
        ? 16
        : variant === 'body2'
        ? 14
        : variant === 'button'
        ? 14
        : variant === 'caption'
        ? 12
        : variant === 'overline'
        ? 10
        : 'md',
    fontWeight: variant === 'title' ? 'bold' : variant === 'button' ? 'bold' : 'normal',
    fontFamily:
      variant === 'title' || variant === 'button'
        ? 'Raleway_700Bold'
        : variant === 'subtitle2'
        ? 'Raleway_500Medium'
        : 'Raleway_400Regular',
    letterSpacing: 0.25,
    ...props,
  };
};

export default {
  baseStyle,
};
