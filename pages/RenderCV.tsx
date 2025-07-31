import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Image,
} from 'react-native';
import CustomButton from '../components/Button';
import { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const RenderCV = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.button_container}>
        <Pressable onPress={() => navigation.navigate('Form')}>
          <Text style={styles.button_text}>+</Text>
        </Pressable>
        <Text style={{ marginTop: 10 }}>Create or Edit CV</Text>
      </View>
      <View style={styles.cv_card}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Your CV')}
          style={styles.thumbnailWrapper}
        >
          <Image
            source={require('../assets/imageThumbnail.jpg')}
            style={styles.thumbnail}
            resizeMode="cover"
          />
          <View style={styles.overlay}>
            <Text style={styles.cardTitle}>Your CV</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10,
  },
  button_container: {
    width: '45%',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'gray',
    padding: 20,
    borderRadius: 10,
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  button_text: {
    fontSize: 50,
    textAlign: 'center',
    fontWeight: 400,
    color: 'white',
    backgroundColor: 'green',
    borderRadius: 10,
    width: 60,
    justifyContent: 'center',
  },
  cv_card: {
    width: '45%',
    marginLeft: 10,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0.2)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
    marginBottom: 20,
    height: '40%',
    zIndex: 1,
  },

  thumbnailWrapper: {
    width: '100%',
    height: '100%',
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  cardTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingVertical: 10,
    position: 'absolute',
    top: '45%',
    color: 'white',
    borderColor: 'black',
    textAlign: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // semi-transparent black
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
});
export default RenderCV;
