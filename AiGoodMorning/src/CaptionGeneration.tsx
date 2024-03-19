import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button } from '@rneui/base';

type CaptionGenerationNavigationProp = NativeStackNavigationProp<any>;

type Props = {
  navigation: CaptionGenerationNavigationProp;
};

const CaptionGeneration: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
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
          onPress={() => navigation.navigate('ExportImage')}
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
