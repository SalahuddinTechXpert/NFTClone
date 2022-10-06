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
import Button from './Button';
import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/Ionicons';
import {messaging} from '@react-native-firebase/messaging';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;
const FeedBack = ({
  name,
  setModelvisible,
  onPress,
  color,
  message,
  title,
  ...props
}) => {
  const [modalVisible, setModalVisible] = useState(true);
  const [feedBack, setFeedBack] = useState('');
  const [Rates, setRates] = useState(0);
  const [onSubmit, setonSubmit] = useState(true);

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        opacity={0.7}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(true);
        }}>
        <View opacity={1} style={AlertStyle.centeredView}>
          <View opacity={1} style={[AlertStyle.modalView]}>
            {onSubmit ? (
              <>
                <View style={[AlertStyle.skipBtn]}>
                  <Pressable
                    TouchableHighlight={false}
                    style={[AlertStyle.skipBtn]}
                    onPress={() => {
                      // setModalVisible(!modalVisible);
                      // props.setShowFeedBack(!props.ShowFeedBack);
                      onPress;
                    }}>
                    <Text style={[AlertStyle.textStyle, {color: COLORS.gray}]}>
                      Skip
                    </Text>
                  </Pressable>
                </View>
                <TextInput
                  value={'Feedback for restaurant'}
                  editable={false}
                  style={[
                    AlertStyle.TextInputText,
                    {marginTop: Platform.OS === 'ios' ? '10%' : '0%'},
                  ]}
                />
                <View style={{width: '100%', marginTop: '3%'}}>
                  <View style={AlertStyle.ratingStars}>
                    <Text style={{color: COLORS.gray}}>Rate us</Text>
                    <StarRating
                      disabled={false}
                      maxStars={5}
                      rating={Rates}
                      starSize={20}
                      // emptyStar={'ios-star'}
                      // fullStar={'ios-star'}
                      // halfStar={'ios-star-half'}
                      // iconSet={'Ionicons'}
                      starStyle={{color: COLORS.primary}}
                      fullStarColor={COLORS.primary}
                      selectedStar={rating => setRates(rating)}
                    />
                  </View>
                  <View style={AlertStyle.inputTextBox}>
                    <View
                      style={[
                        AlertStyle.dividerLine,
                        {borderBottomWidth: feedBack === '' ? 1 : 0},
                      ]}>
                      <TextInput
                        placeholder={'Write a review'}
                        value={feedBack}
                        placeholderTextColor={COLORS.gray}
                        multiline={true}
                        onChangeText={text => setFeedBack(text)}
                        style={{
                          paddingBottom: -10,
                          color: COLORS.defaultBlack,
                        }}
                      />
                    </View>
                  </View>
                </View>
                <View style={AlertStyle.submitBtn}>
                  <Button
                    text="Submit"
                    onPress={() => {
                      setonSubmit(false);
                    }}
                  />
                </View>
              </>
            ) : (
              <View style={AlertStyle.feedBackResponse}>
                <View style={AlertStyle.checkIcon}>
                  <Icon name="checkmark-sharp" size={60} color={COLORS.white} />
                </View>
                <Text style={AlertStyle.feedBackhead}>
                  Thanks for your feedback
                </Text>
                <Text style={AlertStyle.feedBacktext}>
                  Your feedback will help us to improve overself
                </Text>
                <Button text="ok" onPress={onPress} />
              </View>
            )}
          </View>
        </View>
      </Modal>
    </>
  );
};

export default FeedBack;
const AlertStyle = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -3,
    backgroundColor: 'rgba(1,1,1,0.599)',
    opacity: 1,
  },
  modalView: {
    margin: 10,
    width: Width / 1.2,
    height: Height / 2.3,
    backgroundColor: COLORS.white,
    borderRadius: 16,
    paddingHorizontal: 18,
    opacity: 1,
    zIndex: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  skipBtn: {
    width: '95%',
    alignItems: 'flex-end',
    marginTop: -2,
  },
  textStyle: {
    color: COLORS.defaultBlack,
    fontWeight: FONTS.medium,
    textAlign: 'center',
    margin: Platform.OS === 'ios' ? '5%' : '-1%',
    fontSize: SIZES.medium,
  },
  modalText: {
    marginBottom: 0,
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
  feedBackhead: {
    color: COLORS.defaultBlack,
    fontSize: SIZES.medium,
    fontWeight: FONTS.bold,
  },
  feedBacktext: {
    color: COLORS.gray,
    fontSize: SIZES.medium,
    fontWeight: FONTS.semiBold,
    textAlign: 'center',
  },
  checkIcon: {
    width: 65,
    height: 65,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    ...SHADOWS.light,
  },
  feedBackResponse: {
    width: '100%',
    height: '80%',
    alignSelf: 'center',
    justifySelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ratingStars: {
    flexDirection: 'row',
    width: '85%',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  inputTextBox: {
    borderWidth: 1,
    width: '95%',
    height: 140,
    borderColor: COLORS.gray,
    borderRadius: 15,
    padding: 2,
    alignSelf: 'center',
    // justifyContent: 'space-between',
  },
  dividerLine: {
    borderColor: COLORS.gray,
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  submitBtn: {
    flexDirection: 'row',
    // alignSelf: 'flex-end',
    // marginTop: '1%',
  },
});
