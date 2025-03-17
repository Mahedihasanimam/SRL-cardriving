import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Header from '../components/Header';
import tw from '@/assets/lib/tailwind';


const DateSection = () => (
    <View style={styles.dateContainer}>
        <Text style={styles.dateText}>Start Your Day</Text>
        <Text style={styles.dateText}>Wed Jan 29 2025</Text>
    </View>
);

const FormSection = () => (
    <View style={styles.formContainer}>
        <Text style={tw`text-4xl`}>Activity:</Text>
        <Picker style={styles.picker}>
            <Picker.Item label="Select (Start Duty/ End Duty)" value="" />
        </Picker>

        <Text style={styles.lavel}>Location:</Text>
        <TextInput style={styles.input} placeholder="Enter Your Location (Google)" />

        <Text style={styles.lavel}>Current Time:</Text>
        <Picker style={styles.picker}>
            <Picker.Item label="By default Current Timestamp" value="" />
        </Picker>

        <Text style={styles.lavel}>Choose:</Text>
        <View >
            <Picker style={styles.picker}>
                <Picker.Item label="Tractor" value="tractor" />
            </Picker>
            <Picker style={styles.picker}>
                <Picker.Item label="Trailer" value="trailer" />
            </Picker>
        </View>

        <Text style={styles.lavel}>Odometer:</Text>
        <TextInput style={styles.input} placeholder="Enter Odometer Reading" />
    </View>
);


const HomeScreen = () => (
    <View style={styles.container}>
        <Header/>
        <DateSection />
        <FormSection />
        <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', padding: 10,backgroundColor: '#f1f0f6'}}>Today's Trip Details</Text>
      
    </View>
);

const styles = StyleSheet.create({

    container: { flex: 1, backgroundColor: 'white' },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#29adf8', padding: 10 },
    logo: { fontSize: 20, fontWeight: 'bold', color: 'white' },
    userName: { fontSize: 16, color: 'white' },
    menuButton: { padding: 5 },
    menuIcon: { fontSize: 20, color: 'white' },
    dateContainer: { flexDirection: 'row', justifyContent: 'space-between', padding: 10, backgroundColor: '#f1f0f6' },
    dateText: { fontSize: 16, fontWeight: 'bold', color: '#3e3e40' },
    formContainer: { padding: 10 },
    picker: { backgroundColor:"#f1f0f6", borderColor: 'gray', borderWidth: 1, marginBottom: 10 },
    lavel: { fontSize: 14, fontWeight: '500', color: '#303030', marginBottom: 5 },
    input: { backgroundColor:"#f1f0f6", padding: 10, marginBottom: 10 },
    // row: { flexDirection: 'row', justifyContent: 'space-between' },
    bottomNav: { flexDirection: 'row', justifyContent: 'space-around', padding: 10, backgroundColor: 'white' },
    icon: { width: 30, height: 30 },
    
});

export default HomeScreen;
