import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      who: 'World',
    };
  }

  render() {
    return (
      <div>
        <h1>
App component
        </h1>
        <p>
Hello,
          {this.state.who}
!
        </p>
      </div>
    );
  }
}

export default App;
