import React, {useRef, useState} from 'react';
import {
  Animated,
  StyleSheet,
  TextStyleSheet,
  Text,
  View,
  Alert,
  TouchableHighlight,
} from 'react-native';
import {
  BrushProperties,
  Canvas,
  CanvasControls,
  CanvasRef,
  DEFAULT_COLORS,
  DrawingTool,
} from '@benjeau/react-native-draw';
// import SignaturePad1 from "react-native-signature-pad";
import {COLORS, FONTS, SIZES, SHADOWS} from './../constants/theme';
import SignatureCapture from 'react-native-signature-capture';

import Button from './Button';
import {useSelector} from 'react-redux';
import DeliveredOrderImg from './../Helper/Services/DeliveredOrderImg';
import {decode} from 'base64-arraybuffer';
import axios from 'axios';
import Loader from './Loader';
import {baseUrl} from '../Helper/Config';

const SignaturePad = ({
  navigation,
  setSignatureImg,
  setSignature,
  setsigned,
  setSpinner,

  Spinner,

}) => {
  const [SignPic, setSignPic] = useState('');
  const [Dragged, setDragged] = useState(false);
  const DriverId = useSelector(state => state.DriverDetails.Data.id);
  const sign = useRef();
  const saveSign = () => {
    sign.current.saveImage();
    // setSignatureImg(Image);
  };
  const resetSign = () => {
    sign.current.resetImage();
    setDragged(false);
  };
  const _onSaveEvent = async result => {
    console.log('-----', result.encoded, result.pathName);
    const base64 = result.encoded;

    try {
      setSpinner(true);
      const body = {
        imageBinary: base64,
      };
      await axios
        .post(`${baseUrl}/api/upload/image`, body)
        .then(responce => {
          console.log(responce.data),
            setSignatureImg(responce.data.Location),
            setSignature(false),
            setsigned(true),
            setSpinner(false);
        })
        .catch(err => console.log(err.response), setSpinner(false));
    } catch (error) {
      console.log(error);
      setSpinner(false);
    }
  };

  const _onDragEvent = () => {
    // This callback will be called when the user enters signature
    console.log('dragged');
    setDragged(true);
  };
  return (
    <>
      <View
        style={{
          flex: 1,
          // flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          backgroundColor: COLORS.white,
          // margin: '2%',
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '90%',
            flexDirection: 'row',
            paddingHorizontal: 10,
            paddingVertical: 5,
            height: '8%',
          }}>
          <Text
            style={{
              color: COLORS.darkGray,
              fontSize: SIZES.extraLarge,
              fontWeight: FONTS.bold,
            }}>
            Sign here :
          </Text>
          <TouchableHighlight
            onPress={() => {
              resetSign();
            }}>
            <Text
              style={{
                color: COLORS.primary,
                fontSize: SIZES.extraLarge,
                fontWeight: FONTS.bold,
              }}>
              Clear
            </Text>
          </TouchableHighlight>
        </View>
        <View
          style={[
            {
              alignItems: 'center',
              height: '70%',
              width: '90%',
              borderWidth: 3,
              borderColor: COLORS.gray,
              ...SHADOWS.dark,
            },
          ]}>
          <SignatureCapture
            style={[
              {
                alignItems: 'center',
                height: '100%',
                width: '100%',
                borderWidth: 4,
                borderColor: COLORS.defaultBlack,
              },
            ]}
            ref={sign}
            onSaveEvent={_onSaveEvent}
            onDragEvent={_onDragEvent}
            saveImageFileInExtStorage={false}
            showNativeButtons={false}
            showTitleLabel={false}
            backgroundColor="#ffffff"
            strokeColor="#000000"
            minStrokeWidth={8}
            maxStrokeWidth={18}
            viewMode={'portrait'}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            paddingTop: '5%',
            width: '100%',
          }}>
          {/* <TouchableHighlight
            style={styles.buttonStyle}
            onPress={() => {
              saveSign();
            }}
          >
            <Text>Save</Text>
          </TouchableHighlight> */}
          {Dragged ? (
            <Button
              text="Done"
              onPress={() => {
                saveSign();
              }}
            />
          ) : null}
        </View>
      </View>
      {/* <Button title="Undo" onPress={() => handleUndo()} />
      <Button title="Clear" onPress={() => handleClear()} /> */}
    </>
  );
};

export default SignaturePad;

const styles = StyleSheet.create({
  signaturePad: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#eeeeee',
    margin: 10,
  },
});
