import React from 'react';
import './App.css';
import Aside from './Aside';
import GoogleMap from './GoogleMap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [{
        id: 1,
        name: 'Cafe',
        lat: 59.95,
        lng: 30.33,
      }, {
        id: 2,
        name: 'Cinema',
        lat: 59.97,
        lng: 30.35,
      }, {
        id: 3,
        name: 'Restaurant',
        lat: 59.93,
        lng: 30.37,
      }, {
        id: 4,
        name: 'Bar',
        lat: 59.99,
        lng: 30.41,
      }]
    };
  }

  render() {
    const onCreateElement = (lat, lng) => {
      this.setState({
        elements: [...this.state.elements, {id: Math.random(), name: 'New cafe', lat: lat, lng: lng}]
      });
    };

    return (
      <div className="App">
        <h1 style={{paddingLeft: 10}}>Favourite places</h1>
        <Aside elements={this.state.elements}/>
        <GoogleMap elements={this.state.elements} onCreateElement={onCreateElement}/>
      </div>
    );
  }
}

export default App;
