import React from 'react';
import { View, Button } from 'react-native';

function LoginScreen({setIsUserLoggedIn}) {
  const logIn = () => {
    // Logic for logging in (authentication)
    // On successful login, setIsUserLoggedIn should be called with true
    setIsUserLoggedIn(true);
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Log In" onPress={logIn} />
    </View>
  );
}

export default LoginScreen;