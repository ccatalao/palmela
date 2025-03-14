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

// Import funding data
import fundingData from '../data/funding.json';

const FundingScreen = () => {
  const openURL = (url) => {
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
              : require('../../assets/images/funding/placeholder.png')
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
            <Text style={styles.featuresTitle}>Áreas de Financiamento:</Text>
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
          <Text style={styles.title}>Financiamento</Text>
        </View>
        
        <View style={styles.introduction}>
          <Text style={styles.sectionTitle}>Programas de Financiamento Europeu</Text>
          <Text style={styles.paragraph}>
            Acesso a programas de financiamento europeu para desenvolvimento urbano 
            sustentável, coesão territorial e inovação urbana.
          </Text>
          <Text style={styles.paragraph}>
            Estes programas oferecem oportunidades de financiamento para projetos 
            que promovam a sustentabilidade urbana, a inclusão social e a inovação 
            no desenvolvimento territorial.
          </Text>
        </View>
        
        <FlatList
          data={fundingData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          scrollEnabled={false} // Disable scrolling since it's inside a ScrollView
          contentContainerStyle={styles.fundingList}
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
  fundingList: {
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

export default FundingScreen; 