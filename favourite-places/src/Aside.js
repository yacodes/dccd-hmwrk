import React from 'react';
import Filter from './Filter';
import List from './List';

class Aside extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentInputValue: ''
    };
  }

  render() {
    const currentInputValue = this.state.currentInputValue;
    const onInputChange = value => this.setState({currentInputValue: value});

    return (
      <div>
        <Filter
          value={currentInputValue}
          onInputChange={onInputChange}
          />
        <List>
          {this.props.elements.filter(element =>
            element.name.toLowerCase().startsWith(currentInputValue.toLowerCase())
          ).map(element =>
            <li key={element.id}>{element.name}</li>
          )}
        </List>
      </div>
    );
  }
}

export default Aside;
