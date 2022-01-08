import React, { useState } from 'react';
import { ReactComponent as SvgSymbol } from '../../../dist/assets/images/svg/symbol.svg';
import Header from './components/Header';

interface MyData {
  message: string;
}

interface Users {
  id: number;
  name: string;
  email: string;
  verified: boolean;
}

declare global {
  interface Window {
    my_data: MyData;
  }
}

const App: React.VFC = () => {
  const [users] = useState<Users[]>([
    {
      id: 1,
      name: 'John',
      email: 'john@google.com',
      verified: false,
    },
    {
      id: 2,
      name: 'Jack',
      email: 'jack@google.com',
      verified: true,
    },
    {
      id: 3,
      name: 'James',
      email: 'james@google.com',
      verified: false,
    },
  ]);

  const { message } = window.my_data;

  return (
    <>
      <SvgSymbol />
      <Header />
      <p>{message}</p>
      <ul className="user-list">
        {users?.map((user) => (
          <li key={user.id} className={user.verified ? 'verified' : ''}>
            {user.name}
          </li>
        ))}
      </ul>
      <div className="icons">
        <svg className="icon">
          <use xlinkHref="#icon-facebook" />
        </svg>
        <svg className="icon">
          <use xlinkHref="#icon-twitter" />
        </svg>
        <svg className="icon">
          <use xlinkHref="#icon-youtube" />
        </svg>
        <svg className="icon">
          <use xlinkHref="#icon-instagram" />
        </svg>
        <svg className="icon">
          <use xlinkHref="#icon-line" />
        </svg>
        <svg className="icon">
          <use xlinkHref="#icon-arrow-top" />
        </svg>
        <svg className="icon">
          <use xlinkHref="#icon-search" />
        </svg>
      </div>
    </>
  );
};

export default App;
