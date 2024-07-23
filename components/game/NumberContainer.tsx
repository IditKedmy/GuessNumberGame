import {View, StyleSheet, Text, useWindowDimensions} from "react-native";
import {Colors} from "../../constants/colors";
import {JSX} from "react";

type Props = {
  children: string | number | JSX.Element,
}

export default function NumberContainer({children}: Props) {
  const {width} = useWindowDimensions();
  const isWide = width > 380;

  return (
    <View style={[styles.container, {
      padding: width > 500 ? 10 : isWide ? 24 : 12,
      margin: width > 500 ? 12 : isWide ? 24 : 12,
    }
    ]}>
      <Text style={[styles.numberText, {fontSize: isWide ? 36 : 28}]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent500,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontFamily: "open-sans-bold",
  },
});
