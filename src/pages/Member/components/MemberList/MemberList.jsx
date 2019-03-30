import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import DataBinder from '@icedesign/data-binder';
import { Table, Dialog, Form, Button , Input,  Pagination, Message} from '@alifd/next';
import { withRouter, Link } from 'react-router-dom';
import ContainerTitle from '../../../../components/ContainerTitle';

@DataBinder({
  accountTable: {
    url: 'http://127.0.0.1:9000/user/querypage',
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
    // defaultBindingData: {
    //     data: []
    // }
  },
  searchUser: {
    url: 'http://127.0.0.1:9000/user/queryall',
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
  },
  deleteUser: {
    url: 'http://127.0.0.1:9000/user/delete_by_id',
    type: 'delete',
    
  }
})

// @withRouter
export default class MemberList extends Component {
  componentDidMount() {
     // 第一次渲染，初始化第一页的数据
     const {accountTable} = this.props.bindingData;
    this.props.updateBindingData('accountTable');
  }

  refresh = () => {
     // 刷新功能，更新数据
    this.props.updateBindingData('accountTable');
  };

  changePage = (pageNo) => {
    // 有些参数可能需要从数据中获取
    const {accountTable} = this.props.bindingData;
    this.props.updateBindingData('accountTable', {
      params: {
        ...accountTable.pagination,
        page: pageNo,
        pagesize: 8,
      },
      // 通过设置这个数据，可以快速将页码切换，避免等接口返回才会切换页面
      // 这里的变更是同步生效的
      // 需要注意多层级数据更新的处理，避免丢掉某些数据
      defaultBindingData: {
        ...accountTable,
        pagination: {
          ...accountTable,
          page: pageNo,
          pagesize: 8,
        }
      }
    });
  };
  searchUser = (pageNo) => {
    // 有些参数可能需要从数据中获取
    const {accountTable} = this.props.bindingData;
    this.props.updateBindingData('accountTable', {
      params: {
        name :this.props.userName.value,  
        page: pageNo,
        pagesize: 8,
      },
      // 通过设置这个数据，可以快速将页码切换，避免等接口返回才会切换页面
      // 这里的变更是同步生效的
      // 需要注意多层级数据更新的处理，避免丢掉某些数据
     
    });
  };
  handleAdd = () => {
    this.props.history.push('/AddMember/AddMember');
  };

  handleDelete = (index) => {
    Dialog.confirm({
      title: '删除',
      content: '确认删除吗?',
      onOk: () => {

        return new Promise(resolve => {
          setTimeout(resolve, 1000);
      }).then(() => {
          Message.success('删除成功!');
      });
        // this.props.updateBindingData('accountTable',{
        //   name: this.props.userName.value,
        // });
        // const { data } = this.state;

        // data.splice(index, index + 1);
        // this.setState({
        //   data,
        // });
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
        <Link to="/AddMember/AddMember" style={{ ...styles.link, ...styles.edit }}>
          修改
        </Link>
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

    const { accountTable } = this.props.bindingData;


      

    return (
      
    <div>
      <IceContainer style={styles.searchUser} >
        <Input  hasClear placeholder="输入用户名"   name="userName" /> 
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button onClick={this.searchUser} type="primary">搜索用户</Button>
        </IceContainer>

        <IceContainer style={styles.container}>
        <ContainerTitle
          title="用户信息"
          buttonText="添加用户"
          style={styles.title}
          onClick={this.handleAdd}
        />
        <Table dataSource={accountTable.list}  loading={accountTable.__loading}>
          <Table.Column dataIndex="userName" title="用户名" style={styles.name} />
          <Table.Column dataIndex="email" title="邮件地址"  style={styles.name}/>
          <Table.Column dataIndex="createAt" title="创建日期" style={styles.name}/>
          <Table.Column dataIndex="updateAt" title="最近更新时间" style={styles.name}/>
          <Table.Column dataIndex="validFlag" title="是否可用(Y/N)" style={styles.name}/>
          <Table.Column title="操作" cell={this.renderOper} />
        </Table>
        <Pagination 
          current={accountTable.page}
          pageSize={accountTable.pageSize}
          total={accountTable.total}
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
