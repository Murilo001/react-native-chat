import Main from './screens/Main';
import Chat from './screens/Chat';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const RootStack = createStackNavigator({
  Main: { screen: Main },
  Chat: { screen: Chat },
});

const App = createAppContainer(RootStack);

export default App;