import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const mockUsers = {
    'mentor@example.com': { type: 'mentor' },
    'student@example.com': { type: 'student' },
  };





  const handleLogin = () => {
    // Simulate user roles based on email
    let userRole;
    if (email.toLowerCase() === 'admin@example.com') {
      userRole = 'admin';
    } else if (email.toLowerCase().includes('mentor')) {
      userRole = 'mentor';
    } else {
      userRole = 'student';
    }

    console.log(`Logged in as: ${userRole}`); // For testing

    navigation.navigate(userRole === 'mentor' ? 'HomeScreenAdmin' : userRole === 'student' ? 'Home' : 'Home' );
  };

  return (
    <View style={styles.backgroundContainer}>
      {/* Background Patterns */}
      <View style={styles.circlePattern}></View>
      <View style={styles.circlePattern2}></View>

      {/* Login Form */}
      <View style={styles.container}>
        <Image source={require('../../assets/wie_essths.png')} style={styles.logo} />
        <Text style={styles.title}>Welcome Back</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
       <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('signup')}>
          <Text style={styles.link}>Don’t have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: '#432E54', // Pastel base color
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  container: {
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly transparent white for contrast
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7D6E91',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#7D6E91',
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#F5F5F5',
  },
  button: {
    backgroundColor: '#7D6E91',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#F5F5F5',
    fontWeight: 'bold',
  },
  link: {
    color: '#7D6E91',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  circlePattern: {
    width: 150,
    height: 150,
    backgroundColor: '#59426A',
    borderRadius: 75,
    position: 'absolute',
    top: -50,
    left: -50,
    opacity: 0.6,
  },
  circlePattern2: {
    width: 200,
    height: 200,
    backgroundColor: '#7D6E91',
    borderRadius: 100,
    position: 'absolute',
    bottom: -60,
    right: -60,
    opacity: 0.5,
  },
});

export default LoginScreen;
