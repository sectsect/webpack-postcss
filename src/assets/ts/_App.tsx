import React, { useState } from 'react';
import Header from './components/Header';

interface MyData {
  message: string;
}

declare global {
  interface Window {
    my_data: MyData;
  }
}

const App: React.VFC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [who] = useState('World');

  const { message } = window.my_data;

  return (
    <div>
      <Header />
      <p>
        Hello,
        {who}!
      </p>
      <p>{message}</p>
    </div>
  );
};

export default App;
