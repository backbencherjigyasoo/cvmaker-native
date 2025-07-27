import {
  StyleSheet,
  Text,
  useColorScheme,
  View
} from 'react-native';
import CustomButton from './components/Button';


function App() {
  return (
    <View style={styles.container}>
      <Text>I am doing great</Text>
      <CustomButton label="Click me" onPress={() => console.log("I am clicked")}/>
        
    </View>
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
