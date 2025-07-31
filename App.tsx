import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  StyleSheet
} from 'react-native';
import CVForm from './pages/CVForm';
import CVPage from './pages/CVPage';
import RenderCV from './pages/RenderCV';
import { RootStackParamList } from './pages/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={RenderCV}/>
        <Stack.Screen name="Form" component={CVForm}/>
        <Stack.Screen name="Your CV" component={CVPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
});

export default App;
