import React from 'react';
import { View, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define the type for the navigation prop expected by CaptionGeneration
type CaptionGenerationNavigationProp = NativeStackNavigationProp<any>;

// Define the props type for CaptionGeneration, including the navigation prop
type Props = {
  navigation: CaptionGenerationNavigationProp;
};

const CaptionGeneration: React.FC<Props> = ({ navigation }) => {
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