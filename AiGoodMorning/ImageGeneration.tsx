import React from 'react';
import { View, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type ImageGenerationNavigationProp = NativeStackNavigationProp<any>;

// Define the props structure expected by ImageGeneration
type Props = {
  navigation: ImageGenerationNavigationProp;
};

const ImageGeneration: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to CaptionGeneration"
        onPress={() => navigation.navigate('CaptionGeneration')}
      />
    </View>
  );
};

export default ImageGeneration;