import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [textName, onChangeName] = React.useState('Name');
  const [textAge, onChangeAge] = React.useState('Age');
  const [textAddress, onChangeAddress] = React.useState('Address');
  const [textSchool, onChangeSchool] = React.useState('School');
  const [textCourse, onChangeCourse] = React.useState('Course');
  const [textEmail, onChangeEmail] = React.useState('Email');
  const [textContact, onChangeContact] = React.useState('Contact');
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView>

        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={textName}
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeAge}
          value={textAge}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAddress}
          value={textAddress}
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeSchool}
          value={textSchool}
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeCourse}
          value={textCourse}
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={textEmail}
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeContact}
          value={textContact}
        />


       
      </SafeAreaView>
    </SafeAreaProvider>
    
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInputExample;