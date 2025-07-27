import React, { useState } from 'react';
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

const CVForm = () => {
  const [step, setStep] = useState(1);

  const handlePrevious = () => {
    if (step <= 1) {
      Alert.alert('Warning', 'This is the first page');
      return;
    }
    setStep(prev => prev - 1);
  };

  const handleNext = () => {
    if (step >= 5) {
      Alert.alert('Warning', 'This is the last page');
      return;
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
          {step === 1 && <Personal />}
          {step === 2 && <Education />}
          {step === 3 && <Experience />}
          {step === 4 && <SkillsProjects />}
          {step === 5 && <Summary />}
        </ScrollView>

        <View style={styles.buttonContainer}>
          <Button title="Previous" onPress={handlePrevious} />
          <Button title="Next" onPress={handleNext} />
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
