import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import DataBinder from '@icedesign/data-binder';
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
  {
    title: '成功率',
    value: '86%',
  },
  
];

@DataBinder({
  countIterm: {
    url: 'http://127.0.0.1:9000/count/status',
    type: 'get',
    defaultBindingData: {
      data: []
    },
  },
 
})
export default class Overview extends Component {


  componentWillMount() {
    // 第一次渲染，初始化第一页的数据
  this.props.updateBindingData('countIterm');
 }

//   componentDidMount() {
//     // 第一次渲染，初始化第一页的数据
//     console.log("luan:");
//    this.props.updateBindingData('countIterm');
//  }
 constructor(props) {
  super(props);
  this.state = {
   lists:[] }
  }



  static displayName = 'Overview';

  static propTypes = {};

  static defaultProps = {};

  // shouldComponentUpdate(next, pre){
  //   // console.log(this.state.bindingData)
  //   // console.log(next)
  //   if(this.state.bindingData.countIterm.data !== next.countIterm.data){
  //     return true
  //   }
  //   return false
  // }

 

  render() {

    const {  countIterm } = this.props.bindingData;
    // console.log( this.props);
    const data = countIterm.data
    // console.log( data);



    return (
      <div>
        <ContainerTitle style={styles.top} title="任务概览" />
        <IceContainer style={styles.container}>
          <Row>
            <Col l="3">
              <div style={styles.item}>
                <img
                  src="https://gw.alipayobjects.com/zos/rmsportal/heTdoQXAHjxNGiLSUkYA.svg"
                  alt=""
                />
              </div>
            </Col>
            { data.map((item, index) => {
              return (
                <Col l="4" key={index}>
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
    alignItems: 'left',
    fontSize: '30px',
  }
};
