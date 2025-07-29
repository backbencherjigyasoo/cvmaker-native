import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import CustomButton from '../components/Button';
import { CVFormData } from './types';

type ExperienceProps = {
  form: CVFormData;
  setForm: React.Dispatch<React.SetStateAction<CVFormData>>;
};

const Experience = ({ form, setForm }: ExperienceProps) => {
  const handleChange = (
    index: number,
    key: keyof (typeof form.experience)[0],
    value: string,
  ) => {
    const updated = [...form.experience];
    updated[index][key] = value;
    setForm({ ...form, experience: updated });
  };

  const addExperience = () => {
    setForm({
      ...form,
      experience: [
        ...form.experience,
        {
          jobTitle: '',
          company: '',
          startYear: '',
          endYear: '',
          description: '',
        },
      ],
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Work Experience</Text>

      {form.experience.map((exp, index) => (
        <View key={index} style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Job Title"
            value={exp.jobTitle}
            onChangeText={text => handleChange(index, 'jobTitle', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Company"
            value={exp.company}
            onChangeText={text => handleChange(index, 'company', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Start Year"
            keyboardType="numeric"
            value={exp.startYear}
            onChangeText={text => handleChange(index, 'startYear', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="End Year"
            keyboardType="numeric"
            value={exp.endYear}
            onChangeText={text => handleChange(index, 'endYear', text)}
          />
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="What did you do / learn in this role?"
            value={exp.description}
            onChangeText={text => handleChange(index, 'description', text)}
            multiline
            numberOfLines={4}
          />
        </View>
      ))}

      <CustomButton label="+ Add Experience" onPress={addExperience} />
    </ScrollView>
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
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    borderRadius: 8,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#aaa',
    marginBottom: 10,
    padding: 8,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
});

export default Experience;
