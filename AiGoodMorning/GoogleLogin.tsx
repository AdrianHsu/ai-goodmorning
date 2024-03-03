import React from 'react';
import {db} from './firebaseConfig'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { View, Button } from 'react-native';

GoogleSignin.configure({
  webClientId: process.env.EXPO_PUBLIC_GOOGLE_API_OAUTH_CLIENT_ID,
});

const GoogleLogin: React.FC = () => {
  const writeToCollection = async () => {
    try {
      await db.collection('user').add({
        id: '4432713012',
        fullName: 'Adrian Hsu',
        // Add other fields as necessary
      });
      console.log('Document successfully written!');
    } catch (error) {
      console.error('Error writing document: ', error);
    }
  };

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Button title="Google Sign-In" onPress={signIn} />
    </View>
  );
}

export default GoogleLogin;
