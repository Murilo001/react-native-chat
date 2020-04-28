import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './../screens/Main';
import Chat from './../screens/Chat';
import { NavigationContainer } from '@react-navigation/native';
import { withTheme } from 'react-native-paper';

const Stack = createStackNavigator();

function Navigation(props) {
  const { colors } = props.theme;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        headerMode="screen"
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: colors.primary },
        }}
        >
        <Stack.Screen name="Home" component={Main} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default withTheme(Navigation);