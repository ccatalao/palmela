// This is the migrated version of the web component to React Native
// It demonstrates how to convert HTML/CSS to React Native components

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../styles/colors';
import typography from '../../styles/typography';
import spacing from '../../styles/spacing';

function FeatureCard({ title, description, imageSource, screenName }) {
  const navigation = useNavigation();
  
  return (
    <View style={styles.featureCard}>
      <Image 
        source={imageSource}
        style={styles.featureImage}
        resizeMode="cover"
      />
      <View style={styles.featureContent}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <TouchableOpacity 
          style={styles.featureButton}
          onPress={() => navigation.navigate(screenName)}
        >
          <Text style={styles.buttonText}>Ver mais</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  featureCard: {
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
  featureImage: {
    width: '100%',
    height: 200,
  },
  featureContent: {
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
  featureButton: {
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

export default FeatureCard; 