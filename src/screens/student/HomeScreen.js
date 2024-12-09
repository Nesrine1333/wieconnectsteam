





import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert, ImageBackground, Image
} from 'react-native';
import FooterNavigation from '../../components/Footer';



const mentors = [
  { id: '1', name: 'Dr. Alice Johnson', category: 'Math' },
  { id: '2', name: 'Mr. John Doe', category: 'Science' },
  { id: '3', name: 'Ms. Emily White', category: 'English' },
  { id: '4', name: 'Mr. Jake Black', category: 'Math' },
  { id: '5', name: 'Dr. Sarah Green', category: 'Science' },
  { id: '6', name: 'Dr. Clara Smith', category: 'Math' },
  { id: '7', name: 'Ms. Anna Bell', category: 'English' },
  { id: '8', name: 'Mr. Adam Grey', category: 'Science' },
  { id: '9', name: 'Ms. Lucy Brown', category: 'Math' },
  { id: '10', name: 'Mr. Chris Red', category: 'English' },
  { id: '11', name: 'Dr. Evelyn White', category: 'Science' },
  { id: '12', name: 'Mr. George Green', category: 'Math' },
  { id: '13', name: 'Ms. Fiona Blue', category: 'English' },
  { id: '14', name: 'Dr. Henry Gold', category: 'Science' },
];

const initialCategories = ['Math', 'Science','Technology','electronics'];

export default function HomeScreen({ navigation }) {
  const [categories, setCategories] = useState(initialCategories);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
const backgroundImage =require('../../../assets/backgound.png')
  const handleAddCategory = () => {
    if (newCategory.trim() === '') {
      Alert.alert('Error', 'Please enter a category name.');
      return;
    }
    if (categories.includes(newCategory.trim())) {
      Alert.alert('Error', 'Category already exists.');
      return;
    }
    setCategories([...categories, newCategory.trim()]);
    setNewCategory('');
  };

  const handleToggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const filteredMentors = mentors.filter((mentor) =>
    selectedCategories.length === 0 || selectedCategories.includes(mentor.category)
  );

  const renderCategoryTag = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.cardCat,
        {
          backgroundColor: selectedCategories.includes(item) ? '#95d100' : '#f2f0f3',
          borderColor: selectedCategories.includes(item) ? '#7D6E91' : '#e0e0e0',
        },
      ]}
      onPress={() => handleToggleCategory(item)}
    >
      <Image
        source={require(`../../../assets/loupe.png`)} // Update with actual icon file paths
        style={styles.cardIcon}
      />
      <Text
        style={[
          styles.cardText,
          { color: selectedCategories.includes(item) ? '#FFF' : '#3f1e93' },
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
  

  const renderMentorCard = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('BookingForm', { mentor: item })}
    >
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.category}>{item.category}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.containerGlobal}>
      <ImageBackground
  source={backgroundImage}
  style={styles.backgroundImage}
  imageStyle={styles.imageStyle} // Add this for ImageBackground-specific styling
>
  <View style={styles.containerSearch}>
  <Text style={styles.title}>Welcome Back !</Text>
    <Text style={styles.title}>What do you want to learn about today?</Text>

    {/* Add Category */}
    <View  style={styles.search}>
      <TextInput
       
        placeholder="Add a category"
        value={newCategory}
        onChangeText={setNewCategory}
        placeholderTextColor="#6f6d72"
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddCategory}>
      <Image
    source={require('../../../assets/loupe.png')} // Update the path based on your folder structure
    style={styles.addIcon}
  />
      </TouchableOpacity>
    </View>
  </View>
</ImageBackground>
    <View style={styles.container}>

      {/* Category Tags */}
      <FlatList
  data={categories}
  keyExtractor={(item, index) => index.toString()}
  renderItem={renderCategoryTag}
  horizontal
  contentContainerStyle={styles.tagContainer}
  showsHorizontalScrollIndicator={false}
/>


      {/* Mentor List */}
      <Text style={styles.subtitle}>Mentors:</Text>
      <FlatList
        data={filteredMentors}
        keyExtractor={(item) => item.id}
        renderItem={renderMentorCard}
        contentContainerStyle={styles.mentorList}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No mentors available for selected categories.</Text>
        }
      />
    </View>
     

      {/* Footer Navigation */}
      <FooterNavigation navigation={navigation} activeTab="Home" />

    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    overflow: 'hidden', // Ensure content respects the border radius
  },
  imageStyle: {
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40, // Match the radius to the parent
  },
  containerSearch: {

    justifyContent: 'center',
    marginBottom: 10,
    padding: 10,
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },search:{
    flexDirection: 'row',
  alignContent:'center',
  alignSelf:'center',
  width:350,
justifyContent:'space-between',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
 
  
    backgroundColor: '#ccc',
  },
addIcon: {
  width: 20, // Adjust the size based on your preference
  height: 20,

},
addButton: {
borderLeftWidth:1,
borderColor:'#9c87ad',
  padding: 10,
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 10,
},
  addButtonText: {
    color: '#fff',
  },
  containerGlobal: {
    flex: 1,
  marginTop:50,
    backgroundColor: '#F5F5F5',
  },
  container: {
    flex: 2,
  padding:20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 16,
    fontWeight: '200',
    fontFamily:'Poppins',
    color: '#c5c9c0',
    textAlign: 'left',
    marginBottom: 15,
  },
  
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#59426A',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
  addButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
 tagContainer: {
    justifyContent: 'space-between',
    backgroundColor:'red',
alignContent:'center',
alignItems:'flex-start',
alignSelf:'flex-start',
flex:1
  },
  cardCat: {
    width: 80, // Fixed width for all cards
    height: 80, // Fixed height for all cards
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom:40
  },
  cardIcon: {
    width: 40, // Icon size
    height: 40,
    marginBottom: 5,
  },
  cardText: {
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  // },textTag:{
    


  // },
  // tag: {

  //   alignContent:'center',
  //   alignItems:'center',
  //   alignSelf:'center',
  //   flexDirection:'column',
  //   textAlign:'center',
  //   borderRadius: 15,
  //   borderWidth: 1,
  //   borderColor: '#a4f307',
  //   marginRight: 10,
  // },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#59426A',
    marginBottom: 10,
  },
  mentorList: {
    flexGrow: 1,
  },
  card: {
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DDD',
    backgroundColor: '#FFF',
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#59426A',
  },
  category: {
    fontSize: 14,
    color: '#7D6E91',
  },
  emptyText: {
    textAlign: 'center',
    color: '#59426A',
    marginTop: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#3f2859',
    paddingVertical: 15,
    borderTopLeftRadius:12,
    borderTopRightRadius:12
  },
  footerButton: {
    alignItems: 'center',
  },
  footerText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});
