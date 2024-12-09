import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import FooterMentor from '../../components/FooteMentor';
import MentorSessionDetails from '../mentor/SessionInfo'; // Import the modal component

const bookings = [
  { id: '1', student: 'Alice', date: '2024-12-10', time: '10:00 AM' },
  { id: '2', student: 'Bob', date: '2024-12-12', time: '2:00 PM' },
];

const MentorDashboardScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false); // Track modal visibility
  const [selectedBooking, setSelectedBooking] = useState(null); // Track selected booking

  // Show the modal and pass the selected booking
  const handleAcceptBooking = (booking) => {
    setSelectedBooking(booking);
    setModalVisible(true);
  };

  // Close the modal
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerList}>
        <Text style={styles.title}>Upcoming Bookings</Text>

        <FlatList
          contentContainerStyle={styles.contentContainer}
          data={bookings}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View>
                <Text style={styles.details}>Student: {item.student}</Text>
                <Text style={styles.details}>
                  Date: {item.date} | Time: {item.time}
                </Text>
              </View>

              <TouchableOpacity
                style={styles.button}
                onPress={() => handleAcceptBooking(item)} // Open modal on button click
              >
                <Text style={styles.buttonText}>Accept</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>


      {/* MentorSessionDetails Modal */}
      {modalVisible && (
        <MentorSessionDetails
          route={{ params: { booking: selectedBooking } }} // Pass the selected booking
          navigation={navigation}
          setModalVisible={closeModal} // Close modal on action
        />
      )}
      <FooterMentor navigation={navigation} activeTab="MentorDashboard" />

    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    backgroundColor: '#59426A',
    paddingVertical: 15,
    justifyContent: 'space-around',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerText: {
    color: '#F5F5F5',
    fontWeight: 'bold',
    fontSize: 16,
  },
  contentContainer: {
    justifyContent: 'flex-start',
  },
  containerList: {
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#a61a1a0',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  container: { flex: 1, backgroundColor: colors.background },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    backgroundColor: '#e6e6e600',
    color: colors.primary,
  },
  card: {
    width: '100%',
    flexDirection: 'row',
    textAlign: 'center',
    gap: 3,
    backgroundColor: colors.textLight,
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#cdd7c1',
  },
  details: {
    color: colors.textDark,
  },
  button: {
    backgroundColor: colors.secondary,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    textAlign: 'center',
  },
  buttonText: {
    color: colors.textLight,
    fontWeight: 'bold',
  },
});

export default MentorDashboardScreen;
