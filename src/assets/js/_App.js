import React from 'react';
import { Header } from './components/Header';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      who: 'World',
    };
  }

  render() {
    return (
      <div>
        <Header />
        <p>
          Hello,
          {this.state.who}!
        </p>
      </div>
    );
  }
}
