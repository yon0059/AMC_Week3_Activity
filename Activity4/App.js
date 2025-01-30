import React from 'react';
import { StyleSheet, TextInput, Image, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    age: '',
    address: '',
    school: '',
    course: '',
    email: '',
    contact: '',
    about: ''
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const icons = [
    {
      uri: 'https://icons.iconarchive.com/icons/custom-icon-design/silky-line-user/256/user-icon.png',
      field: 'name'
    },
    {
      uri: 'https://icons.iconarchive.com/icons/dakirby309/simply-styled/256/Calendar-icon.png',
      field: 'age'
    },
    {
      uri: 'https://icons.iconarchive.com/icons/iconsmind/outline/256/Location-2-icon.png',
      field: 'address'
    },
    {
      uri: 'https://icons.iconarchive.com/icons/amitjakhu/drip/256/graduation-icon.png',
      field: 'school'
    },
    {
      uri: 'https://th.bing.com/th/id/OIP.9Xc5Xn572bF6umgOImEi6wHaHa',
      field: 'course'
    },
    {
      uri: 'https://icons.iconarchive.com/icons/uiconstock/socialmedia/256/Email-icon.png',
      field: 'email'
    },
    {
      uri: 'https://icons.iconarchive.com/icons/iconsmind/outline/256/Telephone-icon.png',
      field: 'contact'
    }

  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            {icons.map((icon, index) => (
              <Image
                key={icon.field}
                source={{ uri: icon.uri }}
                style={styles.icon}
              />
            ))}
            <Image
              source={{
                uri: 'https://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Actions-help-about-icon.png'
              }}
              style={[styles.icon, styles.aboutIcon]}
            />
          </View>

          <View style={styles.column}>
            <TextInput
              style={styles.input}
              onChangeText={(value) => handleChange('name', value)}
              value={formData.name}
              placeholder="NAME:"
              placeholderTextColor="#666"
            />
            <TextInput
              style={styles.input}
              onChangeText={(value) => handleChange('age', value)}
              value={formData.age}
              placeholder="AGE:"
              keyboardType="numeric"
              placeholderTextColor="#666"
            />
            <TextInput
              style={styles.input}
              onChangeText={(value) => handleChange('address', value)}
              value={formData.address}
              placeholder="ADDRESS:"
              placeholderTextColor="#666"
            />
            <TextInput
              style={styles.input}
              onChangeText={(value) => handleChange('school', value)}
              value={formData.school}
              placeholder="SCHOOL:"
              placeholderTextColor="#666"
            />
            <TextInput
              style={styles.input}
              onChangeText={(value) => handleChange('course', value)}
              value={formData.course}
              placeholder="COURSE:"
              placeholderTextColor="#666"
            />
            <TextInput
              style={styles.input}
              onChangeText={(value) => handleChange('email', value)}
              value={formData.email}
              placeholder="EMAIL:"
              keyboardType="email-address"
              placeholderTextColor="#666"
            />
            <TextInput
              style={styles.input}
              onChangeText={(value) => handleChange('contact', value)}
              value={formData.contact}
              placeholder="CONTACT NO:"
              keyboardType="phone-pad"
              placeholderTextColor="#666"
            />
            <TextInput
              style={styles.textInput}
              onChangeText={(value) => handleChange('about', value)}
              value={formData.about}
              placeholder="ABOUT ME:"
              placeholderTextColor="#666"
              multiline
              numberOfLines={4}
              maxLength={140}
            />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  textInput: {
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    minHeight: 100,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    padding: 10,
  },
  column: {
    flex: 1,
    marginHorizontal: 10,
  },
  iconContainer: {
    marginBottom:5,
    marginTop: 10,
    marginLeft: 18,
  },
  icon: {
    top: 13,
    width: 40,
    height: 40,
    margin: 6,
  },
  aboutIcon: {
    marginTop: 50,
  }
});

export default TextInputExample;