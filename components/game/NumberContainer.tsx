import {View, StyleSheet, Text} from "react-native";
import {Colors} from "../../constants/colors";

export default function NumberContainer({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent500,
    borderRadius: 8,
    padding: 24,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontSize: 36,
    color: Colors.accent500,
    fontFamily: "open-sans-bold",
  },
});
