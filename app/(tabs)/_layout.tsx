import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { IconSymbol } from '@/app-example/components/ui/IconSymbol'
import { SvgXml } from 'react-native-svg'
import { carIcon } from '../components/icon'

const TabsLayout = () => {
    return (
        <>
            <StatusBar
                style="light"
                backgroundColor="#29adf8"
                translucent={false}
                hidden={false}
            />
            <Tabs screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
                <Tabs.Screen 
                    name="index"  
                    options={{
                        tabBarIcon: ({ color }) => (
                            <SvgXml xml={carIcon}/>
                        ),
                    }} 
                />
                <Tabs.Screen 
                    name="user" 
                    options={{
                        tabBarIcon: ({ color }) => (
                            <SvgXml xml={carIcon}/>
                        ),
                    }} 
                />
            </Tabs>
        </>
    )
}

export default TabsLayout
