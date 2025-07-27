import {
  StyleSheet,
  Text,
  useColorScheme,
  View
} from 'react-native';
import RenderCV from './pages/RenderCV';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CVForm from './pages/CVForm';
import { RootStackParamList } from './pages/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={RenderCV}/>
        <Stack.Screen name="Form" component={CVForm}/>
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
