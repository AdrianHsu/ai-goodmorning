import React from 'react';
import { View, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type GoogleLoginNavigationProp = NativeStackNavigationProp<any>;

type Props = {
  setIsUserLoggedIn: (value: boolean) => void; // Assuming setIsUserLoggedIn updates a boolean state\
  navigation: GoogleLoginNavigationProp;
};

const LoginScreen: React.FC<Props> = ({ navigation, setIsUserLoggedIn }) => {
  const logIn = () => {
    // Logic for logging in (authentication)
    // On successful login, setIsUserLoggedIn should be called with true
    setIsUserLoggedIn(true);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Log In" onPress={() => navigation.navigate('GoogleLogin')} />
    </View>
  );
}

export default LoginScreen;