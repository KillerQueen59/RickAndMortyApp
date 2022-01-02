import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { useQuery, gql } from '@apollo/client';
import CharacterList from '../components/CharacterList';

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        status
        species
        type
        image
        location {
          name
          type
          dimension
        }
        origin {
          name
          type
          dimension
        }
        episode {
          name
          episode
        }
      }
    }
  }
`;

const Home = ({ navigation }) => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);
  let characters = [];
  if (data && data.characters) characters = data.characters.results;

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error </Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={characters}
        renderItem={({ item }) => (
          <CharacterList data={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#25895E',
  },
});

export default Home;
