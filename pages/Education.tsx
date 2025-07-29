import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { CVFormData } from './types';

type EducationalProps = {
  form: CVFormData;
  setForm: React.Dispatch<React.SetStateAction<CVFormData>>;
};

const Education = ({ form, setForm }: EducationalProps) => {
  const addEducation = () => {
    const newEducation = [
      ...form.education,
      { level: 'Other', institute: '', degree: '', startYear: '', endYear: '' },
    ];
    setForm(prev => ({ ...prev, education: newEducation }));
  };

  const handleChange = (index: number, key: string, value: string) => {
    const updated = form.education.map((edu, i) =>
      i === index ? { ...edu, [key]: value } : edu
    );
    setForm(prev => ({ ...prev, education: updated }));
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={80}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Education</Text>

        {form.education.map((edu, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.levelTitle}>{edu.level}</Text>

            <TextInput
              style={styles.input}
              placeholder="Institute Name"
              value={edu.institute}
              onChangeText={text => handleChange(index, 'institute', text)}
            />

            <TextInput
              style={styles.input}
              placeholder="Degree / Board"
              value={edu.degree}
              onChangeText={text => handleChange(index, 'degree', text)}
            />

            <TextInput
              style={styles.input}
              placeholder="Start Year"
              keyboardType="numeric"
              value={edu.startYear}
              onChangeText={text => handleChange(index, 'startYear', text)}
            />

            <TextInput
              style={styles.input}
              placeholder="End Year / Present"
              value={edu.endYear}
              onChangeText={text => handleChange(index, 'endYear', text)}
            />
          </View>
        ))}

        <TouchableOpacity style={styles.addButton} onPress={addEducation}>
          <Text style={styles.addButtonText}>+ Add Education</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  card: {
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  levelTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Education;
