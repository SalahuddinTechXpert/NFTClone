import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, SIZES, FONTS} from './../constants/theme';

const Button = ({...props}) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.wholeButton}>
      <Text style={styles.btnText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  wholeButton: {
    width: '85%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    marginTop: '4%',
    borderRadius: 30,
  },
  btnText: {
    color: COLORS.white,
    fontWeight: FONTS.semiBold,
    fontSize: SIZES.medium,
  },
});
