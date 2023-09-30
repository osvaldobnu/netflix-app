import { StyleSheet, Text, View } from 'react-native';
import FilmesScreen from './components/filmes/FilmesScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import DetalhesFilme from './components/filmes/DetalhesFilme';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='Netflix'
          screenOptions={{
            headerStyle : {
              backgroundColor : 'red'
            },
            headerTintColor : 'white',
            headerTitleStyle : {
              fontWeight : 'bold',
              fontSize : 24
            }
          }}
        >
          <Stack.Screen name="Netflix" component={FilmesScreen} />
          <Stack.Screen name="DetalhesFilme" component={DetalhesFilme} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
