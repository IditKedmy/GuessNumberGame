import {Button, View, StyleSheet, TextInput} from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";

export default function StartScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.numberInput} maxLength={2}/>
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: "#72063c",

    elevation: 4, // Android
    shadowColor: 'black', // iOS
    shadowOffset: {width: 0, height: 2}, // iOS
    shadowRadius: 6, // iOS
    shadowOpacity: 0.26, // iOS
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
