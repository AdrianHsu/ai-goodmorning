import React from 'react';
import { View, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type ExportImageNavigationProp = NativeStackNavigationProp<any>;

// Define the props type, including the navigation prop
type Props = {
  navigation: ExportImageNavigationProp;
};

const ExportImage: React.FC<Props> = ({ navigation }) => {
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