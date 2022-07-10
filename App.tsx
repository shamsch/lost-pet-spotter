import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AllPost from './src/screens/AllPost';
import PostView from './src/screens/PostView';
import AddPost from './src/screens/AddPost';
import SignUp from './src/screens/SignUp';
import Login from './src/screens/Login';
import IconButton from './src/components/IconButton';
import 'react-native-gesture-handler';


const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="AllPost" component={AllPost} options={
            ({ navigation }) => (
              {
                "title": "All Post",
                headerRight: ({ tintColor }) => <IconButton icon="add" size={24} color={tintColor} onPress={() => navigation.navigate("AddPost")}></IconButton>
              }
            )
          } />
          <Stack.Screen name="PostDetail" component={PostView} />
          <Stack.Screen name="AddPost" component={AddPost} />
          <Stack.Screen name="SignIn" component={SignUp} />
          <Stack.Screen name="LogIn" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
}

