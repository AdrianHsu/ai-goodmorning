import React from 'react';
import { View, Button } from 'react-native';

const LoadingScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* Note: If this button doesn't interact, you might want it disabled or purely informative */}
      <Button
        title="Loading..."
        onPress={() => {}} // You should handle onPress even if it does nothing to avoid any runtime issues.
        disabled={true} // Disable the button since it's likely just informative.
      />
    </View>
  );
}

export default LoadingScreen;