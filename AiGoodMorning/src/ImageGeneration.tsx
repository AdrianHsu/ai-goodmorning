import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button } from '@rneui/base';

type ImageGenerationNavigationProp = NativeStackNavigationProp<any>;

type Props = {
  navigation: ImageGenerationNavigationProp;
};

const ImageGeneration: React.FC<Props> = ({ navigation }) => {
  const [text, setText] = useState(''); // State to hold the text input value

  return (
    <View style={{ flex: 1, justifyContent: 'space-between' }}>

      <View style={styles.messageContainer}>
        <Image
          source={require('../assets/face.png')}
          style={styles.profilePhoto}
        />
        <View style={styles.bubble}>
          <Text style={styles.bubbleText}>想做什麼風格的圖？</Text>
        </View>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="我想要山水畫、有老鷹在飛、壯觀"
          onPress={() => navigation.navigate('CaptionGeneration')}
          type="outline"
          size="lg"
          containerStyle={styles.buttonContainer}
        />
        <Button
          title="我想要喜氣洋洋、有鞭炮跟舞龍舞獅"
          onPress={() => navigation.navigate('CaptionGeneration')}
          type="outline"
          size="lg"
          containerStyle={styles.buttonContainer}
        />
        <Button
          title="我想要五彩繽紛的花園、還有水果"
          onPress={() => navigation.navigate('CaptionGeneration')}
          type="outline"
          size="lg"
          containerStyle={styles.buttonContainer}
        />
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setText}
          value={text}
          placeholder="或者自己寫，按這裡開始打字......"
          placeholderTextColor="grey"
        />
        <Button
          title="送出"
          onPress={() => {
            // Handle the send action (e.g., update state, navigate, etc.)
            console.log('Text to send:', text);
            setText(''); // Clear text input after sending
            navigation.navigate('CaptionGeneration')
          }}
          type="solid"
          size="md"
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
  buttonContainer: {
    width: 200,
    marginHorizontal: 50,
    marginVertical: 10,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    height: 40,
    flex: 1,
    marginRight: 10,
    paddingLeft: 10,
  },
});

export default ImageGeneration;
