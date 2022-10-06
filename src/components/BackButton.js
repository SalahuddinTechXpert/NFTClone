import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

const BackButton = ({ ...props }) => {
  return (
    <View style={styles.btnBox}>
      <TouchableOpacity onPress={props.onPress}>
        <Icon name={"arrow-back"} size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  btnBox: {
    width: "90%",
    height: 30,
    justifyContent: "center",
    marginTop: "8%",
  },
});
