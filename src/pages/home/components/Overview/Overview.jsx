import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import ContainerTitle from '../../../../components/ContainerTitle';

const { Row, Col } = Grid;

const mockData = [
  {
    title: '发送成功(条)',
    value: '80897',
  },
  {
    title: '发送中(条)',
    value: '6209',
  },
  {
    title: '发送完成(条)',
    value: '451423',
  },
  {
    title: '完成平均时长(单位:s)',
    value: '2.3',
  },
  
];

export default class Overview extends Component {
  static displayName = 'Overview';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ContainerTitle style={styles.top} title="任务概览" />
        <IceContainer style={styles.container}>
          <Row>
            <Col l="4">
              <div style={styles.item}>
                <img
                  src="https://gw.alipayobjects.com/zos/rmsportal/heTdoQXAHjxNGiLSUkYA.svg"
                  alt=""
                />
              </div>
            </Col>
            {mockData.map((item, index) => {
              return (
                <Col l="5" key={index}>
                  <div style={styles.item}>
                    <p style={styles.itemTitle}>{item.title}</p>
                    <p style={styles.itemValue}>{item.value}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  item: {
    height: '110px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTitle: {
    color: '#697b8c',
    fontSize: '14px',
  },
  itemValue: {
    color: '#314659',
    fontSize: '32px',
    marginTop: '10px',
  },
  top:{
    // height: '35px',
    alignItems: 'left',
    fontSize: '30px',
    // justifyContent: 'left',
  }
};
