import React, { useState } from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity, Modal, Text, Button    } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type PublicGalleryNavigationProp = NativeStackNavigationProp<any>;

type Props = {
  navigation: PublicGalleryNavigationProp;
};

const images = [
  { key: '1', source: require('../assets/mountain-2.png'), text: "我想要山水畫、有老鷹在飛、壯觀" },
  { key: '2', source: require('../assets/garden-2.png'), text: "我想要五彩繽紛的花園、還有水果" },
  { key: '3', source: require('../assets/newyear-3.png'), text:"我想要喜氣洋洋、有鞭炮跟舞龍舞獅" },
  { key: '4', source: require('../assets/mountain-2.png'), text: "我想要山水畫、有老鷹在飛、壯觀" },
  { key: '5', source: require('../assets/garden-2.png'), text: "我想要五彩繽紛的花園、還有水果" },
  { key: '6', source: require('../assets/newyear-3.png'), text:"我想要喜氣洋洋、有鞭炮跟舞龍舞獅" },
  { key: '7', source: require('../assets/mountain-2.png'), text: "我想要山水畫、有老鷹在飛、壯觀" },
  { key: '8', source: require('../assets/garden-2.png'), text: "我想要五彩繽紛的花園、還有水果" },
  { key: '9', source: require('../assets/newyear-3.png'), text:"我想要喜氣洋洋、有鞭炮跟舞龍舞獅" },
];

const PublicGallery: React.FC<Props> = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedText, setSelectedText] = useState('');

  const handlePress = (text: string) => {
    setSelectedText(text);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item.text)} style={styles.imageContainer}>
            <Image source={item.source} style={styles.image} />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.key}
        numColumns={2}
      />


      {/* Simple Modal Implementation */}
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>和 AI 說的話: 「{selectedText}」</Text>
            <Button title="下載" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const numColumns = 2;
const screenWidth = Dimensions.get('window').width;
const imageMargin = 2;
const imageSize = (screenWidth / numColumns) - (imageMargin * (numColumns + 1)) * numColumns;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    margin: imageMargin,
  },
  image: {
    width: imageSize,
    height: imageSize,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    margin: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default PublicGallery;
