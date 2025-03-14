# Component Migration Guide: Web to React Native

This guide demonstrates how to migrate a component from the PolisPlan web app to the Polis mobile app.

## Example Component

We'll migrate the `FeatureCard` component from the web app to React Native.

### Web Component (React)

```jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './FeatureCard.css';

function FeatureCard({ title, description, imageUrl, linkTo }) {
  return (
    <div className="feature-card">
      <div className="feature-image">
        <picture>
          <source 
            srcSet={process.env.PUBLIC_URL + imageUrl.webp}
            type="image/webp"
          />
          <img 
            src={process.env.PUBLIC_URL + imageUrl.fallback}
            alt={title}
            width={imageUrl?.thumbnail?.width || 400}
            height={imageUrl?.thumbnail?.height || 300}
            loading="lazy"
          />
        </picture>
      </div>
      <div className="feature-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={linkTo} className="feature-button">Ver mais</Link>
      </div>
    </div>
  );
}
```

### React Native Component

```jsx
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
```

## Key Migration Changes

### 1. Component Imports

- **Web**: `import { Link } from 'react-router-dom';`
- **RN**: `import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';`

### 2. HTML Elements to React Native Components

| Web (HTML) | React Native |
|------------|--------------|
| `<div>` | `<View>` |
| `<h3>` | `<Text style={styles.title}>` |
| `<p>` | `<Text style={styles.description}>` |
| `<img>` | `<Image source={} style={} />` |
| `<Link>` | `<TouchableOpacity onPress={}>` |

### 3. CSS to StyleSheet

- **Web**: External CSS file with classes
- **RN**: StyleSheet.create() with JavaScript objects

### 4. Navigation

- **Web**: `<Link to={linkTo}>` for declarative navigation
- **RN**: `navigation.navigate(screenName)` for imperative navigation

### 5. Images

- **Web**: 
  ```jsx
  <picture>
    <source srcSet={process.env.PUBLIC_URL + imageUrl.webp} type="image/webp" />
    <img src={process.env.PUBLIC_URL + imageUrl.fallback} alt={title} />
  </picture>
  ```

- **RN**:
  ```jsx
  <Image 
    source={imageSource}
    style={styles.featureImage}
    resizeMode="cover"
  />
  ```

### 6. Props Changes

- **Web**: `imageUrl` object with webp and fallback paths
- **RN**: `imageSource` direct reference to image (require or uri)

- **Web**: `linkTo` string path for routing
- **RN**: `screenName` string name for navigation

## Usage Example

### Web Usage

```jsx
<FeatureCard
  title="Serviços Municipais"
  description="Aceda aos serviços e recursos municipais em matéria de urbanismo."
  imageUrl={{
    webp: '/images/home/municipio.webp',
    fallback: '/images/home/municipio.jpg',
    thumbnail: { width: 400, height: 300 }
  }}
  linkTo="/municipio"
/>
```

### React Native Usage

```jsx
<FeatureCard
  title="Serviços Municipais"
  description="Aceda aos serviços e recursos municipais em matéria de urbanismo."
  imageSource={require('../../../assets/images/home/municipio.jpg')}
  screenName="Serviços"
/>
``` 