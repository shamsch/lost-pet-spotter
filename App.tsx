import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AllPost from './src/screens/AllPost';
import PostView from './src/screens/PostView';
import AddPost from './src/screens/AddPost';
import SignUp from './src/screens/SignUp';
import Login from './src/screens/Login';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View>
      <StatusBar style='dark'></StatusBar>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="AllPost" component={AllPost} />
          <Stack.Screen name="PostDetail" component={PostView} />
          <Stack.Screen name="AddPost" component={AddPost} />
          <Stack.Screen name="SignIn" component={SignUp} />
          <Stack.Screen name="LogIn" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

