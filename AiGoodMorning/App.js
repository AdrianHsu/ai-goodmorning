import React, { useState, useEffect } from 'react';
import { View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import LoadingScreen from './LoadingScreen';
import ImageGeneration from './ImageGeneration';
import PublicGallery from './PublicGallery';
import CaptionGeneration from './CaptionGeneration';
import ExportImage from './ExportImage';

const Stack = createNativeStackNavigator();

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(null);

  // Effect hook to simulate checking login status on component mount
  useEffect(() => {
    const checkLoginStatus = async () => {
      // Simulate an API call to check if user is logged in
      const loggedInStatus = await fakeApiCallToCheckLogin();
      setIsUserLoggedIn(loggedInStatus);
    };

    checkLoginStatus();
  }, []);

  // const logIn = () => {
  //   // Logic for logging in (authentication)
  //   // On successful login, setIsUserLoggedIn should be called with true
  //   setIsUserLoggedIn(true);
  // };
  // Function to simulate logging out (setting the state to false)
  const logOut = () => {
    setIsUserLoggedIn(false);
  };

  const screenOptions = {
    headerRight: () => (
      <Button onPress={() => logOut()} title="Logout" color="#000" />
    ),
  };

  return (
    <NavigationContainer>
      {isUserLoggedIn === null ? (
        // Potentially some loading indicator while checking the auth status

        <Stack.Navigator>
          <Stack.Screen name="Loading" component={LoadingScreen} />
        </Stack.Navigator>
      ) : isUserLoggedIn ? (
        <>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen
            name="Adrian 的首頁"
            component={HomeScreen}
          />
          <Stack.Screen
            name="ImageGeneration"
            component={ImageGeneration}
          />
          <Stack.Screen
            name="PublicGallery"
            component={PublicGallery}
          />
          <Stack.Screen
            name="CaptionGeneration"
            component={CaptionGeneration}
          />
          <Stack.Screen
            name="ExportImage"
            component={ExportImage}
          />
        </Stack.Navigator>
        </>
      ) : (
        // Stack or screen for login
        <Stack.Navigator>
          <Stack.Screen name="Login" >
            {props => <LoginScreen {...props} setIsUserLoggedIn={setIsUserLoggedIn} />}
          </Stack.Screen>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

// Simulated API call
const fakeApiCallToCheckLogin = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // This could be replaced with actual logic to check login status
      resolve(false); // Simulating a logged-out user
    }, 1000);
  });
};

export default App;