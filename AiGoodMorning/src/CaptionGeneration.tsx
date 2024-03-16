import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button } from '@rneui/base';

// Define the type for the navigation prop expected by CaptionGeneration
type CaptionGenerationNavigationProp = NativeStackNavigationProp<any>;

// Define the props type for CaptionGeneration, including the navigation prop
type Props = {
  navigation: CaptionGenerationNavigationProp;
};

const CaptionGeneration: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
    <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.imageContainer}>
          <Image
            source={require('../assets/placeholder.png')}
            // Apply the responsive style
            style={styles.responsiveImage}
          />
      </View>
        <Button
          title="☀️早安系列"
          buttonStyle={{
            backgroundColor: 'rgba(255, 193, 7, 1)',
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 30
          }}
          titleStyle={{
            color: 'white',
            marginHorizontal: 10,
          }}
          type="outline"
          size="md"
        />
    </View>
      <View style={styles.container}>
        <Button
          title="NO 不喜歡"
          onPress={() => navigation.navigate('ExportImage')}
          type="outline"
          size="lg"
        />
        <Button
          title="YES 喜歡"
          onPress={() => navigation.navigate('ExportImage')}
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10, // Add padding to prevent image from stretching to the screen edges
  },
  responsiveImage: {
    width: undefined, // Make image width relative to the container
    height: '100%', // Ensure the height is dynamic
    aspectRatio: 0.8, // Adjust according to your image's aspect ratio
    resizeMode: 'contain', // Contain the image within the bounds of the view
  },
});

export default CaptionGeneration;