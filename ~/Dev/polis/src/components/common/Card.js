import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../styles/colors';
import typography from '../../styles/typography';
import spacing from '../../styles/spacing';

/**
 * Card component for displaying content with image, title, description, and action button
 * 
 * Example usage:
 * <Card
 *   title="Card Title"
 *   description="Card description text"
 *   imageSource={require('../../../assets/images/placeholder.png')}
 *   onPress={() => console.log('Card pressed')}
 *   buttonText="View More"
 *   onButtonPress={() => console.log('Button pressed')}
 * />
 */
const Card = ({
  title,
  description,
  imageSource,
  onPress,
  buttonText,
  onButtonPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <Image 
        source={imageSource}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        {buttonText && (
          <TouchableOpacity 
            style={styles.button}
            onPress={onButtonPress || onPress}
          >
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: spacing.layout.borderRadius.medium,
    marginBottom: spacing.lg,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: spacing.layout.cardPadding,
  },
  title: {
    ...typography.textStyles.title,
    marginBottom: spacing.xs,
  },
  description: {
    ...typography.textStyles.body,
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: spacing.layout.borderRadius.small,
    alignSelf: 'flex-start',
  },
  buttonText: {
    ...typography.textStyles.button,
    color: 'white',
  },
});

export default Card; 