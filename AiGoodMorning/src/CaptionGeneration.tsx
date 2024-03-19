import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button } from '@rneui/base';

type CaptionGenerationNavigationProp = NativeStackNavigationProp<any>;

type Props = {
  navigation: CaptionGenerationNavigationProp;
};

const CaptionGeneration: React.FC<Props> = ({ navigation }) => {
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
        <Image
          source={require('../assets/placeholder.png')}
          style={styles.responsiveImage}
        />
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
});

export default CaptionGeneration;
