import React, { useEffect, useRef } from 'react';
import { View, Image, ScrollView, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

type Props = object;

const SlideShowImage = (props: Props) => {
  // const [position, setPosition] = useState(1);
  const dataSource = [
    {
      title: 'Burger 1',
      caption: 'Original  Cheezy Meat',
      url: 'http://file.hstatic.net/1000058447/collection/banner.slider.desktop.aokhoacnam.2022.02.19_6fd09a127c9d45e4af4138e449d55cff.jpg',
    },
    {
      title: 'Burger 2',
      caption: '100% Original Beef',
      url: 'https://madora.vn/wp-content/uploads/2021/08/banner-11.jpg',
    },
    {
      title: 'Burger 3',
      caption: 'Mouthfull Of Happiness',
      url: 'https://vcdn1-giaitri.vnecdn.net/2021/10/30/Banner-bi-a-8702-1635607445.png?w=0&h=0&q=100&dpr=2&fit=crop&s=KfesGkqKqdl2vZN4qEwf2Q',
    },
  ];
  const myRef: any = useRef(null);

  useEffect(() => {
    if (dataSource.length > 0) {
      let index = 0;
      setInterval(() => {
        myRef.current.scrollTo({ x: Math.floor(index * windowWidth), y: 0, animated: true });
        index += 1;
        if (index > dataSource.length) {
          index = 0;
        }
      }, 3000);
    }
  }, [dataSource]);

  return (
    <View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        ref={myRef}
        pagingEnabled
        horizontal
        style={{ width: '100%', height: '25%' }}
      >
        {dataSource.map((image, index) => (
          <Image
            key={index}
            style={{ width: windowWidth, height: 150, resizeMode: 'cover' }}
            source={{ uri: image.url }}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default SlideShowImage;
