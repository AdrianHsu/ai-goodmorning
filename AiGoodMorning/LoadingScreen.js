import React from 'react';
import { View, Button } from 'react-native';

function LoadingScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Loading..."
      />
    </View>
  );
}

export default LoadingScreen;