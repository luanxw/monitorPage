/* eslint  react/no-string-refs: 0 */
import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Input, Radio, Switch, Upload, Grid, Form } from '@alifd/next';
import './SettingsForm.scss';
import { Dialog } from '@alifd/next';
import DataBinder from '@icedesign/data-binder';
import { resolve } from 'q';

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

/**
 * 自定义的 json request client
 */
// function request(opts) {
//   return new Promise((resolve, reject) => {
//     jsonp(opts.url, { name: 'commitsend' }, (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         console.log("luan")
//         // resolve({ data });
//       }
//     })
//   });
// }

@DataBinder({
  'CommitSend': {
    url: 'http://localhost:9000/send',
    method: 'post',
    // data: {
    //   data: ''
    // },
    // AJAX 部分的参数完全继承自 axios ，参数请详见：https://github.com/axios/axios
    // 下面是请求会返回的默认数据
    // defaultBindingData: {
    //   data: {
    //     data: ''
    //   }
    // }
  }
// }, { requestClient: request })
})
export default class SettingsForm extends Component {
  static displayName = 'SettingsForm';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        // user: '',
        // password: '',
        // text: ''
      },
    };
  }

onOpen = () => {
    this.setState({
        visible: true
    });
};

onClose = reason => {
  if(reason == 'true' ){
       //todo 执行操作
 
    this.props.updateBindingData('CommitSend',{
          data: this.state.value
        }
        // ,() =>{
        //   console.log("请求后: ",this.props.bindingData)
        //   // alert("返回数据内容：", this.props.bindingData)
        // }
        )
      

    // const requst = new Promise((resolve, reject) => {
    //   this.props.updateBindingData('CommitSend',{
    //     data: this.state.value
    //   })
    //   resolve(this.props.bindingData)
    // })
    // requst.then(res => {
    //   console.log('asdasdasd',res)
    // })
    
    

  }else{
    this.setState({
      visible: false
  });
    alert("已经取消数据发送请求")

    // console.log("用户选择取消");
  }
   
    this.setState({
        visible: false
    });
};


  onDragOver = () => {
    console.log('dragover callback');
  };

  onDrop = (fileList) => {
    console.log('drop callback : ', fileList);
  };

  formChange = (value) => {
    // console.log('value', value);
    this.setState({
      value,
    });
  };
  
  checkData = (data) => {
    if (data.code ===200 && data.success) {
      alert("" , CommitSend)
    }else{

    }
  }

  render() {
    
  //  checkData(CommitSend)
    return (
      <div className="settings-form" >
        <IceContainer>
          <Form value={this.state.value} onChange={this.formChange} ref="form">
          {/* <Form value={this.state.value}  ref="form" > */}
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
                <Input  name="phone" placeholder="eg:18866669999" />
              </FormItem>
             
              <FormItem
                label="立即发送"
                {...formItemLayout}
                required
                requiredMessage="必填"
              >
                <RadioGroup name="Immediately">
                  <Radio value="Y">是</Radio>
                  <Radio value="N">否</Radio>
                </RadioGroup>
              </FormItem>

              <FormItem
                // size="large"
                label="标签"
                {...formItemLayout}
                // required
                requiredMessage="添加标签"
              >
                <Input htmlType="idiograph" placeholder="eg:【轻工大】,不添加标签，即使用默认标签" name="idiograph" />
              </FormItem>

              <FormItem
                // size="large"
                label="端口号"
                {...formItemLayout}
                required
                requiredMessage="请输入端口"
              >
                <Input htmlType="port" placeholder="eg:8080" name="port" />
              </FormItem>

              <FormItem
                // size="large"
                label="用户名"
                {...formItemLayout}
                required
                requiredMessage="请输入用户"
              >
                <Input htmlType="user" placeholder="eg:admin" name="user" />
              </FormItem>
              <FormItem
                // size="large"
                label="密码"
                {...formItemLayout}
                required
                requiredMessage="请输入密码"
              >
                <Input htmlType="password" placeholder="eg:admin" name="password" />
              </FormItem>

              <FormItem size="large" label="短信内容："  {...formItemLayout}>
                <Input.TextArea 
                 name="context"
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
                    onClick={this.onOpen}
                  >
                    提 交
                  </Form.Submit>
                </Col>
              </Row>
          </Form>
        </IceContainer>
        {/* 模拟框输出 */}
        <Dialog
            title="确认提交"
            visible={this.state.visible}
            onOk={this.onClose.bind(this, 'true')}
            onCancel={this.onClose.bind(this, 'fasle')}
            onClose={this.onClose}>
            确认要提交发送信息吗？
        </Dialog>
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
