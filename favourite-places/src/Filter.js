import React from 'react';

class Filter extends React.Component {
  render() {
    return (
      <input
        type="text"
        placeholder="Filter"
        value={this.props.value}
        onChange={event => this.props.onInputChange(event.target.value)}
        />
    );
  }
}

export default Filter;
