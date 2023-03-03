import { Box } from 'native-base';
import * as Icon from 'react-native-feather';

type Props = {
  isChecked: boolean;
};

const IconCheck = (props: Props) => {
  const { isChecked } = props;
  if (isChecked) {
    return (
      <Box
        borderWidth={1}
        w={[20, 35]}
        h={[20, 35]}
        justifyContent="center"
        alignItems="center"
        borderRadius="full"
        backgroundColor="#AC1506"
        borderColor="#AC1506"
      >
        <Icon.Check stroke="white" />
      </Box>
    );
  } else {
    return (
      <Box
        borderWidth={1}
        w={[20, 35]}
        h={[20, 35]}
        justifyContent="center"
        alignItems="center"
        borderRadius="full"
        borderColor="#AC1506"
      />
    );
  }
};

export default IconCheck;
