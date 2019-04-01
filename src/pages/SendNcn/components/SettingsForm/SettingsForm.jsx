/* eslint  react/no-string-refs: 0 */
import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Input, Radio, Switch, Upload, Grid, Form } from '@alifd/next';
import './SettingsForm.scss';

const { Row, Col } = Grid;
const { Group: RadioGroup } = Radio;
const FormItem = Form.Item;

const formItemLayout = {
  labelCol: { xxs: 6, s: 6, l: 3 },
  wrapperCol: { s: 2, l: 3 },
};

function beforeUpload(info) {
  console.log('beforeUpload callback : ', info);
}

function onChange(info) {
  console.log('onChane callback : ', info);
}

function onSuccess(res, file) {
  console.log('onSuccess callback : ', res, file);
}

function onError(file) {
  console.log('onError callback : ', file);
}

export default class SettingsForm extends Component {
  static displayName = 'SettingsForm';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        name: '',
        gender: 'male',
        notice: false,
        email: '',
        avatar: [],
        siteUrl: '',
        githubUrl: '',
        twitterUrl: '',
        description: '',
      },
    };
  }

  onDragOver = () => {
    console.log('dragover callback');
  };

  onDrop = (fileList) => {
    console.log('drop callback : ', fileList);
  };

  formChange = (value) => {
    console.log('value', value);
    this.setState({
      value,
    });
  };

  validateAllFormField = (values, errors) => {
    console.log('error', errors, 'value', values);
    if (!errors) {
      // 提交当前填写的数据
    } else {
      // 处理表单报错
    }
  };

  render() {
    return (
      <div className="settings-form" >
        <IceContainer>
          <Form value={this.state.value} onChange={this.formChange} ref="form">
            <div style={styles.formContent}>
              <h2 style={styles.formTitle}>发送短信</h2>

              <FormItem
                label="手机号"
                {...formItemLayout}
                required
                minLength={11}
                maxLength={11}
                requiredMessage="必填"
              >
                <Input  name="number" placeholder="eg:18866669999" />
              </FormItem>
             
              <FormItem
                label="立即发送"
                {...formItemLayout}
                required
                requiredMessage="必填"
              >
                <RadioGroup name="gender">
                  <Radio value="Y">是</Radio>
                  <Radio value="N">否</Radio>
                </RadioGroup>
              </FormItem>

              <FormItem label="是否添加签名" {...formItemLayout}>
                <Switch  name="idiograph" />
              </FormItem>
              <FormItem
                // size="large"
                label="端口号"
                {...formItemLayout}
                required
                requiredMessage="请输入端口"
              >
                <Input htmlType="port" name="port" />
              </FormItem>
            
              <FormItem size="large" label="短信内容："  {...formItemLayout}>
                <Input.TextArea 
                 maxLength={100}
                 rows={8}
                 hasLimitHint
                placeholder="请输入短信内容..." />
              </FormItem>

              
            </div>
            <Row style={{ marginTop: 50 , marginLeft: 440}}>
                <Col offset="1000000">
                  <Form.Submit
                    size="large"
                    type="primary"
                    style={{ width: 150 }}
                    validate
                    onClick={this.validateAllFormField}
                  >
                    提 交
                  </Form.Submit>
                </Col>
              </Row>
          </Form>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  label: {
    textAlign: 'right',
  },
  formContent: {
    width: '250%',
    position: 'relative',
  },
  formItem: {
    alignItems: 'center',
    marginBottom: 25,
  },
  formTitle: {
    margin: '0 0 20px',
    paddingBottom: '10px',
    borderBottom: '1px solid #eee',
  },
};
