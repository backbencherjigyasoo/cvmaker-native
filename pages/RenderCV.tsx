import { Text, View, StyleSheet } from 'react-native';
import CustomButton from '../components/Button';
import { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },
});
const RenderCV = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      {/* one button for creating cv that will open up the form */}
      {/* cards that will show up the different cv saved... */}
      <CustomButton
        label="Create New CV"
        onPress={() => navigation.navigate('Form')}
      />
    </View>
  );
};
export default RenderCV;
