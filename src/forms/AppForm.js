import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

export default function AppForm({ route, navigation }) {



    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Item para comprar</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={() => { }}
                    placeholder="O que está faltando em casa?"
                    clearButtonMode="always"
                />

                <TextInput
                    style={styles.input}
                    onChangeText={() => { }}
                    placeholder="Digite a quantidade"
                    keyboardType={'numeric'}
                    clearButtonMode="always"
                />


                <TouchableOpacity style={styles.button} onPress={() => { }}>
                    <View style={styles.buttonContainer}>
                        <Icon name="save" size={22} color="white" />
                        <Text style={styles.buttonText}>Salvar</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <StatusBar style="light" />


        </View>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D93600',
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50,
    },
    inputContainer: {
        flex: 1,
        marginTop: 30,
        width: '90%',
        padding: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'stretch',
        backgroundColor: '#fff'
    },
    input: {
        marginTop: 10,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'stretch'
    },
    button: {
        marginTop: 10,
        height: 60,
        backgroundColor: 'blue',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 20,
        shadowOpacity: 20,
        shadowColor: '#ccc',
    },
    buttonContainer: {
        flexDirection: "row"
    },
    buttonText: {
        marginLeft: 10,
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    }
});