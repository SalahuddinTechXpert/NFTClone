import { StyleSheet, Image, TouchableOpacity, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES, FONTS } from "./../constants/theme";
import Icon from "react-native-vector-icons/MaterialIcons";
import FbIcon from "../Assets/Images/Facebook-Icon.png";
import GoogleIcon from "../Assets/Images/Google-Icon.png";

const ButtonTransparent = ({ ...props }) => {
  return (
    <TouchableOpacity style={styles.wholeBtn}>
      <Image
        style={styles.SocialIcon}
        source={props.text === "FaceBook" ? FbIcon : GoogleIcon}
      />
      <Text
        style={{
          alignSelf: "center",
          marginLeft: "8%",
          fontSize: SIZES.font,
          fontWeight: FONTS.semiBold,
          color: props.text === "FaceBook" ? "#1677F0" : COLORS.primary,
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonTransparent;

const styles = StyleSheet.create({
  wholeBtn: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: COLORS.primary,
    padding: 10,
    width: "45%",
    height: 50,
    borderRadius: 35,
  },
  SocialIcon: {
    borderRadius: 20,
    resizeMode: "contain",
    width: 30,
    height: 30,
    alignSelf: "center",
  },
});
