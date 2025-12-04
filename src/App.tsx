import React from 'react';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Container from './shared/ui/Container/Container';

const App: React.FC= () => {
  return (
    <Container>
      <Header />
      <Home />
    </Container>
  );
};

export default App;