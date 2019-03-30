import React, { Component } from 'react';
import SettingsForm from './components/SettingsForm';

export default class SendNcn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="send-ncn-page">
        <SettingsForm />
      </div>
    );
  }
}
