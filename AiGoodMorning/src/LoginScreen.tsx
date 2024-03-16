import React from 'react';
import { View } from 'react-native';
import { Button } from '@rneui/base';

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
      <Button title="登入"
      type="outline"
      size="lg"
      containerStyle={{
        width: 200,
        marginHorizontal: 50,
        marginVertical: 10,
      }}
      onPress={logIn} />
    </View>
  );
}

export default LoginScreen;