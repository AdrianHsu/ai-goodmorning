import React from 'react';
import { View } from 'react-native';
import { Button } from '@rneui/base';

const LoadingScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* Note: If this button doesn't interact, you might want it disabled or purely informative */}
      <Button
        title="載入中..."
        onPress={() => {}} // You should handle onPress even if it does nothing to avoid any runtime issues.
        disabled={true} // Disable the button since it's likely just informative.
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
}

export default LoadingScreen;