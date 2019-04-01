import React, { Component } from 'react';
import { Input, Grid, Select, Button, DatePicker } from '@alifd/next';

// form binder 详细用法请参见官方文档
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
} from '@icedesign/form-binder';

const { Row, Col } = Grid;
const { Option } = Select;

export default class Filter extends Component {
  static displayName = 'Filter';

  render() {
    return (
      <IceFormBinderWrapper
        value={this.props.value}
        onChange={this.props.onChange}
      >
        <div>
          <Row wrap>
            <Col xxs={24} xs={12} l={8} style={styles.filterCol}>
              <label style={styles.filterTitle}>网关名</label>
              <IceFormBinder name="gwname">
                <Input hasClear placeholder="eg: luan" />
              </IceFormBinder>
            </Col>
            <Col xxs={24} xs={12} l={8} style={styles.filterCol}>
              <label style={styles.filterTitle}>网关种类</label>
              <IceFormBinder name="gwtype">
                <Input hasClear placeholder="eg: test" />
              </IceFormBinder>
            </Col>
            <Col xxs={24} xs={12} l={8} style={styles.filterCol}>
              <label style={styles.filterTitle}>网关别名</label>
              <IceFormBinder name="gwAlias">
                <Input hasClear placeholder="eg: 畅梦科技有限公司" />
              </IceFormBinder>
            </Col>
            <Col xxs={24} xs={12} l={8} style={styles.filterCol}>
              <label style={styles.filterTitle}>网关地址</label>
              <IceFormBinder name="gwIp">
                <Input  hasClear placeholder="eg: http://127.0.0.1"/>
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
                <Input hasClear placeholder="eg: 8080"/>
              </IceFormBinder>
            </Col>
            <Col xxs={24} xs={12} l={8} style={styles.filterCol}>
              <label style={styles.filterTitle}>签名内容</label>
              <IceFormBinder name="idiographContent">
                <Input hasClear placeholder="eg: 【郑轻大】"/>
              </IceFormBinder>
            </Col>
            <Col xxs={24} xs={12} l={8} style={styles.filterCol}>
              <label style={styles.filterTitle}>网关账户</label>
              <IceFormBinder name="username">
                <Input hasClear placeholder="eg: luan"/>
              </IceFormBinder>
            </Col>
            <Col xxs={24} xs={12} l={8} style={styles.filterCol}>
              <label style={styles.filterTitle}>账户密码</label>
              <IceFormBinder name="password">
                <Input hasClear placeholder="eg: luan"/>
              </IceFormBinder>
            </Col>
            <Col xxs={24} xs={12} l={8} style={styles.filterCol}>
              <label style={styles.filterTitle}>网络种类</label>
              <IceFormBinder name="networkType">
                <Input hasClear placeholder="eg: 联通/电信/移动"/>
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
                <Input hasClear placeholder="eg: 8"/>
              </IceFormBinder>
            </Col>
            <Col xxs={24} xs={12} l={8} style={styles.filterCol}>
              <label style={styles.filterTitle}>激活状态</label>
              <IceFormBinder name="status">
                <Select style={styles.filterTool}>
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
              onClick={this.props.onSubmit}
              type="primary"
              style={{ marginLeft: '10px' }}
            >
              保  存
            </Button>
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
