import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Image, 
  TouchableOpacity, 
  SafeAreaView,
  FlatList,
  Linking
} from 'react-native';
import colors from '../styles/colors';
import typography from '../styles/typography';
import spacing from '../styles/spacing';

// Import publications data
import publicationsData from '../data/publications.json';

const PublicationsScreen = () => {
  const openURL = (url) => {
    // For now, just log the URL - in a real app, we would use Linking.openURL
    console.log('Opening URL:', url);
    if (url) {
      Linking.openURL(url).catch(err => console.error('Error opening URL:', err));
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image 
          source={
            item.imageUrl 
              ? { uri: item.imageUrl } 
              : require('../../assets/images/publications/placeholder.png')
          }
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
        
        {item.features && item.features.length > 0 && (
          <View style={styles.featuresContainer}>
            <Text style={styles.featuresTitle}>Características:</Text>
            {item.features.map((feature, index) => (
              <View key={index} style={styles.featureItem}>
                <View style={styles.bullet} />
                <Text style={styles.featureText}>{feature}</Text>
              </View>
            ))}
          </View>
        )}
        
        <TouchableOpacity 
          style={styles.button}
          onPress={() => openURL(item.url)}
        >
          <Text style={styles.buttonText}>Aceder →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Publicações Científicas</Text>
        </View>
        
        <View style={styles.introduction}>
          <Text style={styles.sectionTitle}>Revistas Científicas de Acesso Aberto</Text>
          <Text style={styles.paragraph}>
            Acesso a revistas científicas de acesso aberto nas áreas de Urbanismo, 
            Planeamento Territorial e Reabilitação Urbana.
          </Text>
          <Text style={styles.paragraph}>
            Estas publicações são essenciais para o desenvolvimento de políticas 
            baseadas em evidências e para a implementação de boas práticas no 
            desenvolvimento urbano sustentável.
          </Text>
        </View>
        
        <FlatList
          data={publicationsData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          scrollEnabled={false} // Disable scrolling since it's inside a ScrollView
          contentContainerStyle={styles.publicationsList}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: spacing.layout.screenPadding,
    backgroundColor: colors.primary,
    alignItems: 'center',
  },
  title: {
    ...typography.textStyles.header,
    color: 'white',
    marginBottom: spacing.xs,
  },
  introduction: {
    padding: spacing.layout.screenPadding,
  },
  sectionTitle: {
    ...typography.textStyles.title,
    marginBottom: spacing.sm,
  },
  paragraph: {
    ...typography.textStyles.body,
    marginBottom: spacing.md,
  },
  publicationsList: {
    padding: spacing.layout.screenPadding,
    paddingTop: 0,
  },
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
  imageContainer: {
    height: 200,
    width: '100%',
    backgroundColor: '#f0f0f0',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  cardContent: {
    padding: spacing.layout.cardPadding,
  },
  cardTitle: {
    ...typography.textStyles.title,
    marginBottom: spacing.xs,
  },
  cardDescription: {
    ...typography.textStyles.body,
    marginBottom: spacing.md,
  },
  featuresContainer: {
    marginBottom: spacing.md,
  },
  featuresTitle: {
    ...typography.textStyles.subtitle,
    marginBottom: spacing.xs,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: spacing.xs,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.primary,
    marginTop: 8,
    marginRight: spacing.sm,
  },
  featureText: {
    ...typography.textStyles.body,
    flex: 1,
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

export default PublicationsScreen; 