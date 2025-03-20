import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useLoginUserMutation } from "../app/redux/features/users/UserApi"; // Correct import

// Type for navigation
type RootStackParamList = {
  HomeScreen: undefined;
};

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const navigation = useNavigation<ReactNavigation.NativeStackNavigationProp<RootStackParamList>>();


  const [loginUser, { isLoading, isError, error, data }] = useLoginUserMutation();

  // Form validation function
  const validateForm = (): boolean => {
    if (!email || !password) {
      Alert.alert("Validation Error", "Email and Password are required.");
      return false;
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Validation Error", "Please enter a valid email.");
      return false;
    }

    return true;
  };

  const handleSignIn = async () => {
    console.log("Sign In Button Pressed", email, password);
    try {
      const response = await loginUser({ email, password }).unwrap();
      console.log("Login Success:", response);
  
      // Check if response contains 'user' or any necessary data
      if (response && response.user) {
        // Proceed with the successful login
        console.log("User Data:", response.user);
      } else {
        // Show alert if user data is missing
        Alert.alert("Login Error", "User data is missing in the response.");
      }
  
    } catch (err) {
      console.error("Login Failed:", err);
      // Show alert in case of an error
      Alert.alert("Login Failed", "An error occurred while logging in. Please try again.");
    }
  };
  return (
    <View style={tw`bg-white`}>
      <Text style={tw`text-2xl font-semibold`}>Sign In</Text>
      <Text style={tw`text-gray-500 text-sm font-medium mt-2 mb-6`}>
        Welcome back! Please enter your credentials.
      </Text>

      <TextInput
        style={tw`border border-gray-300 rounded-lg px-2 mb-4 text-[16px] font-bold text-gray-600`}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <View style={tw`flex-row items-center border border-gray-300 rounded-lg p-1 mb-6`}>
        <TextInput
          style={tw`flex-1 text-[16px] px-2 font-bold text-gray-600`}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity style={tw`px-2`} onPress={() => setPasswordVisible(!passwordVisible)}>
          <Ionicons name={passwordVisible ? "eye" : "eye-off"} size={24} color="gray" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleSignIn} style={tw`bg-[#29adf8] w-[70%] mx-auto py-3 shadow-lg rounded-lg items-center`}>
        <Text style={tw`text-white text-lg font-bold`}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInPage;
