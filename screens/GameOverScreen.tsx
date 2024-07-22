import {View, StyleSheet, Image, Text, useWindowDimensions} from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import {Colors} from "../constants/colors";

export default function GameOverScreen({roundsNumber, userNumber, onRestart}) {
  const {width} = useWindowDimensions();
  const isWide = width > 380;

  return (
    <View style={styles.screen}>
      <Title>Game Over!</Title>
      <View style={[styles.imageContainer, {
        width: isWide ? 300 : 150,
        height: isWide ? 300 : 150,
        borderRadius: isWide ? 150 : 75,}]}>
        <Image
          source={require('../assets/images/success.png')}
          style={styles.image}/>
      </View>
      <Text style={styles.summaryText}>
        Your phone needed
        <Text style={styles.highlight}> {roundsNumber} </Text>
        rounds to guess the number
        <Text style={styles.highlight}> {userNumber}</Text>
        .
      </Text>
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
