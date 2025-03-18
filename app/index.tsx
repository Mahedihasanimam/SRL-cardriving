import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';
import Header from './components/Header';

const DateSection = () => (
    <View style={tw`flex-row justify-between p-3 font-bold text-lg bg-[#f1f0f6]`}>
        <Text style={tw`text-lg font-bold text-gray-700`}>Start Your Day</Text>
        <Text style={tw`text-lg font-bold text-gray-700`}>Wed Jan 29 2025</Text>
    </View>
);

const FormSection = () => (
    <View style={tw`p-4`}>

        <View style={tw`flex flex-row items-start justify-between gap-4`}>

            <Text style={tw`text-gray-700 font-bold text-[14px] mb-1`}>Activity:</Text>
            <View style={tw`font-bold text-lg border border-gray-300 rounded mb-3 w-[73%]`}>
                <Picker>
                    <Picker.Item label="Dhaka" value="dhaka" />
                    <Picker.Item label="london" value="london" />
                    <Picker.Item label="uk" value="uk" />
                    <Picker.Item label="india" value="india" />
                </Picker>
            </View>
        </View>

        <View style={tw`flex flex-row items-start justify-between gap-4`}>
            <Text style={tw`text-gray-700 font-bold text-[14px] mb-1`}>Location:</Text>
            <TextInput
                style={tw`font-bold text-lg border border-gray-300 p-3 rounded mb-3 w-[73%]`}
                placeholder="Enter Your Location (Google)"
            />
        </View>


        <View style={tw`flex flex-row items-start justify-between gap-4 `}>
            <Text style={tw`text-gray-700 font-bold text-[14px] mb-1`}>Current Time:</Text>
            <View style={tw`font-bold text-lg border border-gray-300 rounded mb-3 flex-1`}>
                <Picker>
                    <Picker.Item label="By default Current Timestamp" value="" />
                </Picker>
            </View>

        </View>



        <View style={tw`flex flex-row items-start justify-between gap-4`}>

            <Text style={tw`text-gray-700 font-bold text-[14px] mb-1`}>Choose:</Text>
            <View style={tw`flex flex-row items-start justify-between gap-4 w-[73%]`}>
                <View style={tw`font-bold text-lg border border-gray-300 rounded mb-3 flex-1`}>
                    <Picker>
                        <Picker.Item label="Tractor" value="tractor" />
                    </Picker>
                </View>
                <View style={tw`font-bold text-lg border border-gray-300 rounded mb-3 flex-1`}>
                    <Picker>
                        <Picker.Item label="Trailer" value="trailer" />
                    </Picker>
                </View>
            </View>
        </View>


        <View style={tw`flex flex-row items-center justify-between gap-4 `}>
            <Text style={tw`text-gray-700 font-bold text-[14px] mb-1`}>Odometer:</Text>
            <TextInput
                style={tw`font-bold text-lg border border-gray-300 p-3 rounded w-[73%]`}
                placeholder="Enter Odometer Reading"
            />
        </View>


    </View>
);

const HomeScreen = () => (
    <View style={tw`flex-1 bg-white`}>
        <Header />
        <DateSection />
        <FormSection />
        <Text style={tw`text-center bg-[#f1f0f6] p-3 font-bold text-lg`}>Today's Trip Details</Text>
    </View>
);

export default HomeScreen;
