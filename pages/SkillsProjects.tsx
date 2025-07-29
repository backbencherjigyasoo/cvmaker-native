import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import CustomButton from '../components/Button'; // adjust path if needed
import { CVFormData } from './types';

type SkillsProjectsProps = {
    form: CVFormData;
    setForm: React.Dispatch<React.SetStateAction<CVFormData>>;
}

const SkillsProjects = ({form, setForm}: SkillsProjectsProps) => {

  const handleSkillGroupChange = (index: number, value: string) => {
    const updated = [...form.skills];
    updated[index].groupName = value;
    setForm({...form, skills: updated});
  };

  const handleSkillItemChange = (groupIndex: number, itemIndex: number, value: string) => {
    const updated = [...form.skills];
    updated[groupIndex].items[itemIndex] = value;
    setForm({...form, skills: updated});
  };

  const addSkillGroup = () => {
    setForm({...form, skills: [...form.skills, { groupName: '', items: [''] }]});
  };

  const addSkillToGroup = (groupIndex: number) => {
    const updated = [...form.skills];
    updated[groupIndex].items.push('');
    setForm({...form, skills: updated});
  };

  const handleProjectChange = (
    index: number,
    key: keyof typeof form.projects[0],
    value: string
  ) => {
    const updated = [...form.projects];
    updated[index][key] = value;
    setForm({...form, projects: updated});
  };

  const addProject = () => {
    setForm({...form, projects: [
      ...form.projects,
      {
        title: '',
        description: '',
        techStack: '',
        link: '',
      },
    ]});
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Skills</Text>
      {form.skills.map((group, groupIndex) => (
        <View key={groupIndex} style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Skill Group (e.g. Frontend)"
            value={group.groupName}
            onChangeText={(text) => handleSkillGroupChange(groupIndex, text)}
          />
          {group.items.map((skill, itemIndex) => (
            <TextInput
              key={itemIndex}
              style={styles.input}
              placeholder={`Skill #${itemIndex + 1}`}
              value={skill}
              onChangeText={(text) => handleSkillItemChange(groupIndex, itemIndex, text)}
            />
          ))}
          <CustomButton label="+ Add Skill" onPress={() => addSkillToGroup(groupIndex)} />
        </View>
      ))}
      <CustomButton label="+ Add Skill Group" onPress={addSkillGroup} />

      <Text style={styles.heading}>Projects</Text>
      {form.projects.map((proj, index) => (
        <View key={index} style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Project Title"
            value={proj.title}
            onChangeText={(text) => handleProjectChange(index, 'title', text)}
          />
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Project Description"
            multiline
            numberOfLines={4}
            value={proj.description}
            onChangeText={(text) => handleProjectChange(index, 'description', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Tech Stack (e.g. React, Node.js)"
            value={proj.techStack}
            onChangeText={(text) => handleProjectChange(index, 'techStack', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Project Link"
            value={proj.link}
            onChangeText={(text) => handleProjectChange(index, 'link', text)}
          />
        </View>
      ))}
      <CustomButton label="+ Add Project" onPress={addProject} />
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
    marginVertical: 15,
    textAlign: 'center',
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#aaa',
    padding: 8,
    marginBottom: 10,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
});

export default SkillsProjects;
