import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SignInPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={tw` bg-white `}>
      <Text style={tw`text-2xl font-semibold`}>Sign In</Text>
      <Text style={tw`text-gray-500 text-sm font-medium mt-2 mb-6`}>
        Welcome back! Please enter your credentials.
      </Text>

      <TextInput
        style={tw`border border-gray-300 rounded-lg px-2 mb-4 text-[16px] font-bold text-gray-600`}
        placeholder="Email"
        keyboardType="email-address"
      />

      <View style={tw`flex-row items-center border border-gray-300 rounded-lg p-1 mb-6`}>
        <TextInput
          style={tw`flex-1 text-[16px] px-2 font-bold text-gray-600`}
          placeholder="Password"
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity style={tw`px-2`} onPress={() => setPasswordVisible(!passwordVisible)}>
          <Ionicons name={passwordVisible ? "eye" : "eye-off"} size={24} color="gray" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")} style={tw`bg-[#29adf8] w-[70%] mx-auto py-3 shadow-lg rounded-lg items-center`}>
        <Text style={tw`text-white text-lg font-bold`}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInPage;
