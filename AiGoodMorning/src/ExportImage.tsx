import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button } from '@rneui/base';

type ExportImageNavigationProp = NativeStackNavigationProp<any>;

// Define the props type, including the navigation prop
type Props = {
  navigation: ExportImageNavigationProp;
};

const ExportImage: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{flex : 1}}>
      <View style={styles.messageContainer}>
        <Image
          source={require('../assets/face.png')}
          style={styles.profilePhoto}
        />
        <View style={styles.bubble}>
          <Text style={styles.bubbleText}>做好了！</Text>
        </View>
      </View>
      <View style={[styles.imageContainer, {flex : 0.75}]}>
          <Image
            source={require('../assets/placeholder.png')}
            // Apply the responsive style
            style={styles.responsiveImage}
          />
      </View>
      <View style={[styles.buttonContainer, { flexDirection: 'row', justifyContent: 'space-around', flex: 0.1 }]}>
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
  buttonContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  responsiveImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
export default ExportImage;