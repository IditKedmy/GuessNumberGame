import {View, StyleSheet} from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOverScreen({roundsNumber, userNumber, onRestart}) {
  return (
    <View style={styles.screen}>
      <Title>Game Over!</Title>
      <NumberContainer>Number was: {userNumber}</NumberContainer>
      <NumberContainer>Number of rounds: {roundsNumber}</NumberContainer>
      <PrimaryButton onPress={onRestart}>Restart Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
