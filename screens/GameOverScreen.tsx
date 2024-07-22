import {View, StyleSheet, Image, Text} from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import {Colors} from "../constants/colors";

export default function GameOverScreen({roundsNumber, userNumber, onRestart}) {
  return (
    <View style={styles.screen}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/success.png')} style={styles.image}/>
      </View>
      <Text style={styles.summaryText}>
        Your phone needed
        <Text style={styles.highlight}> {roundsNumber} </Text>
        rounds to guess the number
        <Text style={styles.highlight}> {userNumber}</Text>
        .
      </Text>
      {/*<NumberContainer>Number was: {userNumber}</NumberContainer>*/}
      {/*<NumberContainer>Number of rounds: {roundsNumber}</NumberContainer>*/}
      <PrimaryButton onPress={onRestart}>Restart Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    marginVertical: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlight: {
    color: Colors.primary500,
    fontFamily: 'open-sans-bold',
  }
});
