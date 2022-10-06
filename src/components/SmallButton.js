import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, SIZES, FONTS} from './../constants/theme';
const SmallButton = ({...props}) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.wholeButton,
        {
          backgroundColor: props.backgroundColor,
          marginTop: props.marginTop ? props.marginTop : '8%',
          borderWidth: props.borderColor ? 1 : null,
          borderColor: props.borderColor ? props.borderColor : null,
          borderRadius: props.borderRadius ? props.borderRadius : 30,
        },
      ]}>
      <Text
        style={[
          styles.btnText,
          {color: props.color ? props.color : COLORS.white},
        ]}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default SmallButton;
const styles = StyleSheet.create({
  wholeButton: {
    width: '45%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    marginTop: '8%',
  },
  btnText: {
    fontWeight: FONTS.semiBold,
    fontSize: SIZES.medium,
  },
});
