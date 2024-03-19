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
    <View style={{flex : 1}}>
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