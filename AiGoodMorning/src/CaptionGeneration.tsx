import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button } from '@rneui/base';
import ViewShot from 'react-native-view-shot';
import { useRef, useState } from 'react';

type CaptionGenerationNavigationProp = NativeStackNavigationProp<any>;

type Props = {
  navigation: CaptionGenerationNavigationProp;
};

const imageSources = [
  require('../assets/morning-series/morning-1.png'),
  require('../assets/morning-series/morning-2.png'),
  require('../assets/morning-series/morning-3.png'),
  require('../assets/morning-series/morning-4.png'),
  require('../assets/morning-series/morning-5.png'),
  require('../assets/morning-series/morning-6.png'),
];
const CaptionGeneration: React.FC<Props> = ({ navigation }) => {

  const viewShotRef = useRef();
  const [imageIndex, setImageIndex] = useState(0);
  const handleDislikePress = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % imageSources.length);
  };


  return (
    <View style={{ flex: 1 }}>

      <View style={styles.messageContainer}>
        <Image
          source={require('../assets/face.png')}
          style={styles.profilePhoto}
        />
        <View style={styles.bubble}>
          <Text style={styles.bubbleText}>圖畫好了，配這個字可以嗎？</Text>
        </View>
      </View>

      {/* Increase the flex value here to give more space to the image */}
      <View style={[styles.imageContainer, { flex: 0.65 }]}>
        <ViewShot style={styles.container} options={{ format: 'png', quality: 1.0 }} ref={viewShotRef}>
          {/* Correct the way local images are required */}
          <Image source={require('../assets/mountain.png')} style={styles.backgroundImage} />
          {/* Assuming 'morning-3-bp.png' is a local asset, not from a URI */}
          <Image source={imageSources[imageIndex]} style={styles.foregroundImage} />
        </ViewShot>
      </View>
      {/* Adjust the remaining space for button containers */}
      <View style={[styles.buttonContainer, { flex: 0.15 }]}>
        <Button
          title="☀️早安系列"
          buttonStyle={{
            backgroundColor: 'rgba(255, 193, 7, 1)',
            borderColor: 'transparent',
            borderRadius: 30
          }}
          titleStyle={{ color: 'white' }}
          type="outline"
          onPress={() => {}}
        />
      </View>
      <View style={[styles.buttonContainer, { flexDirection: 'row', justifyContent: 'space-around', flex: 0.2 }]}>
        <Button
          title="NO 不喜歡"
          onPress={handleDislikePress}
          type="outline"
        />
        <Button
          title="YES 喜歡"
          onPress={() => navigation.navigate('ExportImage')}
          type="outline"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%', // Set the message container to full width
    margin: 20, // Space above the message container
  },
  profilePhoto: {
    width: 50, // Increase the size of the photo
    height: 50, // Increase the size of the photo
    marginRight: 10,
  },
  bubble: {
    backgroundColor: '#e0e0e0', // Light grey background for the bubble
    // Remove borderRadius to eliminate rounded corners
    paddingVertical: 15, // Increase padding for a bigger bubble
    paddingHorizontal: 20, // Increase padding for a bigger bubble
    maxWidth: '85%', // Prevent the bubble from being too wide
  },
  bubbleText: {
    fontSize: 18, // Increase text size inside the bubble
  },
  imageContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  responsiveImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%', // Full width of the container
    height: '100%', // Full height of the container
    position: 'relative', // Needed for absolute positioning of children
  },
  backgroundImage: {
    width: '100%', // Full width of the container
    height: '100%', // Full height, making the image cover the entire container
    resizeMode: 'cover', // Covers the entire container, may crop if aspect ratios differ
  },
  foregroundImage: {
    position: 'absolute', // Absolute positioning relative to its parent
    width: '100%', // Make the foreground image expand to cover the container width
    height: '100%', // Make the foreground image expand to cover the container height
    resizeMode: 'contain', // Ensure the whole image fits inside the container without cropping
  },
});

export default CaptionGeneration;
