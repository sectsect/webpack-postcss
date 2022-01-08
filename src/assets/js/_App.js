import { useState } from 'react';
import Layout from './components/Layout';

const App = () => {
  const [users] = useState([
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
    <Layout>
      <p>{message}</p>
      <ul className="user-list">
        {users &&
          users.map(user => (
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
    </Layout>
  );
};

export default App;
