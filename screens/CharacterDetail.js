import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { Image } from 'react-native-elements';

const CharacterDetail = ({ route }) => {
  return (
    <ScrollView style={{ backgroundColor: '#25895E' }}>
      <View style={styles.container}>
        <Image
          source={{ uri: route.params.characters.image }}
          style={styles.image}
          PlaceholderContent={<ActivityIndicator />}
        />
        <Text style={styles.title}>{route.params.characters.name}</Text>
        <Text style={styles.subTitle}>
          status: {route.params.characters.status}
        </Text>
        <Text style={styles.subTitle}>
          species: {route.params.characters.species}
        </Text>
      </View>

      <Text style={[styles.subTitle, styles.white]}>Episode</Text>
      <FlatList
        data={route.params.characters.episode}
        renderItem={({ item }) => (
          <View style={styles.subContent}>
            <Text>{item.name}</Text>
            <Text>{item.episode}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  white: {
    color: '#ffffff',
  },
  container: {
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#E9FDF7',
  },
  title: {
    fontSize: 24,
    marginVertical: 16,
  },
  subTitle: {
    margin: 10,
    fontSize: 18,
  },
  subContent: {
    flexDirection: 'row',
    margin: 5,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#E9FDF7',
    justifyContent: 'space-between',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});

export default CharacterDetail;
