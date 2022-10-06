import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import React from 'react';
import {COLORS} from './../constants/theme';
import Icon from 'react-native-vector-icons/Ionicons';

const InputText = ({...props}) => {
  return (
    <View style={styles.TextBox}>
      {props.Icon ? (
        <View style={styles.Icon1View}>
          <Icon
            name={`${props.Icon}`}
            size={18}
            color={COLORS.white}
            style={styles.Icons1}
          />
        </View>
      ) : null}
      <View style={styles.forInnerIcon}>
        <TextInput
          value={props.value}
          onChangeText={props.onChangeText}
          secureTextEntry={props.secureTextEntry}
          dataDetectorTypes={props.dataDetectorTypes}
          keyboardType={props.keyboardType}
          autoComplete={props.autoComplete}
          numberOfLines={props.numberOfLines}
          maxLength={props.maxLength}
          autoCorrect={props.autoCorrect}
          autoCapitalize={props.autoCapitalize}
          editable={props.editable}
          placeholder={props.placeholder}
          placeholderTextColor={COLORS.gray}
          style={styles.InputText}
        />

        {props.Icon2 ? (
          <TouchableOpacity
            onPress={props.onPressIcon2}
            style={styles.Icon2Touch}>
            <Icon
              name={`${props.Icon2}`}
              size={20}
              color={COLORS.secondary}
              style={styles.Icons2}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  TextBox: {
    borderColor: `${COLORS.primary}`,
    flexDirection: 'row',
    borderWidth: 1,
    width: '85%',
    borderRadius: 90,
    height: 50,
    paddingLeft: '3%',
    marginTop: '5%',
    overflow: 'hidden',
  },
  Icon1View: {
    alignSelf: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    marginLeft: '-1%',
  },
  InputText: {
    padding: 8,
    marginLeft: 8,
    width: '100%',
    color: COLORS.defaultBlack,
  },
  forInnerIcon: {
    flexDirection: 'row',
    width: '75%',
  },
  Icons1: {
    borderRadius: 18,
    padding: 8,
    alignSelf: 'center',
    backgroundColor: COLORS.primary,
    overflow: 'hidden',
  },
  Icons2: {
    borderRadius: 25,
    padding: 5,
    alignSelf: 'center',
    backgroundColor: COLORS.white,
  },
  Icon2Touch: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
