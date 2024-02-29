import React, { useState, useEffect, ReactElement } from 'react';
import { View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

// Importing components and assuming these are also converted to TypeScript
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import LoadingScreen from './LoadingScreen';
import ImageGeneration from './ImageGeneration';
import PublicGallery from './PublicGallery';
import CaptionGeneration from './CaptionGeneration';
import ExportImage from './ExportImage';
import { app, analytics } from './firebaseConfig'; // Adjust the path as necessary

// Define the type for the stack navigator (if you have params, they should be defined here)
export type RootStackParamList = {
  HomeScreen: undefined;
  ImageGeneration: undefined;
  PublicGallery: undefined;
  CaptionGeneration: undefined;
  ExportImage: undefined;
  Loading: undefined;
  Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): ReactElement {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const loggedInStatus: boolean = await fakeApiCallToCheckLogin();
      setIsUserLoggedIn(loggedInStatus);
    };

    checkLoginStatus();
  }, []);

  const logOut = (): void => {
    setIsUserLoggedIn(false);
  };

  const screenOptions = {
    headerRight: () => (
      <Button onPress={logOut} title="Logout" color="#000" />
    ),
  };

  return (
    <NavigationContainer>
      {isUserLoggedIn === null ? (
        <Stack.Navigator>
          <Stack.Screen name="Loading" component={LoadingScreen} />
        </Stack.Navigator>
      ) : isUserLoggedIn ? (
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ImageGeneration" component={ImageGeneration} />
          <Stack.Screen name="PublicGallery" component={PublicGallery} />
          <Stack.Screen name="CaptionGeneration" component={CaptionGeneration} />
          <Stack.Screen name="ExportImage" component={ExportImage} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={(props) => <LoginScreen {...props} setIsUserLoggedIn={setIsUserLoggedIn} />} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

const fakeApiCallToCheckLogin = (): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(false);
    }, 1000);
  });
};

export default App;