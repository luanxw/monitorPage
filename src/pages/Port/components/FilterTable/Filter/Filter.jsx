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
            <Col xxs={10} xs={12} l={6} style={styles.filterCol}>
              <label style={styles.filterTitle}>端口号</label>
              <IceFormBinder name="port">
                <Input />
              </IceFormBinder>
            </Col>
            <Col xxs={10} xs={12} l={6} style={styles.filterCol}>
              <label style={styles.filterTitle}>网关名</label>
              <IceFormBinder name="gwName">
                <Input />
              </IceFormBinder>
            </Col>
            <Col xxs={10} xs={12} l={6} style={styles.filterCol}>
              <label style={styles.filterTitle}>用户</label>
              <IceFormBinder name="user">
                <Input />
              </IceFormBinder>
            </Col>
            <Col xxs={24} xs={12} l={6} style={styles.filterCol}>
              <label style={styles.filterTitle}>激活状态</label>
              <IceFormBinder name="validFlag">
                <Select style={styles.filterTool}>
                  <Option value="Y">Y</Option>
                  <Option value="N">N</Option>
                </Select>
              </IceFormBinder>
            </Col>
            
          </Row>
          <div
            style={{
              textAlign: 'left',
              marginLeft: '12px',
            }}
          >
            <Button
              onClick={this.props.onSubmit}
              type="primary"
              style={{ marginLeft: '550px' }}
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
