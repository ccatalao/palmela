import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Image, 
  TouchableOpacity, 
  SafeAreaView,
  Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../styles/colors';
import typography from '../styles/typography';
import spacing from '../styles/spacing';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation();

  const sections = [
    {
      id: 'about',
      title: 'Sobre',
      description: 'Conheça a plataforma Roteiro de Conhecimento',
      icon: 'information-circle',
      screen: 'Sobre'
    },
    {
      id: 'publications',
      title: 'Publicações',
      description: 'Acesso a revistas científicas de acesso aberto',
      icon: 'book',
      screen: 'Publicações'
    },
    {
      id: 'projects',
      title: 'Projetos',
      description: 'Bases de dados e redes de conhecimento',
      icon: 'construct',
      screen: 'Projetos'
    },
    {
      id: 'funding',
      title: 'Financiamento',
      description: 'Programas de financiamento europeu',
      icon: 'cash',
      screen: 'Financiamento'
    },
    {
      id: 'municipio',
      title: 'Serviços Municipais',
      description: 'Recursos e serviços locais',
      icon: 'business',
      screen: 'Serviços'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image 
            source={require('../../assets/images/home/logo.png')} 
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.title}>Roteiro de Conhecimento</Text>
          <Text style={styles.subtitle}>Palmela</Text>
        </View>
        
        <View style={styles.introduction}>
          <Text style={styles.welcomeText}>
            Bem-vindo à plataforma integrada de recursos para o desenvolvimento urbano sustentável.
          </Text>
          <Text style={styles.descriptionText}>
            Explore recursos, publicações, projetos e serviços para apoiar o desenvolvimento 
            urbano sustentável no Município de Palmela.
          </Text>
        </View>
        
        <View style={styles.sectionsContainer}>
          {sections.map((section) => (
            <TouchableOpacity 
              key={section.id} 
              style={styles.sectionCard}
              onPress={() => navigation.navigate(section.screen)}
            >
              <View style={styles.sectionContent}>
                <Text style={styles.sectionTitle}>{section.title}</Text>
                <Text style={styles.sectionDescription}>{section.description}</Text>
                <View style={styles.sectionButton}>
                  <Text style={styles.sectionButtonText}>Explorar →</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © 2023 Roteiro de Conhecimento - Palmela
          </Text>
          <Text style={styles.footerText}>
            Desenvolvido pela Comissão de Ordenamento do Território, Urbanismo, 
            Reabilitação Urbana e Obras Públicas
          </Text>
        </View>
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
  logo: {
    width: 100,
    height: 100,
    marginBottom: spacing.sm,
  },
  title: {
    ...typography.textStyles.header,
    color: 'white',
    textAlign: 'center',
  },
  subtitle: {
    ...typography.textStyles.subtitle,
    color: 'white',
    marginTop: spacing.xs,
  },
  introduction: {
    padding: spacing.layout.screenPadding,
    alignItems: 'center',
  },
  welcomeText: {
    ...typography.textStyles.title,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  descriptionText: {
    ...typography.textStyles.body,
    textAlign: 'center',
  },
  sectionsContainer: {
    padding: spacing.layout.screenPadding,
  },
  sectionCard: {
    backgroundColor: colors.card,
    borderRadius: spacing.layout.borderRadius.medium,
    marginBottom: spacing.md,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionContent: {
    padding: spacing.layout.cardPadding,
  },
  sectionTitle: {
    ...typography.textStyles.title,
    marginBottom: spacing.xs,
  },
  sectionDescription: {
    ...typography.textStyles.body,
    marginBottom: spacing.md,
  },
  sectionButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: spacing.layout.borderRadius.small,
    alignSelf: 'flex-start',
  },
  sectionButtonText: {
    ...typography.textStyles.button,
    color: 'white',
  },
  footer: {
    padding: spacing.layout.screenPadding,
    backgroundColor: '#f8f9fa',
    marginHorizontal: spacing.layout.screenPadding,
    marginBottom: spacing.layout.screenPadding,
    borderRadius: spacing.layout.borderRadius.medium,
    alignItems: 'center',
  },
  footerText: {
    ...typography.textStyles.caption,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
});

export default HomeScreen; 