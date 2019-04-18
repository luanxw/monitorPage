/* eslint no-underscore-dangle: 0 */
import React, { Component } from 'react';
import DataBinder from '@icedesign/data-binder';
import { Table, Dialog, Form, Button , Input,  Pagination, Message} from '@alifd/next';
import IceContainer from '@icedesign/container';
import IceLabel from '@icedesign/label';
import FilterForm from './Filter';

@DataBinder({
  portTable: {
    url: 'http://127.0.0.1:9000/port/querypage',
    method: 'get',
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
  deleteUser: {
    url: 'http://127.0.0.1:9000/port/delete_by_id',
    method: 'delete',
    
  },
  SaveUser: {
    url: 'http://127.0.0.1:9000/port/save_port',
    method: 'post',
   
  },
})
export default class EnhanceTable extends Component {

  componentDidMount() {
    // 第一次渲染，初始化第一页的数据
    const {portTable} = this.props.bindingData;
   this.props.updateBindingData('portTable');
 }

 refresh = () => {
    // 刷新功能，更新数据
   this.props.updateBindingData('portTable');
 };

 changePage = (pageNo) => {
   // 有些参数可能需要从数据中获取
   const {portTable} = this.props.bindingData;
   this.props.updateBindingData('portTable', {
     params: {
       ...portTable.pagination,
       page: pageNo,
       pagesize: 8,
     },
     // 通过设置这个数据，可以快速将页码切换，避免等接口返回才会切换页面
     // 这里的变更是同步生效的
     // 需要注意多层级数据更新的处理，避免丢掉某些数据
     defaultBindingData: {
       ...portTable,
       pagination: {
         ...portTable,
         page: pageNo,
         pagesize: 8,
       }
     }
   });
 };

 constructor(props) {
  super(props);
  this.state = {
    value: {

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
  this.props.updateBindingData('SaveUser',{
        data: this.state.value
      })

}else{
  alert("已取消数据发送请求")
}
  this.setState({
    visible: false
  });
};


  renderTitle = (value, index, record) => {
    return (
      <div style={styles.titleWrapper}>
        <span style={styles.title}>{record.title}</span>
      </div>
    );
  };

  editItem = (record, e) => {
    e.preventDefault();
    // TODO: record 为该行所对应的数据，可自定义操作行为
  };

  renderOperations = (value, index, record) => {
    return (
      <div
        className="filter-table-operation"
        style={styles.filterTableOperation}
      >
        <a  style={styles.operationItem} target="_blank">
          修改
        </a>
        <a 
        onClick={() => this.handleDelete(value)}
        style={styles.operationItem} target="_blank">
          删除
        </a>
      </div>
    );
  };

  // renderStatus = (value) => {
  //   return (
  //     <IceLabel inverse={false} status="default">
  //       {value}
  //     </IceLabel>
  //   );
  // };

  handleDelete = (index) => {
    Dialog.confirm({
      title: '删除',
      content: '确认删除吗?',
      onOk: () => {

        return new Promise(resolve => {
          setTimeout(resolve, 200);
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

  render() {

    const { portTable } = this.props.bindingData;
    return (
      <div className="filter-table">
        <IceContainer title="添加端口">
          <FilterForm
            value={this.state.value}
            onChange={this.filterFormChange}
            onSubmit={this.onOpen}
            // onReset={this.resetFilter}
          />
        </IceContainer>
        <IceContainer>
          <Table
            dataSource={portTable.list}
            className="basic-table"
            style={styles.basicTable}
            hasBorder={false}
          >
           
            <Table.Column 
            title="端口号" 
            dataIndex="port" 
            name='port'
            />
            <Table.Column
              title="网关名"
              dataIndex="gwName"
              name='gwName'
            />
              <Table.Column
              title=" 拥有者"
              dataIndex="user"
              name='user'
              cell={this.renderStatus}
            />
            <Table.Column
              title=" 激活状态（Y/N）"
              dataIndex="validFlag"
              name='validFlag'
              cell={this.renderStatus}
            />
            <Table.Column
              title="操作"
              dataIndex="operation"
              cell={this.renderOperations}
            />
          </Table>
          <div style={styles.paginationWrapper}>
          <Pagination 
          current={portTable.page}
          pageSize={portTable.pageSize}
          total={portTable.total}
          onChange={this.changePage}
          style={{marginTop: 20}}
        />
          </div>
        </IceContainer>

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
    );
  }
}

const styles = {
  filterTableOperation: {
    lineHeight: '28px',
  },
  operationItem: {
    marginRight: '12px',
    textDecoration: 'none',
    color: '#5485F7',
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    marginLeft: '10px',
    lineHeight: '20px',
  },
  paginationWrapper: {
    textAlign: 'right',
    paddingTop: '26px',
  },
};
