import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}>SRL</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>

                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>BANINDER PAL</Text>
                <TouchableOpacity style={{ padding: 2, borderColor: 'white', borderWidth: 1, borderRadius: 100, paddingLeft: 8, paddingRight: 8 }}>
                    <Text style={styles.menuIcon}>☰</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#29adf8', padding: 10 },
    logo: { fontSize: 20, fontWeight: 'bold', color: 'white' },
    userName: { fontSize: 16, color: 'white' },
    menuButton: { padding: 5 },
    menuIcon: { fontSize: 20, color: 'white' },

});

export default Header