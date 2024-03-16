import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button } from '@rneui/base';

type ExportImageNavigationProp = NativeStackNavigationProp<any>;

// Define the props type, including the navigation prop
type Props = {
  navigation: ExportImageNavigationProp;
};

const ExportImage: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <View style={styles.imageContainer}>
          <Image
            source={require('../assets/placeholder.png')}
            // Apply the responsive style
            style={styles.responsiveImage}
          />
      </View>

      <View style={styles.container}>
        <Button
          title="傳 Line"
          onPress={() => navigation.popToTop()}
          type="outline"
          size="lg"
        />
        <Button
          title="下載"
          onPress={() => navigation.popToTop()}
          type="outline"
          size="lg"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Align children in a row.
    justifyContent: 'space-between', // Distribute children evenly across the container's main axis.
    marginHorizontal: 50,
    marginVertical: 10,
  },
  space: {
    width: 20, // Space between buttons
  },
  imageContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10, // Add padding to prevent image from stretching to the screen edges
  },
  responsiveImage: {
    width: undefined, // Make image width relative to the container
    height: '100%', // Ensure the height is dynamic
    aspectRatio: 1, // Adjust according to your image's aspect ratio
    resizeMode: 'contain', // Contain the image within the bounds of the view
  },
});
export default ExportImage;