/* eslint no-underscore-dangle: 0 */
import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import DataBinder from '@icedesign/data-binder';
import { Table, Dialog, Form, Button , Input,  Pagination, Message} from '@alifd/next';
import IceLabel from '@icedesign/label';
import FilterForm from './Filter';


@DataBinder({
  gatewayTable: {
    url: 'http://127.0.0.1:9000/gateway/querypage',
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
  deleteGateway: {
    url: 'http://127.0.0.1:9000/gateway/delete_by_id',
    method: 'delete',
    
  },
  SaveGateway: {
    url: 'http://127.0.0.1:9000/gateway/save_gateway',
    method: 'post',
    
  }
})
export default class EnhanceTable extends Component {

  componentDidMount() {
    // 第一次渲染，初始化第一页的数据
    const {gatewayTable} = this.props.bindingData;
   this.props.updateBindingData('gatewayTable');
 }

 refresh = () => {
    // 刷新功能，更新数据
   this.props.updateBindingData('gatewayTable');
 };

 changePage = (pageNo) => {
   // 有些参数可能需要从数据中获取
   const {gatewayTable} = this.props.bindingData;
   this.props.updateBindingData('gatewayTable', {
     params: {
       ...gatewayTable.pagination,
       page: pageNo,
       pagesize: 8,
     },
     // 通过设置这个数据，可以快速将页码切换，避免等接口返回才会切换页面
     // 这里的变更是同步生效的
     // 需要注意多层级数据更新的处理，避免丢掉某些数据
     defaultBindingData: {
       ...gatewayTable,
       pagination: {
         ...gatewayTable,
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
  this.props.updateBindingData('SaveGateway',{
        data: this.state.value
      })

}else{
  alert("已取消数据发送请求")
}
  this.setState({
    visible: false
  });
};


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
      
    },
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
        <a 
        onClick={() => this.updateNumber(value)}
         style={styles.operationItem} target="_blank">
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

  renderStatus = (value) => {
    return (
      <IceLabel inverse={false} status="default">
        {value}
      </IceLabel>
    );
  };

  
  
  render() {
    const { gatewayTable } = this.props.bindingData;

    return (
      <div className="filter-table">
        <IceContainer title="添加网关">
          <FilterForm
           value={this.state.value}
           onSubmit={this.onOpen}
          />
        </IceContainer>
        <IceContainer>
          <Table
            dataSource={gatewayTable.list}
            className="basic-table"
            style={styles.basicTable}
            hasBorder={false}
          >
            <Table.Column
              title="网关名"
              dataIndex="gateName"  
              name='gateName'          
              // width={320}
            />
            <Table.Column 
            title="网关种类" 
            dataIndex="gateType" 
            name='gateType'
            // width={85} 
            />
            <Table.Column
              title="网关别名"
              dataIndex="gwAlias"
              name='gwAlias'
              // width={150}
            />
            <Table.Column
              title="网关地址"
              dataIndex="gwIp"
              name='gwIp'
              // width={85}
              // cell={this.renderStatus}
            />
            <Table.Column
              title="网关端口"
              dataIndex="gwPort"
              name='gwPort'
              // width={150}
              // cell={this.renderOperations}
            />
            <Table.Column
              title="签名内容"
              dataIndex="idiographContent"
              name='idiographContent'
              // width={150}
              // cell={this.renderOperations}
            />
            <Table.Column
              title="网关账户"
              dataIndex="gwAccount"
              name='gwAccount'
              // width={150}
              // cell={this.renderOperations}
            />
            <Table.Column
              title="可触达网络"
              dataIndex="networkType"
              name='networkType'
              // width={150}
              // cell={this.renderOperations}
            />
            <Table.Column
              title="网关权重"
              dataIndex="weightValue"
              name='weightValue'
              // width={150}
              // cell={this.renderOperations}
            />
            <Table.Column
              title="激活状态"
              dataIndex="validFalg"
              name='validFalg'
              // width={150}
              // cell={this.renderOperations}
            />
          
            <Table.Column
              title="操作"
              width={150}
              cell={this.renderOperations}
            />
          </Table>
          <div style={styles.paginationWrapper}>
          <Pagination 
          current={gatewayTable.page}
          pageSize={gatewayTable.pageSize}
          total={gatewayTable.total}
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
