import {Text, StyleSheet} from "react-native";
import {Colors} from "../../constants/colors";

type Props = {
  children: string;
  style?: object;
}

export default function InstructionText({children, style}: Props) {
  return (
    <Text style={[styles.instructionText, style]}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    color: Colors.accent500,
    fontSize: 24,
  },
});