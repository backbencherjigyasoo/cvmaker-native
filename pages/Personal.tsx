import { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, View, Image, Button, Text } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { CVFormData } from './types';

type PersonalProps = {
  form: CVFormData;
  setForm: React.Dispatch<React.SetStateAction<CVFormData>>;
};

const Personal: React.FC<PersonalProps> = ({ form, setForm }) => {
  const handleImagePick = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.5,
      },
      response => {
        if (!response.didCancel && response.assets && response.assets.length > 0) {
          handleChange('photo', response.assets[0].uri || '');
        }
      }
    );
  };

  const handleChange = (key: keyof CVFormData['personal'], value: string) => {
    setForm(prev => ({
      ...prev,
      personal: {
        ...prev.personal,
        [key]: value,
      },
    }));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        {form.personal.photo ? (
          <Image source={{ uri: form.personal.photo }} style={styles.image} />
        ) : (
          <View style={styles.placeholder} />
        )}
        <Button title="Select Profile Photo" onPress={handleImagePick} />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={form.personal.name}
        onChangeText={text => handleChange('name', text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={form.personal.email}
        onChangeText={text => handleChange('email', text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Phone"
        keyboardType="phone-pad"
        value={form.personal.phone}
        onChangeText={text => handleChange('phone', text)}
      />

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  placeholder: {
    width: 100,
    height: 100,
    backgroundColor: '#ccc',
    borderRadius: 50,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});

export default Personal;
