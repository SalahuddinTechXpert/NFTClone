export const COLORS = {
  primary: '#FF234B',
  secondary: '#C6C6C6',
  white: '#FFF',
  backgroundColor: '#F6F6F6',
  gray: '#B3B3B3',
  lightgray: '#E5E5E5',

  gray2: '#F6F6F6',
  black: '#000',
  defaultBlack: '#242420',
  darkGray: '#585858',
  defaultGray: '#9E9E9E',
  earnbox: '#E8E8E8',
  Green: '#00E733',
};

export const SIZES = {
  base: 8,
  small: 12,
  font: 13,
  medium: 16,
  large: 18,
  extraLarge: 24,
  extraLarge2: 28,
  HeadLarge: 32,
  HeadExtraLarge: 34,
  HeadExtraLarge2: 36,
};

export const FONTS = {
  bold: '700',
  semiBold: '600',
  medium: '500',
  regular: '400',
  light: '300',
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.71,
    shadowRadius: 1,
    elevation: 5,
  },
  redShadow: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.71,
    shadowRadius: 8,
    elevation: 6,
  },
  white: {
    shadowColor: COLORS.defaultBlack,
    shadowOffset: {height: 10},
    shadowOpacity: 0.5,
  },
};
