import React from 'react';
import { View, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


// Define the type for the navigation prop based on the available routes
type HomeScreenNavigationProp = NativeStackNavigationProp<any>;

// Define the props structure expected by HomeScreen
type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
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
};

export default HomeScreen;