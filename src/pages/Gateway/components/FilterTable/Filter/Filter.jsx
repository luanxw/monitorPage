import React, { Component } from 'react';
import { Input, Grid, Select, Button, DatePicker ,Dialog} from '@alifd/next';
import DataBinder from '@icedesign/data-binder'; 

// form binder 详细用法请参见官方文档
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
} from '@icedesign/form-binder';

const { Row, Col } = Grid;
const { Option } = Select;

@DataBinder({
  SaveGate: {
    url: 'http://127.0.0.1:9000/gateway/save_gateway',
    method: 'post',
  },

})
export default class Filter extends Component {
  static displayName = 'Filter';

  // state = {
  //   gwName : '',//输入框输入值
  // };

  constructor(props) {
    super(props);
    this.state = {
     
        gwName: '',
        gwType: '',
        gwAlias: '',
        gwIp: '',
        gwPort: '',
        idiographContent: '',
        username: '',
        password: '',
        networkType: '',
        weightValue: '',
        validFlag: '',
     
    };
  }

  gwNameChange(event){
    const data = this.state
    this.setState({
      
        ...data,
        gwName:event,
       
      
    })
  }
  gwTypeChange(event){
    const data = this.state
    this.setState({
     
        ...data,
        gwType:event
      
    })
  }
  gwAliasChange(event){
    const data = this.state
    this.setState({
      
        ...data,
        gwAlias:event
     
    })
  }
  gwIpChange(event){
    const data = this.state
    this.setState({
      
        ...data,
        gwIp:event
      
    })
  }
  gwPortChange(event){
    const data = this.state
    this.setState({
      
        ...data,
        gwPort:event
      
    })
  }
  gwNameChange(event){
    const data = this.state
    this.setState({
     
        ...data,
        gwName:event
     
    })
  }
  idiographContentChange(event){
    const data = this.state
    this.setState({
      
        ...data,
        idiographContent:event
      
    })
  }
  usernameChange(event){
    const data = this.state
    this.setState({
      
        ...data,
        username:event
      
    })
  }
  passwordChange(event){
    const data = this.state
    this.setState({
      
        password:event
     
    })
  }
  networkTypeChange(event){
    const data = this.state
    this.setState({
      
        ...data,
        networkType:event
     
    })
  }
  weightValueChange(event){
    const data = this.state
    this.setState({
        ...data,
        weightValue:event
    
    })
  }

  flagChange(event){
    const data = this.state
    this.setState({
        ...data,
        validFlag:event
    
    })
  }

  
  onOpen = () => {
    this.setState({
        visible: true
    });
  };
  
  onClose = reason => {
  if(reason == 'true' ){
console.log(this.state)
    this.props.updateBindingData('SaveGate',{
          // data: this.state.value
          data: this.state
        })
  
  }else{
    alert("已取消数据发送请求")
  }
    this.setState({
      visible: false
    });
  };
  
