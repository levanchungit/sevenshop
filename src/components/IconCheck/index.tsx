import * as Icon from 'react-native-feather';

type Props = {
  boolean: boolean;
  width: number;
  height: number;
};

const IconCheck = (props: Props) => {
  const { boolean, width, height } = props;
  if (boolean) {
    return <Icon.Circle stroke="#AC1506" width={width} height={height} />;
  } else {
    return <Icon.CheckCircle stroke="#AC1506" width={width} height={height} />;
  }
};

export default IconCheck;
