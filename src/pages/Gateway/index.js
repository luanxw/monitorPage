import React, { Component } from 'react';
import FilterTable from './components/FilterTable';

export default class Gateway extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="gateway-page">
        <FilterTable />
      </div>
    );
  }
}
