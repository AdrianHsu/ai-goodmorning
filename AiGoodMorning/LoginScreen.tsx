import React from 'react';
import { View, Button } from 'react-native';

// Define the props type
interface LoginScreenProps {
  setIsUserLoggedIn: (value: boolean) => void; // Assuming setIsUserLoggedIn updates a boolean state
}

const LoginScreen: React.FC<LoginScreenProps> = ({ setIsUserLoggedIn }) => {
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