import { Platform } from 'react-native';

// Font family
const fontFamily = Platform.OS === 'ios' 
  ? {
      regular: 'System',
      medium: 'System',
      bold: 'System',
    }
  : {
      regular: 'Roboto',
      medium: 'Roboto_Medium',
      bold: 'Roboto_Bold',
    };

// Font sizes
const fontSize = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  title: 28,
  subtitle: 20,
  header: 18,
};

// Line heights
const lineHeight = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 28,
  xl: 32,
  xxl: 36,
  xxxl: 40,
};

// Font weights
const fontWeight = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
};

// Text styles
const textStyles = {
  header: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.title,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.xxxl,
  },
  subheader: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.subtitle,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.xl,
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.xxl,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.xxl,
  },
  subtitle: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.lg,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.lg,
  },
  body: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.md,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.md,
  },
  bodySmall: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.sm,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.sm,
  },
  button: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.md,
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.md,
  },
  caption: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.xs,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.xs,
  },
};

export default {
  fontFamily,
  fontSize,
  lineHeight,
  fontWeight,
  textStyles,
}; 