import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import ContainerTitle from '../../../../components/ContainerTitle';
import LineChart from '../LineChart';

const data = [
  {
    date: '2019-04-01',
    acc: 84,
  },
  {
    date: '2019-04-02',
    acc: 14,
  },
  {
    date: '2019-04-03',
    acc: 17,
  },
  {
    date: '2019-04-04',
    acc: 56,
  },
  {
    date: '2019-04-05',
    acc: 30,
  },
  {
    date: '2019-04-06',
    acc: 63,
  },
  {
    date: '2019-04-07',
    acc: 24,
  },
  {
    date: '2019-04-08',
    acc: 20,
  },
  {
    date: '2019-04-09',
    acc: 18,
  },
  {
    date: '2019-04-10',
    acc: 15,
  },
  {
    date: '2019-04-11',
    acc: 20,
  },
  {
    date: '2019-04-12',
    acc: 22,
  },
  {
    date: '2019-04-13',
    acc: 23,
  },
  {
    date: '2019-04-14',
    acc: 24,
  },
];

const cols = {
  acc: {
    alias: '提交任务量',
  },
};

export default class Commits extends Component {
  static displayName = 'task';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ContainerTitle title="最近30天 任务量（单位：条）" />
        <IceContainer style={styles.container}>
          <LineChart cols={cols} data={data} axisName="name" />
        </IceContainer>
      </div>
    );
  }
}

const styles = {};
