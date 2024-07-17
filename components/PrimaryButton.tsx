import {Pressable, Text, View, StyleSheet} from "react-native";

export default function PrimaryButton({children, onPress}) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{color: '#640233'}}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    // alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    // fontSize: 16,
    // fontWeight: 'bold',
  },
  pressed: {
    opacity: 0.75,
  }
});
