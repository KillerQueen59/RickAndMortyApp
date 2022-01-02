import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  View,
  Alert,
} from 'react-native';
import { Image } from 'react-native-elements';

const CharacterList = ({ data, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('CharacterDetail', {
          characters: data,
        });
      }}
      style={styles.container}
    >
      <Image
        source={{ uri: data.image }}
        style={styles.image}
        PlaceholderContent={<ActivityIndicator />}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{`${data.name}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    backgroundColor: '#E9FDF7',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 24,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 75,
  },
});

export default CharacterList;
