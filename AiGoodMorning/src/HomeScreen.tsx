import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button } from '@rneui/base';

// Define the type for the navigation prop based on the available routes
type HomeScreenNavigationProp = NativeStackNavigationProp<any>;

// Define the props structure expected by HomeScreen
type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.container}>
        <Image
          source={require('../assets/logo.png')}
          // Apply the responsive style
          style={styles.responsiveImage}
        />
      </View>

      <Button
        title="開始做圖"
        type="outline"
        size="lg"
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        onPress={() => navigation.navigate('ImageGeneration')}
      />
      <Button
        title="下載做好的圖"
        type="outline"
        size="lg"
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        onPress={() => navigation.navigate('PublicGallery')}
      />
    </View>
  );
};


// Define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10, // Add padding to prevent image from stretching to the screen edges
  },
  responsiveImage: {
    width: '40%', // Make image width relative to the container
    height: undefined, // Ensure the height is dynamic
    aspectRatio: 1, // Adjust according to your image's aspect ratio
    resizeMode: 'contain', // Contain the image within the bounds of the view
  },
});

export default HomeScreen;