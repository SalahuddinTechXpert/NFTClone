import {
  View,
  Text,
  StyleSheet,
  Modal,
  Pressable,
  TextInput,
  Platform,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';

import Entypo from 'react-native-vector-icons/Entypo';
import {COLORS, FONTS, SIZES, SHADOWS} from './../constants/theme';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;
const AlertModal = ({
  name,
  setModelvisible,
  onPress,
  color,
  message,
  title,
  ...props
}) => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        // opacity={0.7}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View opacity={0.9} style={AlertStyle.centeredView}>
          <View style={[AlertStyle.modalView]}>
            {/* <View
              style={{ borderWidth: 1, borderColor: color, borderRadius: 20 }}
            >
            //   {/* <Entypo name={name} color={color} size={24} /> 
            </View> */}
            <TextInput
              value={'Remove profile photo ?'}
              editable={false}
              style={[
                AlertStyle.TextInputText,
                {marginTop: Platform.OS === 'ios' ? '10%' : '1%'},
              ]}
            />
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                marginTop: '0%',
              }}>
              <Pressable
                style={[AlertStyle.button, AlertStyle.buttonClose]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  props.setShowModal(!props.showModal);
                }}>
                <Text style={[AlertStyle.textStyle, {color: COLORS.gray}]}>
                  Cancel
                </Text>
              </Pressable>
              <Pressable
                style={[AlertStyle.button, AlertStyle.buttonClose]}
                onPress={onPress}>
                <Text style={[AlertStyle.textStyle, {color: COLORS.primary}]}>
                  Remove
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default AlertModal;
const AlertStyle = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    opacity: 0.9,
  },
  modalView: {
    margin: 5,
    width: Width / 1.2,
    height: Height / 7,
    backgroundColor: COLORS.white,

    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 5,
    opacity: 1,
    zIndex: 100,
  },

  textStyle: {
    color: COLORS.defaultBlack,
    fontWeight: FONTS.medium,
    textAlign: 'center',
    margin: Platform.OS === 'ios' ? '5%' : '2%',
    fontSize: SIZES.medium,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: COLORS.defaultBlack,
  },
  TextInputText: {
    color: COLORS.defaultBlack,
    fontSize: SIZES.medium,
    fontWeight: FONTS.bold,
  },
  TextInputText1: {
    color: COLORS.defaultBlack,
    fontSize: 14,
  },
  button: {
    marginTop: '8%',
    // backgroundColor: black,
  },
});
