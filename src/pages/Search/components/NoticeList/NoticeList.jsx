import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import DataBinder from '@icedesign/data-binder';
import { Table, Dialog, Form, Button , Input,  Pagination, Message} from '@alifd/next';
import { withRouter, Link } from 'react-router-dom';
import ContainerTitle from '../../../../components/ContainerTitle';

@DataBinder({
  ItermTable: {
    url: 'http://127.0.0.1:9000/iterm/queryall',
    type: 'get',
    data: {
      page: 1,
      pagesize: 8,
    },
    defaultBindingData: {
      data: {
        page: 1,
        pageSize: 8,
        total: 8,
        size: 8
      },
      list: []
    },
  },
  
  selectIterm: {
    url: 'http://127.0.0.1:9000/iterm/select_by_mark',
    type: 'get',
    defaultBindingData: {
      data: {
        page: 1,
        pageSize: 8,
        total: 8,
        size: 8
      },
      list: []
    },
  }

})

export default class MemberList extends Component {
  componentDidMount() {
     // 第一次渲染，初始化第一页的数据
    this.changePage(1)
  }

  constructor(props) {
    super(props);
    this.state = {
      inputData: '',
      randerData: []
    };
    this.changePage = this.changePage.bind(this)
  }

  searchInput = (e) =>{
    //  console.log(e)
    this.setState({
      inputData: e,
      randerData: this.state.randerData
    })
  }

  changePage = (pageNo) => {
    // 有些参数可能需要从数据中获取
    const {ItermTable} = this.props.bindingData;
    this.props.updateBindingData('ItermTable', {
      params: {
        ...ItermTable.pagination,
        page: pageNo,
        pagesize: 8,
      },
      // 通过设置这个数据，可以快速将页码切换，避免等接口返回才会切换页面
      // 这里的变更是同步生效的
      // 需要注意多层级数据更新的处理，避免丢掉某些数据
      
    },
    ({data}) => {
      if(data == null){
        Message.error("数据库短信数据记录为空")
      }else{
        this.setState({
          randerData: [...data.list]
        })
      }
    }
    );
  };

  searchUser = () => {
    // 有些参数可能需要从数据中获取
    console.log(this.state.inputData)
    this.props.updateBindingData('selectIterm' , {
      params:{
        mark: this.state.inputData,
      },
    
      }, ({data}) => {
        console.log(data)
        if(typeof JSON.stringify(data) == '{}'){
          this.forceUpdate();

          Message.error("不存在对应的短信数据记录")


          return

        }
        this.setState({
          randerData: [data]
        })
      }
      )

  };

  handleDelete = (index) => {
    Dialog.confirm({
      title: '删除',
      content: '确认删除吗?',
      onOk: () => {

        return new Promise(resolve => {
          setTimeout(resolve, 300);
      }).then(() => {
          Message.success('非超级管理员，不允许删除短信数据!');
      });
      },
    });
  };

  renderProfile = (value, index, record) => {
    return (
      <div style={styles.profile}>
        <img src={record.avatar} alt="" style={styles.avatar} />
        <span style={styles.name}>{record.name}</span>
      </div>
    );
  };

  renderOper = (value) => {
    return (
      <div>
        {/* <Link to="/AddMember/AddMember" style={{ ...styles.link, ...styles.edit }}>
          修改
        </Link> */}
        <a
          onClick={() => this.handleDelete(value)}
          style={{ ...styles.link, ...styles.delete }}
        >
          删除
        </a>
      </div>
    );
  };

  render() {

    const { ItermTable , selectIterm} = this.props.bindingData;

    return (
      
    <div>
      <IceContainer style={styles.searchUser} >
        <Input  hasClear placeholder="短信唯一标示" onChange={this.searchInput.bind(this)}   name="marks" /> 
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button 
        onClick={this.searchUser} 
        type="primary">搜索短信任务</Button>
        </IceContainer>

        <IceContainer style={styles.container}>
        <ContainerTitle
          title="短信列表"
          style={styles.title}
          onClick={this.handleAdd}
        />
        <Table dataSource={this.state.randerData}  loading={this.state.randerData.__loading}>
          <Table.Column dataIndex="uniqueMark" title="唯一标示" style={styles.name} />
          <Table.Column dataIndex="requestBatch" title="请求批次号"  style={styles.name}/>
          <Table.Column dataIndex="Port" title="端口" style={styles.name}/>
          <Table.Column dataIndex="text" title="短信内容" style={styles.name}/>
          <Table.Column dataIndex="phone" title="手机号" style={styles.name}/>
          <Table.Column dataIndex="status" title="状态" style={styles.name}/>
          <Table.Column dataIndex="commitTime" title="提交时间" style={styles.name}/>
          <Table.Column title="操作" cell={this.renderOper} />
        </Table>
        <Pagination 
          current={ItermTable.page}
          pageSize={ItermTable.pageSize}
          total={ItermTable.total}
          onChange={this.changePage}
          style={{marginTop: 20}}
        />
      </IceContainer>
      
    </div>
    
    );
  }
}

const styles = {
  container: {
    padding: '0',
    alignItems: 'center',
    marginLeft: '35px',
    marginRight: '35px',
    marginTop: '40px',
  },
  title: {
    borderBottom: '0',
  },
  profile: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    width: '24px',
    height: '24px',
    border: '1px solid #eee',
    background: '#eee',
    borderRadius: '50px',
  },
  name: {
    marginLeft: '15px',
    color: '#314659',
    fontSize: '14px',
  },
  link: {
    cursor: 'pointer',
    color: '#1890ff',
  },
  edit: {
    marginRight: '5px',
  },
  searchUser: {
    alignItems: 'center',
    marginLeft: '35px',
    marginRight: '35px',
  },
};
