import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';
import ActivityPicker from './ActivityPicker';

const FormSection = ({ formData, setFormData, data }) => (
  <View style={tw`p-4`}>
    <View style={tw`flex flex-row items-start justify-between gap-4`}>
      <Text style={tw`text-gray-700 font-bold text-[14px] mb-1`}>Activity:</Text>
      <ActivityPicker
        selectedActivity={formData.activity}
        setSelectedActivity={(value) => setFormData({ ...formData, activity: value })}
        data={data}
      />
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
  </View>
);

export default FormSection;