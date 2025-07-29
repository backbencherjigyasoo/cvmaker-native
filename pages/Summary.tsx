import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, ScrollView } from 'react-native';
import { CVFormData } from './types';

type SummaryProps = {
  form: CVFormData;
  setForm: React.Dispatch<React.SetStateAction<CVFormData>>;
};

const Summary = ({ form, setForm }: SummaryProps) => {
  const handleChange = (text: string) => {
    setForm(prevForm => ({ ...prevForm, summary: text }));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Professional Summary</Text>
      <TextInput
        style={styles.textArea}
        placeholder="Write a brief summary about yourself..."
        value={form.summary}
        onChangeText={handleChange}
        multiline
        numberOfLines={10}
        textAlignVertical="top"
      />
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
    marginBottom: 10,
    textAlign: 'center',
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    minHeight: 120,
  },
});

export default Summary;
