import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Import screens
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import PublicationsScreen from '../screens/PublicationsScreen';
import FundingScreen from '../screens/FundingScreen';
import MunicipioScreen from '../screens/MunicipioScreen';

// Import colors
import colors from '../styles/colors';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Início') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Sobre') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          } else if (route.name === 'Publicações') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Projetos') {
            iconName = focused ? 'construct' : 'construct-outline';
          } else if (route.name === 'Financiamento') {
            iconName = focused ? 'cash' : 'cash-outline';
          } else if (route.name === 'Serviços') {
            iconName = focused ? 'business' : 'business-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Início" component={HomeScreen} />
      <Tab.Screen name="Sobre" component={AboutScreen} />
      <Tab.Screen name="Publicações" component={PublicationsScreen} />
      <Tab.Screen name="Projetos" component={ProjectsScreen} />
      <Tab.Screen name="Financiamento" component={FundingScreen} />
      <Tab.Screen name="Serviços" component={MunicipioScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator; 