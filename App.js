import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>

      <TextInput placeholder="Troque o texto da tela aqui" style={styles.input} />
      <Text style={styles.text} >React Native</Text>
      <TouchableOpacity style={styles.trocar}>
        <Text style={styles.textButtons}>Trocar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.apagar}>
        <Text style={styles.textButtons}>Apagar tudo</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 15,
    backgroundColor: '#F5F5F5',
    width: 250,
    height: 36,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 7,
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 44,
    marginBottom: 100,

  },
  trocar: {
    backgroundColor: '#00C34E',
    width: 269,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: "#000",
    marginBottom: 20,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 5.65,
    
    elevation: 5,

  },
  textButtons: {
    color: 'white',
  },
  apagar: {
    backgroundColor: '#EE0D0D',
    width: 269,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 5.65,
    
    elevation: 5,

  },


});
