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
import projectsData from '../data/projects.json';

const ProjectsScreen = () => {
  const projects = projectsData.projects;

  const openURL = (url) => {
    // In a real app, you'd use Linking.openURL(url)
    console.log(`Opening URL: ${url}`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => openURL(item.url)}
      >
        <Image 
          source={require('../../assets/images/projects/placeholder.png')} // Replace with actual image
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.imageOverlay}>
          <Text style={styles.overlayText}>Visitar Website →</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
        <View style={styles.buttonContainer}>
          {item.features.map((feature, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={() => openURL(feature.featureURL)}
            >
              <Text style={styles.buttonText}>{feature.feature}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Redes de Projetos Europeus</Text>
        </View>
        
        <View style={styles.introduction}>
          <Text style={styles.introText}>
            <Text style={styles.featureBold}>Projetos europeus</Text> – resultados e boas práticas
          </Text>
          <Text style={styles.introText}>
            <Text style={styles.featureBold}>Bases de dados de conhecimento</Text> – em ordenamento do territorio e desenvolvimento urbano
          </Text>
          <Text style={styles.introText}>
            <Text style={styles.featureBold}>Redes de contactos</Text> – Partilha de experiências e soluções entre cidades europeias
          </Text>
          <Text style={styles.introText}>
            <Text style={styles.featureBold}>Ferramentas e metodologias</Text> – Recursos práticos para projetos urbanos
          </Text>
        </View>
        
        <FlatList
          data={projects}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          scrollEnabled={false} // Disable scrolling of FlatList since it's inside ScrollView
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
    marginBottom: spacing.md,
  },
  introText: {
    ...typography.textStyles.body,
    marginBottom: spacing.sm,
  },
  featureBold: {
    ...typography.textStyles.body,
    fontWeight: typography.fontWeight.bold,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: spacing.layout.borderRadius.medium,
    marginHorizontal: spacing.layout.screenPadding,
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
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0, // Hidden by default
  },
  overlayText: {
    color: 'white',
    ...typography.textStyles.button,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: spacing.layout.borderRadius.small,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
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
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: spacing.layout.borderRadius.small,
    marginBottom: spacing.sm,
  },
  buttonText: {
    ...typography.textStyles.button,
    color: 'white',
  },
});

export default ProjectsScreen; 