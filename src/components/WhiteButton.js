import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "./../constants/theme";

const WhiteButton = ({ ...props }) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.wholeButton}>
      <Text style={styles.btnText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default WhiteButton;

const styles = StyleSheet.create({
  wholeButton: {
    width: 221,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
    marginTop: "8%",
    borderRadius: 30,
  },

  btnText: {
    color: COLORS.primary,
    fontWeight: FONTS.semiBold,
    fontSize: SIZES.medium,
  },
});