  render() {
    return (
      <IceFormBinderWrapper
        // value={this.props.value}
        // onChange={this.props.onChange}
      >
        <div>
          <Row wrap >
            <Col xxs={24} xs={12} l={8} style={styles.filterCol}>
              <label style={styles.filterTitle}>网关名</label>
              <IceFormBinder name="gwName">
                <Input 
                onChange={this.gwNameChange.bind(this)}
                hasClear placeholder="eg: luan" />
              </IceFormBinder>
            </Col>
            <Col xxs={24} xs={12} l={8} style={styles.filterCol}>
              <label style={styles.filterTitle}>网关种类</label>
              <IceFormBinder name="gwType">
                <Input 
                onChange={this.gwTypeChange.bind(this)}
                hasClear 
                placeholder="eg: test" />
              </IceFormBinder>
            </Col>
            <Col xxs={24} xs={12} l={8} style={styles.filterCol}>
              <label style={styles.filterTitle}>网关别名</label>
              <IceFormBinder name="gwAlias">
                <Input 
                onChange={this.gwAliasChange.bind(this)}
                hasClear 
                placeholder="eg: 云小亦科技有限公司" />
              </IceFormBinder>
            </Col>
            <Col xxs={24} xs={12} l={8} style={styles.filterCol}>
              <label style={styles.filterTitle}>网关地址</label>
              <IceFormBinder name="gwIp">
                <Input  
               onChange={this.gwIpChange.bind(this)}
                hasClear 
                placeholder="eg: http://127.0.0.1"/>
              </IceFormBinder>
            </Col>
            {/* <Col xxs={24} xs={12} l={8} style={styles.filterCol}>
              <label style={styles.filterTitle}>网关地址</label>
              <IceFormBinder
                name="startTime"
                valueFormatter={(date, strValue) => {
                  return strValue;
                }}
              >
                <DatePicker style={styles.filterTool} />
              </IceFormBinder>
            </Col> */}
            <Col xxs={24} xs={12} l={8} style={styles.filterCol}>
              <label style={styles.filterTitle}>网关端口</label>
              <IceFormBinder name="gwPort">
                <Input 
                onChange={this.gwPortChange.bind(this)}
                hasClear 
                placeholder="eg: 8080"/>
              </IceFormBinder>
            </Col>
            <Col xxs={24} xs={12} l={8} style={styles.filterCol}>
              <label style={styles.filterTitle}>签名内容</label>
              <IceFormBinder name="idiographContent">
                <Input 
                onChange={this.idiographContentChange.bind(this)}
                hasClear
                 placeholder="eg: 【郑轻大】"/>
              </IceFormBinder>
            </Col>
            <Col xxs={24} xs={12} l={8} style={styles.filterCol}>
              <label style={styles.filterTitle}>网关账户</label>
              <IceFormBinder name="username">
                <Input 
                onChange={this.usernameChange.bind(this)}
                hasClear 
                placeholder="eg: luan"/>
              </IceFormBinder>
            </Col>
            <Col xxs={24} xs={12} l={8} style={styles.filterCol}>
              <label style={styles.filterTitle}>账户密码</label>
              <IceFormBinder name="password">
                <Input 
                onChange={this.passwordChange.bind(this)}
                hasClear placeholder="eg: luan"/>
              </IceFormBinder>
            </Col>
            <Col xxs={24} xs={12} l={8} style={styles.filterCol}>
              <label style={styles.filterTitle}>网络种类</label>
              <IceFormBinder name="networkType">
                <Input 
                 onChange={this.networkTypeChange.bind(this)}
                hasClear placeholder="eg: 联通/电信/移动"/>
              </IceFormBinder>
            </Col>
            
            {/* <Col xxs={24} xs={12} l={8} style={styles.filterCol}>
              <label style={styles.filterTitle}>结束时间</label>
              <IceFormBinder
                name="endTime"
                valueFormatter={(date, strValue) => {
                  return strValue;
                }}
              >
                <DatePicker style={styles.filterTool} />
              </IceFormBinder>
            </Col> */}
           
            <Col xxs={24} xs={12} l={8} style={styles.filterCol}>
              <label style={styles.filterTitle}>网关权重</label>
              <IceFormBinder name="weightValue">
                <Input 
                onChange={this.weightValueChange.bind(this)}
                hasClear placeholder="eg: 8"/>
              </IceFormBinder>
            </Col>
            <Col xxs={24} xs={12} l={8} style={styles.filterCol}>
              <label style={styles.filterTitle}>激活状态</label>
              <IceFormBinder name="validFlag">
                <Select style={styles.filterTool}
                onChange={this.flagChange.bind(this)}
                >
                  <Option value="Y">Y</Option>
                  <Option value="N">N</Option>
                </Select>
              </IceFormBinder>
            </Col>
            {/* <Col xxs={24} xs={12} l={8} style={styles.filterCol}>
              <label style={styles.filterTitle}>讨论ID</label>
              <IceFormBinder name="commentId">
                <Input />
              </IceFormBinder>
            </Col> */}
            {/* <Col xxs={24} xs={12} l={8} style={styles.filterCol}>
              <label style={styles.filterTitle}>置顶</label>
              <IceFormBinder name="isStick">
                <Select placeholder="请选择" style={styles.filterTool}>
                  <Option value="all">不限</Option>
                  <Option value="stick">置顶</Option>
                  <Option value="not-stick">不置顶</Option>
                </Select>
              </IceFormBinder>
            </Col> */}
          </Row>
          <div
            style={{
              textAlign: 'left',
              marginLeft: '12px',
            }}
          >
            {/* <Button onClick={this.props.onReset} type="normal">
              重置
            </Button> */}
            <Button
              onClick={this.onOpen}
              type="primary"
              style={{ marginLeft: '10px' }}
            >
              保  存
            </Button>

              {/* 模拟框输出 */}
         <Dialog
            title="确认提交"
            visible={this.state.visible}
            onOk={this.onClose.bind(this, 'true')}
            onCancel={this.onClose.bind(this, 'fasle')}
            onClose={this.onClose}>
            确认要提交端口信息吗？
        </Dialog>
          </div>
        </div>
      </IceFormBinderWrapper>
    );
  }
}

const styles = {
  filterCol: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },

  filterTitle: {
    width: '68px',
    textAlign: 'right',
    marginRight: '12px',
    fontSize: '14px',
  },

  filterTool: {
    width: '200px',
  },
};
