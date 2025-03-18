import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';

const Header = () => {
    const navigation = useNavigation();
    return (
        <View style={tw`flex-row justify-between items-center bg-[#29adf8]  p-2`}>
            <Image source={require('../../assets/images/companylogo_srl.png')} />

            <View style={tw`flex-row items-center gap-3`}>
                <Text style={tw`text-lg font-bold text-white`}>BANINDER PAL</Text>
                <TouchableOpacity  onPress={() => navigation.dispatch(DrawerActions.openDrawer())} style={tw` border border-white rounded-full px-[6px]`}>
                    <Text style={tw`text-white text-lg`}>☰</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Header;
