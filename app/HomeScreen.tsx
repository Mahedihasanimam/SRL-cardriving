import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';
import Header from './components/Header';
import { useNavigation } from '@react-navigation/native';
import { Stack } from 'expo-router';
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useActivityDropDownListQuery, useTrucksandtailorsQuery } from './redux/features/tripApis/TripApi';
import FormSection from './components/FormSection';

const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('en-US', {
  weekday: 'short', // 'Mon'
  year: 'numeric', // '2025'
  month: 'short', // 'Jan'
  day: 'numeric', // '29'
});


const DateSection = () => (
  <View style={tw`flex-row justify-between p-3 font-bold text-lg bg-[#f1f0f6]`}>
    <Text style={tw`text-lg font-bold text-gray-700`}>Start Your Day</Text>
    <Text style={tw`text-lg font-bold text-gray-700`}>{formattedDate}</Text>
  </View>
);



const HomeScreen = () => {
  const [apikey, setApikey] = useState('');
  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        navigation.navigate('SignInPage');
      }
      if (token) {
        setApikey(token);
      }
    };

    checkToken();
  }, []);

  const { data, isLoading, isError, error } = useActivityDropDownListQuery({ apikey: apikey });
  const { data:truckandTailordata, isLoading:truckloading , isError:truckerror } = useTrucksandtailorsQuery({ apikey: apikey });
  const [formData, setFormData] = useState({
    activity: '',
    location: '',
    currentTime: '',
    tractor: '',
    trailer: '',
    odometer: '',
  });

  const [loading, setLoading] = useState(false); // Add loading state
  const navigation = useNavigation();

  const handleSubmit = () => {
    console.log(formData); // Log all form data

    if (!formData) {
      return Alert.alert('Please fill all the fields');
    }

    if(!formData.activity || !formData.location || !formData.currentTime || !formData.tractor || !formData.trailer || !formData.odometer){
      return Alert.alert('Please fill all the fields');
    }

    if(formData){
      navigation.navigate('AddTrip', { ...formData });
    }



    if (isLoading || truckloading) {
      return <Text>Loading...</Text>;
    }
    if (isError || truckerror) {
      return <Text>something went wrong</Text>;
    }


    console.log('data----------',truckandTailordata?.data);

  };

  return (
    <View style={tw`flex-1 bg-white`}>
      <Stack.Screen name="Home" options={{ headerShown: false }} />
      <Header />
      <DateSection />
      <FormSection formData={formData} setFormData={setFormData} activityList={data?.data?.activitylist || [] } trucklistandtailorlist={truckandTailordata?.data || []} />


      <View style={tw`flex flex-row items-center justify-end px-4`}>
        <TouchableOpacity
          style={tw`bg-[#29adf8] p-3 mb-4 rounded w-[40%]`}
          onPress={handleSubmit}
        >
          <Text style={tw`text-white text-center font-bold text-lg`}>Start Trip</Text>
        </TouchableOpacity>
      </View>

      {/* Display loading spinner */}
      {loading && (
        <View style={tw`absolute top-0 left-0 right-0 bottom-0 justify-center items-center bg-gray-500 opacity-50`}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      )}

      <Text style={tw`text-center bg-[#f1f0f6] p-3 font-bold text-lg`}>Today's Trip Details</Text>
      <Text style={tw`text-center bg-[#f1f0f6] p-3 font-bold text-lg`}>{apikey}</Text>



    </View>
  );
};

export default HomeScreen;
