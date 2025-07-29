import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Personal from './Personal';
import Education from './Education';
import Experience from './Experience';
import SkillsProjects from './SkillsProjects';
import Summary from './Summary';
import CustomButton from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const predefinedLevels = ['Post Graduation', 'Graduation', '12th', '10th'];

const CVForm = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    personal: {
      name: '',
      email: '',
      phone: '',
      photo: '',
    },
    education: predefinedLevels.map(level => ({
      level,
      institute: '',
      degree: '',
      startYear: '',
      endYear: '',
    })),
    experience: [
      {
        jobTitle: '',
        company: '',
        startYear: '',
        endYear: '',
        description: '',
      },
    ],
    skills: [
      {
        groupName: '',
        items: [''],
      }
    ],
    projects:[
      {
        title: '',
        description: '',
        techStack: '',
        link: '',
      },
    ],
    summary: "",

  });



  useEffect(() => {
    loadFormData();
  }, [])

  const handlePrevious = () => {
    if (step <= 1) {
      Alert.alert('Warning', 'This is the first page');
      return;
    }
    setStep(prev => prev - 1);
  };

  const saveFormData = async () => {
    try {
      await AsyncStorage.setItem('@cv_form_data', JSON.stringify(form));
      Alert.alert('Success', 'Form data saved locally.');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const loadFormData = async () => {
    try {
      const savedData = await AsyncStorage.getItem('@cv_form_data');
      if (savedData) {
        setForm(JSON.parse(savedData));
        Alert.alert('Success', 'Form data loaded from local storage.');
      } else {
        Alert.alert('Info', 'No saved form data found.');
      }
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };
  

  const handleNext = () => {
    if (step >= 5) {
     saveFormData();
    }
    setStep(prev => prev + 1);
  };

  return (
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.formArea}>
          {step === 1 && <Personal form={form} setForm={setForm} />}
          {step === 2 && <Education form={form} setForm={setForm} />}
          {step === 3 && <Experience form={form} setForm={setForm} />}
          {step === 4 && <SkillsProjects form={form} setForm={setForm}/>}
          {step === 5 && <Summary form={form} setForm={setForm}/>}
        </ScrollView>

        <View style={styles.buttonContainer}>
          <CustomButton label="Previous" onPress={handlePrevious} />
          <CustomButton label={step === 5 ? "Finish and Save" : "Next"} onPress={handleNext} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    position: 'relative',
  },
  formArea: {
    padding: 20,
    paddingBottom: 100, // to prevent form from hiding behind buttons
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
});

export default CVForm;
