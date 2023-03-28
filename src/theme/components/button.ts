type properties = 'btn_red' | 'btn_white' | 'btn_red_icon' | 'btn_white_icon';

const baseStyle = (props: Record<string, any>) => {
  const { variant } = props as { variant: properties };

  return {
    width: '50%',
    borderRadius: 6,
    backgroundColor:
      variant === 'btn_red' || variant === 'btn_red_icon' ? 'primary.600' : 'transparent',
    borderWidth: variant === 'btn_red' ? 0 : 1,
    borderColor: variant === 'btn_red' ? undefined : '#AC1506',
    _text: {
      color: variant === 'btn_red' || variant === 'btn_red_icon' ? 'white' : 'primary.600',
      fontSize: 14,
      fontFamily: 'Raleway_700Bold',
    },
    _icon: {
      width: 19,
      height: 19,
      stroke: variant === 'btn_red_icon' ? 'white' : '#AC1506',
    },
  };
};

export default {
  baseStyle,
};
