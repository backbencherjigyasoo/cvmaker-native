import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function CVPage() {
  const [form, setForm] = useState<any>(null);

  const loadFormData = async () => {
    try {
      const savedData = await AsyncStorage.getItem('@cv_form_data');
      if (savedData) {
        setForm(JSON.parse(savedData));
      }
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  useEffect(() => {
    loadFormData();
  }, []);

  if (!form) return <Text style={{ padding: 20 }}>Loading...</Text>;

  const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.separator} />
      {children}
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.name}>{form.personal.name}</Text>
      <Text style={styles.contact}>{form.personal.email} | {form.personal.phone}</Text>

      <Section title="Summary">
        <Text style={styles.text}>{form.summary}</Text>
      </Section>

      <Section title="Education">
        {form.education.map((edu: any, index: number) => (
          <View key={index} style={styles.item}>
            <Text style={styles.boldText}>{edu.degree} - {edu.level}</Text>
            <Text>{edu.institute} ({edu.startYear} - {edu.endYear})</Text>
          </View>
        ))}
      </Section>

      <Section title="Experience">
        {form.experience.map((exp: any, index: number) => (
          <View key={index} style={styles.item}>
            <Text style={styles.boldText}>{exp.jobTitle} at {exp.company}</Text>
            <Text>{exp.startYear} - {exp.endYear}</Text>
            <Text>{exp.description}</Text>
          </View>
        ))}
      </Section>

      <Section title="Skills">
        {form.skills.map((skill: any, index: number) => (
          <View key={index} style={styles.item}>
            <Text style={styles.boldText}>{skill.groupName}</Text>
            <Text>{skill.items.join(', ')}</Text>
          </View>
        ))}
      </Section>

      <Section title="Projects">
        {form.projects.map((project: any, index: number) => (
          <View key={index} style={styles.item}>
            <Text style={styles.boldText}>{project.title}</Text>
            <Text>{project.description}</Text>
            <Text style={styles.link}>{project.link}</Text>
            <Text>Tech Stack: {project.techStack}</Text>
          </View>
        ))}
      </Section>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  contact: {
    fontSize: 14,
    marginTop: 4,
    marginBottom: 20,
    color: '#555',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  separator: {
    height: 2,
    backgroundColor: '#000',
    width: '100%',
    marginVertical: 6,
  },
  item: {
    marginBottom: 10,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  text: {
    fontSize: 14,
    color: '#333',
  },
  link: {
    color: 'blue',
  },
});
