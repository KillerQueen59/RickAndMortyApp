import React from 'react';
import Home from './screens/Home';
import CharacterDetail from './screens/CharacterDetail';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ApolloClient, ApolloProvider, useQuery, gql } from '@apollo/client';
import { InMemoryCache } from '@apollo/client/cache/inmemory/inMemoryCache';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Rick And Morty ',
          headerStyle: {
            backgroundColor: '#25895E',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <MainStack.Screen
        name="CharacterDetail"
        component={CharacterDetail}
        options={({ route }) => ({
          title: route.params.characters.name,
          headerStyle: {
            backgroundColor: '#25895E',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      />
    </MainStack.Navigator>
  );
};

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen
            name="Main"
            component={MainStackScreen}
            options={{ headerShown: false }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
