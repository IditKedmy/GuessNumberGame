import { Text, StyleSheet } from 'react-native';
import {JSX} from "react";

type Props = {
  children: string | JSX.Element;
}

export default function TitleIos({children}: Props) {
  return (
    <Text style={styles.title}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: 'white',
    textAlign: "center",
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    // borderWidth: Platform.select({android: 2, ios: 0}),
    // borderColor: 'white',
    // borderRadius: 8,
    padding: 12,
    maxWidth: '80%',
    width: 300,
  }
});
