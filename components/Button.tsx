import { Text, TouchableOpacity, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  btn: {
    width: '90%',
    padding: 10,
    backgroundColor: "#4CAF50",
    alignItems: "center",
    borderRadius: 6
  },
  text:{
    color: "white",
    fontWeight: "bold"
  }
});

type CustomButtonProps = {
  label: String;
  onPress?: () => void;
};

const CustomButton = ({ label, onPress }: CustomButtonProps) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};
export default CustomButton;
