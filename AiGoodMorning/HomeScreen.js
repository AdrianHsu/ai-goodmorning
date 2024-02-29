import React from 'react';
import { View, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to ImageGeneration"
        onPress={() => navigation.navigate('ImageGeneration')}
      />
      <Button
        title="Go to PublicGallery"
        onPress={() => navigation.navigate('PublicGallery')}
      />
    </View>
  );
}

export default HomeScreen;