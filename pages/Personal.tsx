import { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, View, Image, Button } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const Personal = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    photo: "",
  });

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

  const handleChange = (key: string, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        {form.photo ? (
          <Image source={{ uri: form.photo }} style={styles.image} />
        ) : (
          <View style={styles.placeholder} />
        )}
        <Button title="Select Profile Photo" onPress={handleImagePick} />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={form.name}
        onChangeText={text => handleChange('name', text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={form.email}
        onChangeText={text => handleChange('email', text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Phone"
        keyboardType="phone-pad"
        value={form.phone}
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
