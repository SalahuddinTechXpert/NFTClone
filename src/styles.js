import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS, SIZES} from './constants/theme';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;
const styles = StyleSheet.create({
  chatbox: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  chatboxTextes: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    justifyContent: 'space-around',
    height: Height / 16,
    alignItems: 'center',
    zIndex: 100,
  },
  textInputContainer: {
    width: Width / 1.02,
    paddingHorizontal: 20,
    height: Height / 15,
    backgroundColor: COLORS.lightgray,

    justifyContent: 'center',
    flexDirection: 'row',
  },
  IconImage: {
    width: '95%',
    height: '75%',
    resizeMode: 'contain',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textOver: {
    color: COLORS.darkGray,
    fontSize: SIZES.large,
    fontWeight: FONTS.semiBold,
  },
});

export default styles;
