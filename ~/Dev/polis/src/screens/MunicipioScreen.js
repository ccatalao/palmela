import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Image, 
  TouchableOpacity,
  SafeAreaView,
  FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../styles/colors';
import typography from '../styles/typography';
import spacing from '../styles/spacing';
import municipioData from '../data/municipio.json';

const MunicipioScreen = () => {
  const navigation = useNavigation();
  const municipio = municipioData.municipio;

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <TouchableOpacity
        style={styles.titleContainer}
        onPress={() => {
          // Open URL in browser (in a real app, you'd use Linking.openURL)
          console.log(`Opening URL: ${item.url}`);
        }}
      >
        <Text style={styles.cardTitle}>{item.title}</Text>
      </TouchableOpacity>
      <View style={styles.cardContent}>
        <Text style={styles.cardSubtitle}>{item.title}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
        <View style={styles.buttonContainer}>
          {item.features.map((feature, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={() => {
                // Open URL in browser
                console.log(`Opening URL: ${feature.featureURL}`);
              }}
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
          <Text style={styles.title}>Serviços Municipais</Text>
        </View>
        
        <View style={styles.introduction}>
          <Text style={styles.introText}>
            Aceda a informação, serviços e recursos municipais no sítio da Câmara Municipal de Palmela
          </Text>
          
          <Text style={styles.featureText}>
            <Text style={styles.featureBold}>Reabilitação Urbana</Text> – Programas e incentivos para revitalização de centros urbanos
          </Text>
          
          <Text style={styles.featureText}>
            <Text style={styles.featureBold}>Planeamento Territorial</Text> – Documentos e legislação sobre ordenamento do território
          </Text>
          
          <Text style={styles.featureText}>
            <Text style={styles.featureBold}>Habitação</Text> – Políticas e programas municipais de acesso à habitação
          </Text>
          
          <Text style={styles.featureText}>
            <Text style={styles.featureBold}>Centro Histórico</Text> – Informações sobre património, comércio e serviços no centro histórico
          </Text>
        </View>
        
        <FlatList
          data={municipio}
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
    marginBottom: spacing.md,
  },
  featureText: {
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
  titleContainer: {
    backgroundColor: colors.primary,
    padding: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 150,
  },
  cardTitle: {
    ...typography.textStyles.title,
    color: 'white',
    textAlign: 'center',
  },
  cardContent: {
    padding: spacing.layout.cardPadding,
  },
  cardSubtitle: {
    ...typography.textStyles.title,
    marginBottom: spacing.xs,
  },
  cardDescription: {
    ...typography.textStyles.body,
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },
  buttonContainer: {
    flexDirection: 'column',
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: spacing.layout.borderRadius.small,
    marginBottom: spacing.sm,
    alignSelf: 'flex-start',
  },
  buttonText: {
    ...typography.textStyles.button,
    color: 'white',
  },
});

export default MunicipioScreen; 