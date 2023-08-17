import React from 'react';

interface AppProps {
  greeting: string;
}

const App: React.FC<AppProps> = ({ greeting }) => {
  return <h1>{greeting}</h1>;
}

export default App;
