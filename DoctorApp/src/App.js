import React from 'react';
import { GetStarted, Splash } from './pages';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      {/* <GetStarted/> */}
      <Splash/>
    </NavigationContainer>
  )
}

export default App;
