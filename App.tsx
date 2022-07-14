import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AllPost from './src/screens/AllPost';
import PostView from './src/screens/PostView';
import AddPost from './src/screens/AddPost';
import SignUp from './src/screens/SignUp';
import Login from './src/screens/Login';
import IconButton from './src/components/UI/IconButton';
import 'react-native-gesture-handler';
import { Colors } from './src/utils/constant';

import { Provider } from 'react-native-paper';

const Stack = createStackNavigator();


export default function App() {
  return (
    <>
      <Provider>
        <StatusBar style="dark" />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="AllPost" component={AllPost} options={
              ({ navigation }) => (
                {
                  "title": "All Postings",
                  "headerStyle": {
                    "backgroundColor": Colors.secondaryDark,
                  },
                  headerRight: ({ tintColor }) => <IconButton icon="add" size={24} color={tintColor} onPress={() => navigation.navigate("AddPost")}></IconButton>
                }
              )
            } />
            <Stack.Screen name="PostDetail" component={PostView} />
            <Stack.Screen name="AddPost" component={AddPost} options={
              ({ navigation }) => (
                {
                  "title": "Add A Post",
                  "headerStyle": {
                    "backgroundColor": Colors.secondaryDark,
                  }
                }
              )
            } />
            <Stack.Screen name="SignIn" component={SignUp} />
            <Stack.Screen name="LogIn" component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

