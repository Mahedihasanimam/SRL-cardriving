import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';
import Header from './components/Header';
import { useNavigation } from '@react-navigation/native';
import { Stack } from 'expo-router';
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useActivityDropDownListQuery } from './redux/features/tripApis/TripApi';


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

const FormSection = ({ formData, setFormData, activityList }) => (
  <View style={tw`p-4`}>
   <View style={tw`p-4`}>
    <View style={tw`flex flex-row items-start justify-between gap-4`}>
      <Text style={tw`text-gray-700 font-bold text-[14px] mb-1`}>Activity:</Text>
      <View style={tw`font-bold text-lg border border-gray-300 rounded mb-3 w-[73%]`}>
        <Picker
          selectedValue={formData.activity}
          onValueChange={(value) => setFormData({ ...formData, activity: value })}
        >
          {activityList?.map((item, index) => (
            <Picker.Item key={index} label={item.item} value={item.item} />
          ))}
        </Picker>
      </View>
    </View>
  </View>

    <View style={tw`flex flex-row items-start justify-between gap-4`}>
      <Text style={tw`text-gray-700 font-bold text-[14px] mb-1`}>Location:</Text>
      <TextInput
        style={tw`font-bold text-lg border border-gray-300 p-3 rounded mb-3 w-[73%]`}
        placeholder="Enter Your Location (Google)"
        value={formData.location}
        onChangeText={(text) => setFormData({ ...formData, location: text })}
      />
    </View>

    <View style={tw`flex flex-row items-start justify-between gap-4`}>
      <Text style={tw`text-gray-700 font-bold text-[14px] mb-1`}>Current Time:</Text>
      <View style={tw`font-bold text-lg border border-gray-300 rounded mb-3 flex-1`}>
        <Picker
          selectedValue={formData.currentTime}
          onValueChange={(value) => setFormData({ ...formData, currentTime: value })}
        >
          <Picker.Item label="By default Current Timestamp" value="" />
        </Picker>
      </View>
    </View>

    <View style={tw`flex flex-row items-start justify-between gap-4`}>
      <Text style={tw`text-gray-700 font-bold text-[14px] mb-1`}>Choose:</Text>
      <View style={tw`flex flex-row items-start justify-between gap-4 w-[73%]`}>
        <View style={tw`font-bold text-lg border border-gray-300 rounded mb-3 flex-1`}>
          <Picker
            selectedValue={formData.tractor}
            onValueChange={(value) => setFormData({ ...formData, tractor: value })}
          >
            <Picker.Item label="Tractor" value="tractor" />
          </Picker>
        </View>
        <View style={tw`font-bold text-lg border border-gray-300 rounded mb-3 flex-1`}>
          <Picker
            selectedValue={formData.trailer}
            onValueChange={(value) => setFormData({ ...formData, trailer: value })}
          >
            <Picker.Item label="Trailer" value="trailer" />
          </Picker>
        </View>
      </View>
    </View>

    <View style={tw`flex flex-row items-start justify-between gap-4`}>
      <Text style={tw`text-gray-700 font-bold text-[14px] mb-1`}>Odometer:</Text>
      <TextInput
        style={tw`font-bold text-lg border border-gray-300 p-3 rounded w-[73%]`}
        placeholder="Enter Odometer Reading"
        value={formData.odometer}
        onChangeText={(text) => setFormData({ ...formData, odometer: text })}
      />
    </View>
  </View>
);

const HomeScreen = () => {
const [apikey, setApikey] = useState('');
  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if(!token){
        navigation.navigate('SignInPage');
      }
      if (token) {
       setApikey(token);
      }
    };

    checkToken();
  }, []);

const { data, isLoading, isError, error } = useActivityDropDownListQuery({apikey: apikey});
  

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

    setLoading(true); // Start loading state

    // Simulate a network request
    setTimeout(() => {
      setLoading(false); // Stop loading after 2 seconds
      navigation.navigate('AddTrip', { ...formData }); // Pass data to AddTrip page
    }, 2000);



if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (isError) {
    return <Text>something went wrong</Text>;
  }


  console.log('data----------', data?.activitylist);

  };

  return (
    <View style={tw`flex-1 bg-white`}>
        <Stack.Screen name="Home"  options={{ headerShown: false }} />
      <Header />
      <DateSection />
      <FormSection formData={formData} setFormData={setFormData} activityList={data?.data?.activitylist || []} />


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
