import {View, StyleSheet, useWindowDimensions} from "react-native";
import {Colors} from "../../constants/colors";
import {JSX} from "react";

type Props = {
  children: JSX.Element | JSX.Element[],
}

export default function Card({children}: Props) {
  const {width} = useWindowDimensions();
  const isWide = width > 380;

  return (
    <View style={[styles.card, {marginTop: isWide ? 36 : 18}]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    alignItems: 'center',
    justifyContent: 'center',

    elevation: 4, // Android
    shadowColor: 'black', // iOS
    shadowOffset: {width: 0, height: 2}, // iOS
    shadowRadius: 6, // iOS
    shadowOpacity: 0.26, // iOS
  },
});