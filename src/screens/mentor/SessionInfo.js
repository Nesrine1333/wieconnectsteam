import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/colors';

const { width, height } = Dimensions.get('window');

const MentorSessionDetails = ({ route, navigation, setModalVisible }) => {
  const { booking } = route.params; // Extract booking details
  const [selectedDate, setSelectedDate] = useState(booking.date); // Current date
  const [selectedTime, setSelectedTime] = useState(booking.time); // Current time
  const [isRescheduling, setIsRescheduling] = useState(false); // To toggle rescheduling inputs

  const handleReschedule = () => {
    if (isRescheduling) {
      if (!selectedDate || !selectedTime) {
        alert('Please select a new date and time.');
        return;
      }
      alert(`Session rescheduled to ${selectedDate} at ${selectedTime}`);
      setIsRescheduling(false); // Hide rescheduling inputs after submission
      setModalVisible(); // Close modal after rescheduling
    } else {
      setIsRescheduling(true); // Show rescheduling inputs
    }
  };

  const handleApprove = () => {
    alert('Session Approved!');
    setModalVisible(); // Close modal after approval
  };

  return (
    <View style={styles.overlay}>
      <View style={styles.popupContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Session Details</Text>
          <TouchableOpacity onPress={() => setModalVisible()} style={styles.closeButton}>
            <Icon name="close" size={24} color={colors.textDark} />
          </TouchableOpacity>
        </View>

        {/* Session Info */}
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Student: {booking.student}</Text>
          <Text style={styles.infoText}>Date: {selectedDate || 'Not selected'}</Text>
          <Text style={styles.infoText}>Time: {selectedTime || 'Not selected'}</Text>
        </View>

        {/* Rescheduling Inputs */}
        {isRescheduling && (
          <View style={styles.rescheduleContainer}>
            <Text style={styles.inputLabel}>New Date</Text>
            <TextInput
              style={styles.input}
              placeholder="YYYY-MM-DD"
              value={selectedDate}
              onChangeText={setSelectedDate}
            />
            <Text style={styles.inputLabel}>New Time</Text>
            <TextInput
              style={styles.input}
              placeholder="HH:MM AM/PM"
              value={selectedTime}
              onChangeText={setSelectedTime}
            />
          </View>
        )}

        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.availableButton]}
            onPress={handleReschedule}
          >
            <Icon name={isRescheduling ? 'check-circle' : 'accessibility'} size={24} color="#fff" />
            <Text style={styles.buttonText}>
              {isRescheduling ? 'Set Available' : 'Available'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.unavailableButton]}
            onPress={handleApprove}
          >
            <Icon name="cancel" size={24} color="#fff" />
            <Text style={styles.buttonText}>Unavailable</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupContainer: {
    width: width * 0.85,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textDark,
  },
  closeButton: {
    padding: 5,
  },
  infoContainer: {
    width: '100%',
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    color: colors.textDark,
    marginBottom: 10,
  },
  rescheduleContainer: {
    width: '100%',
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: colors.textDark,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    width: '100%',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    width: '48%',
  },
  availableButton: {
    backgroundColor: colors.secondary,
  },
  unavailableButton: {
    backgroundColor: colors.danger,
  },
  buttonText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#fff',
  },
});

export default MentorSessionDetails;
