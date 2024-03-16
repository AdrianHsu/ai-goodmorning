import React from 'react';
import { View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button } from '@rneui/base';

type ImageGenerationNavigationProp = NativeStackNavigationProp<any>;

// Define the props structure expected by ImageGeneration
type Props = {
  navigation: ImageGenerationNavigationProp;
};

const ImageGeneration: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="我想要山水畫、有老鷹在飛、壯觀"
        onPress={() => navigation.navigate('CaptionGeneration')
      }
      type="outline"
      size="lg"
      containerStyle={{
        width: 200,
        marginHorizontal: 50,
        marginVertical: 10,
      }}
      />
      <Button
        title="我想要喜氣洋洋、有鞭炮跟舞龍舞獅"
        onPress={() => navigation.navigate('CaptionGeneration')}
        type="outline"
        size="lg"
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />
      <Button
        title="我想要五彩繽紛的花園、還有水果"
        onPress={() => navigation.navigate('CaptionGeneration')}
        type="outline"
        size="lg"
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />
    </View>
  );
};

export default ImageGeneration;