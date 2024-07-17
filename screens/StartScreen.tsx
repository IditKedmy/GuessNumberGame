import {View, StyleSheet, TextInput, Alert} from "react-native";
import {useState} from "react";
import PrimaryButton from "../components/PrimaryButton";

export default function StartScreen({onStartGame}) {
  const [enteredNumber, setEnteredNumber] = useState('');

  function numberInputHandler(inputText: string) {
    setEnteredNumber(inputText);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [{text: 'Ok', style: 'destructive', onPress: resetInputHandler}]
      );
      return;
    }
    onStartGame(chosenNumber);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: '#3b021f',
    alignItems: 'center',
    justifyContent: 'center',

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
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  buttonContainer: {
    flex: 1,
  }
});
