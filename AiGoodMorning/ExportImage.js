import React from 'react';
import { View, Button } from 'react-native';

function ExportImage({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Downloaded. Go to HomeScreen"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

export default ExportImage;