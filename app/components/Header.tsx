import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const Header = () => {
    return (
        <View style={tw`flex-row justify-between items-center bg-[#29adf8]  p-3`}>
            <Text style={tw`text-2xl font-bold text-white`}>SRL</Text>

            <View style={tw`flex-row items-center gap-3`}>
                <Text style={tw`text-lg font-bold text-white`}>BANINDER PAL</Text>
                <TouchableOpacity style={tw` border border-white rounded-full px-[6px]`}>
                    <Text style={tw`text-white text-lg`}>☰</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Header;
