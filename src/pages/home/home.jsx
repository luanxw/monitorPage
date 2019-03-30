import React, { Component } from 'react';
import { Grid } from '@alifd/next';
import Overview from './components/Overview';
import Commits from './components/Commits';

const { Row, Col } = Grid;

export default class home extends Component {
  static displayName = 'home';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Row gutter="20" wrap>
        <Col l="24">
          <Overview />
        </Col>
        <Col l="24">
          <Commits />
        </Col>
      </Row>
    );
  }
}
