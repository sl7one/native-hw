import * as Font from 'expo-font';
import { LoginScreen } from './screens/auth/LoginScreen';
import { RegisterScreen } from './screens/auth/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PostsScreen } from './screens/main/PostsScreens';
import { ProfileScreen } from './screens/main/ProfileScreens';
import { CreateScreen } from './screens/main/CreateScreen';
import { useEffect, useState } from 'react';
import { AntDesign, Feather } from '@expo/vector-icons';
import { View } from 'react-native';

const options = {
   headerShown: false,
   presentation: 'transparentModal',
   animationTypeForReplace: 'push',
};

const tabOptions = {
   sceneContainerStyle: '',
   tabBarShowLabel: false,
};

export default function App() {
   const [fontsLoaded] = Font.useFonts({
      Manrope: require('./assets/fonts/Manrope-Regular.ttf'),
   });

   const [isAuthorize, setIsAuthorize] = useState(false);

   useEffect(() => {
      setIsAuthorize(true);
   }, []);

   if (!fontsLoaded) return;

   const Stack = createNativeStackNavigator();
   const Tab = createBottomTabNavigator();

   return (
      <NavigationContainer>
         {!isAuthorize ? (
            <Stack.Navigator>
               <Stack.Screen
                  options={options}
                  name="Register"
                  component={RegisterScreen}
               />
               <Stack.Screen
                  options={options}
                  name="Login"
                  component={LoginScreen}
               />
            </Stack.Navigator>
         ) : (
            <Tab.Navigator
               screenOptions={{
                  tabBarStyle: {
                     paddingBottom: 34,
                     paddingTop: 9,
                     height: 85,
                  },
               }}
            >
               <Tab.Screen
                  options={{
                     ...tabOptions,
                     tabBarIcon: () => (
                        <AntDesign
                           name="appstore-o"
                           size={24}
                           color="rgba(33, 33, 33, 0.8)"
                        />
                     ),
                  }}
                  name="Posts"
                  component={PostsScreen}
               />
               <Tab.Screen
                  options={{
                     ...tabOptions,
                     tabBarIcon: () => (
                        <View
                           style={{
                              width: 70,
                              height: 40,
                              borderRadius: 20,
                              backgroundColor: '#FF6C00',
                              justifyContent: 'center',
                              alignItems: 'center',
                           }}
                        >
                           <Feather
                              name="plus"
                              size={24}
                              color="white"
                           />
                        </View>
                     ),
                  }}
                  name="Create"
                  component={CreateScreen}
               />
               <Tab.Screen
                  options={{
                     ...tabOptions,
                     tabBarIcon: () => (
                        <Feather
                           name="user"
                           size={24}
                           color="rgba(33, 33, 33, 0.8)"
                        />
                     ),
                  }}
                  name="Profile"
                  component={ProfileScreen}
               />
            </Tab.Navigator>
         )}
      </NavigationContainer>
   );
}
