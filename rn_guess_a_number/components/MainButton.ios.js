import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Colors from "../constants/colors";

const MainButton = (props) => {


  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={props.onPress} activeOpacity={0.6}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: { color: "white", fontFamily: "open-sans", fontSize: 18 },
  button: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
  },
  buttonContainer: { overflow: "hidden", borderRadius: 25 },
});

export default MainButton;
