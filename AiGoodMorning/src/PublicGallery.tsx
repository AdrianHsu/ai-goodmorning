import React from 'react';
import { View, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


// Define the type for the navigation prop expected by PublicGallery
type PublicGalleryNavigationProp = NativeStackNavigationProp<any>;

// Define the props structure expected by PublicGallery, including the navigation prop
type Props = {
  navigation: PublicGalleryNavigationProp;
};

const PublicGallery: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="PublicGallery. Go to HomeScreen"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

export default PublicGallery;