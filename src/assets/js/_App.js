import React, { useState } from 'react';
import Header from './components/Header';

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [who, setWho] = useState('World');

  return (
    <div>
      <Header />
      <p>
        Hello,
        {who}!
      </p>
    </div>
  );
};

export default App;
