import * as React from 'react';

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import Navigation from './main/Navigation';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#595cff',
  },
};

function App() {
  return (
    <PaperProvider theme={theme}>
      <Navigation />
    </PaperProvider>
  );
}

export default App;