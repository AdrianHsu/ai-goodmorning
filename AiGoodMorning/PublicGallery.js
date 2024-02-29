import React from 'react';
import { View, Button } from 'react-native';

function PublicGallery({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="PublicGallery. Go to HomeScreen"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

export default PublicGallery;