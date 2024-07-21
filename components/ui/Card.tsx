import {View, StyleSheet} from "react-native";
import {Colors} from "../../constants/colors";

export default function Card({children}) {
  return (
    <View style={styles.card}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginTop: 36,
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