import React from 'react';
import { View, Button } from 'react-native';

function ImageGeneration({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to CaptionGeneration"
        onPress={() => navigation.navigate('CaptionGeneration')}
      />
    </View>
  );
}

export default ImageGeneration;