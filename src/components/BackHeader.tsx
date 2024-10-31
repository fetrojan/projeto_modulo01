// src/components/BackHeader.js
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BackHeader({ navigation, title }) {
    return (
        <SafeAreaView style={styles.rowContainer}>

            <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
                <Text style={styles.headerText}>Voltar</Text>
            </View>
            </TouchableOpacity>
            <Text style={styles.headerText}>{title}</Text>
        
        </SafeAreaView>

    );
};


const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        backgroundColor: '#229c8c',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 90
    },
    headerText: {
        fontSize: 20,
        color: '#FFFFFF',
        marginRight: 10
    }
})