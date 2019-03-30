import React, { Component } from 'react';
import FilterTable from './components/FilterTable';

export default class Port extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="port-page">
        <FilterTable />
      </div>
    );
  }
}
