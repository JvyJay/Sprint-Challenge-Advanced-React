import React from 'react';
import './App.css';
import axios from 'axios';
import Card from './components/Card';
import Dark from './components/Toggle';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      athletes: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        console.log(res.data);
        this.setState({ athletes: res.data });
      })
      .catch(err => console.log('Errors Found', err));
  }

  render() {
    return (
      <div className='App'>
        <Dark />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
          }}
        >
          {this.state.athletes.map(item => {
            return (
              <Card
                name={item.name}
                country={item.country}
                search={item.searches}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
