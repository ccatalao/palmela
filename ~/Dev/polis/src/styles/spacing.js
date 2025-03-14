// Spacing system for consistent layout

const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
};

// Layout constants
const layout = {
  screenPadding: spacing.md,
  cardPadding: spacing.md,
  borderRadius: {
    small: 4,
    medium: 8,
    large: 12,
  },
  iconSize: {
    small: 16,
    medium: 24,
    large: 32,
  },
  buttonHeight: 48,
  inputHeight: 48,
  headerHeight: 56,
  tabBarHeight: 56,
};

export default {
  ...spacing,
  layout,
}; 