import React from 'react';
import { View, Button } from 'react-native';

function CaptionGeneration({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to ExportImage"
        onPress={() => navigation.navigate('ExportImage')}
      />
    </View>
  );
}

export default CaptionGeneration;