import {StyleSheet, Text, View} from 'react-native';
import {StatusBar} from "expo-status-bar/build/StatusBar";
import StartScreen from "./screens/StartScreen";

export default function App() {
  return <StartScreen/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

