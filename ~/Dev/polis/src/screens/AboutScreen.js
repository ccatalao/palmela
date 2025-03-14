import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../styles/colors';
import typography from '../styles/typography';
import spacing from '../styles/spacing';

const AboutScreen = () => {
  const navigation = useNavigation();

  const sections = [
    {
      id: 'publications',
      title: 'Publicações Científicas',
      description: 'Acesso a revistas científicas de acesso aberto em:',
      items: [
        'Urbanismo e Reabilitação Urbana',
        'Planeamento Territorial',
        'Arquitetura'
      ],
      screen: 'Publicações',
      buttonText: 'Explorar Publicações →'
    },
    {
      id: 'projects',
      title: 'Projetos Europeus',
      description: 'Bases de dados e redes de conhecimento sobre:',
      items: [
        'Resultados e boas práticas',
        'Desenvolvimento urbano',
        'Redes de contactos europeus'
      ],
      screen: 'Projetos',
      buttonText: 'Ver Projetos →'
    },
    {
      id: 'funding',
      title: 'Financiamento',
      description: 'Programas de financiamento europeu para:',
      items: [
        'Desenvolvimento urbano sustentável',
        'Coesão territorial',
        'Inovação urbana'
      ],
      screen: 'Financiamento',
      buttonText: 'Explorar Financiamento →'
    },
    {
      id: 'municipio',
      title: 'Serviços Municipais',
      description: 'Recursos e serviços locais em:',
      items: [
        'Reabilitação Urbana',
        'Planeamento Territorial',
        'Habitação',
        'Centro Histórico'
      ],
      screen: 'Serviços',
      buttonText: 'Aceder aos Serviços →'
    }
  ];

  const renderSection = (section) => (
    <View key={section.id} style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{section.title}</Text>
        <Text style={styles.cardDescription}>{section.description}</Text>
        <View style={styles.listContainer}>
          {section.items.map((item, index) => (
            <View key={index} style={styles.listItem}>
              <View style={styles.bullet} />
              <Text style={styles.listItemText}>{item}</Text>
            </View>
          ))}
        </View>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate(section.screen)}
        >
          <Text style={styles.buttonText}>{section.buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Sobre</Text>
        </View>
        
        <View style={styles.introduction}>
          <Text style={styles.sectionTitle}>Roteiro de Conhecimento</Text>
          <Text style={styles.paragraph}>
            Roteiro de Conhecimento é uma plataforma integrada de recursos essenciais 
            para o desenvolvimento urbano sustentável.
          </Text>
          <Text style={styles.paragraph}>
            A plataforma foi criada pela Comissão de Ordenamento do Território, Urbanismo, Reabilitação Urbana e Obras Públicas no âmbito do seu trabalho na Assembleia Municipal de Palmela.
          </Text>
          <Text style={styles.paragraph}>
            Foi desenvolvida para apoiar cidadãos, decisores políticos e todos os interessados nas área do urbanismo, planeamento territorial e reabilitação urbana no Município de Palmela.
          </Text>
          <Text style={styles.paragraph}>
            A plataforma está em constante actualização e melhoria, pelo que se reserva o direito de fazer alterações e adições a qualquer momento.
          </Text>

          <Text style={styles.sectionTitle}>O que oferecemos:</Text>
        </View>
        
        <View style={styles.sectionsContainer}>
          {sections.map(renderSection)}
        </View>

        <View style={styles.footer}>
          <Text style={styles.sectionTitle}>Como utilizar</Text>
          <Text style={styles.paragraph}>
            Navegue pelas diferentes secções através do menu principal. Cada área oferece recursos 
            específicos e ferramentas práticas para apoiar o desenvolvimento urbano sustentável de Palmela.
          </Text>
          <Text style={styles.paragraph}>
            Todos os recursos são de acesso aberto e incluem acesso direto às fontes originais.
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
    marginTop: spacing.md,
    marginBottom: spacing.sm,
  },
  paragraph: {
    ...typography.textStyles.body,
    marginBottom: spacing.md,
  },
  sectionsContainer: {
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
  cardContent: {
    padding: spacing.layout.cardPadding,
  },
  cardTitle: {
    ...typography.textStyles.title,
    marginBottom: spacing.xs,
  },
  cardDescription: {
    ...typography.textStyles.body,
    marginBottom: spacing.sm,
  },
  listContainer: {
    marginBottom: spacing.md,
  },
  listItem: {
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
  listItemText: {
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
  footer: {
    padding: spacing.layout.screenPadding,
    backgroundColor: '#f8f9fa',
    marginHorizontal: spacing.layout.screenPadding,
    marginBottom: spacing.layout.screenPadding,
    borderRadius: spacing.layout.borderRadius.medium,
  },
});

export default AboutScreen; 