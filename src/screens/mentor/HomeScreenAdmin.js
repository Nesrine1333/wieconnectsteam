import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import FooterMentor from '../../components/FooteMentor';


const HomeScreenAdmin = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <View style={styles.backgroundContainer}>
      {/* Background Patterns */}
      <View style={styles.circlePattern}></View>
      <View style={styles.circlePattern2}></View>

      {/* Main Content */}
      <View style={styles.container}>
        {/* Calendar */}
        <Calendar
          style={styles.calendar}
          onDayPress={(day) => setSelectedDate(day.dateString)}
          markedDates={{
            [selectedDate]: {
              selected: true,
              selectedColor: '#e0ead4', // Match the pastel theme
            },
          }}
          theme={{
            textDayFontWeight: 'bold',
            todayTextColor: '#e0ead4',
            arrowColor: '#e0ead4',
            backgroundColor: '#e0ead4',
          }}
        />

        {/* Book a Session Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('MentorDashboard')}
        >
          <Text style={styles.buttonText}>Check the list</Text>
        </TouchableOpacity>
      </View>

      {/* Footer Navigation */}
      <FooterMentor navigation={navigation} activeTab="HomeScreenAdmin" />

    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: '#e0ead4', // Base pastel background
    position: 'relative',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  circlePattern: {
    width: 150,
    height: 150,
    backgroundColor: '#59426a79',
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
  container: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center',    // Center content horizontally
    padding: 20,
    marginBottom: 100, // To prevent footer from overlapping
  },
  calendar: {
    borderWidth: 1,
    borderColor: '#59426a79',
    borderRadius: 8,
    width: '350', // Increase the width
    // Explicitly set a larger height
    marginBottom: 20,
    backgroundColor: '#ffffff',
  },
  button: {
    backgroundColor: '#7D6E91',
    padding: 15,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#F5F5F5',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#d4d1d7',
    paddingVertical: 15,
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderRadius:10
  },
  footerButton: {
    alignItems: 'center',
  },
  footerText: {
    color: '#51603e',
    fontWeight: 'bold',
    fontSize: 16,
  },
  activeButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#F5F5F5',
  },
  activeText: {
    color: '#51603e',
  },
});

export default HomeScreenAdmin;
