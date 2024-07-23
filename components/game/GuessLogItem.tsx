import {Colors} from "../../constants/colors";
import {View, StyleSheet, Text} from "react-native";

type Props = {
  value: number,
  roundNumber: number,
}

export default function GuessLogItem({value, roundNumber}: Props) {
  return (
    <View style={styles.guessLogItem}>
      <Text style={styles.guessLogText}>#{roundNumber} </Text>
      <Text style={styles.guessLogText}>Opponent's Guess: {value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  guessLogItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    marginVertical: 8,
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    backgroundColor: Colors.accent500,
    width: '100%',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 6,
    shadowOpacity: 0.26,
  },
  guessLogText: {
    fontFamily: 'open-sans',
    fontSize: 16,
  },
});