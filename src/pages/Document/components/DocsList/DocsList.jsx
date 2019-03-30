import React, { Component } from 'react';
import { Icon } from '@alifd/next';
import DataBinder from '@icedesign/data-binder';
import IceContainer from '@icedesign/container';
import { withRouter } from 'react-router-dom';
import { Timeline } from '@alifd/next';
import ContainerTitle from '../../../../components/ContainerTitle';


const { Item: TimelineItem } = Timeline;

@DataBinder({
  eventTable: {
    url: 'http://127.0.0.1:9000/eventrecord/querypage',
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
  deleteUser: {
    url: 'http://127.0.0.1:9000/eventrecord/delete_by_id',
    type: 'delete',
    
  }
})
@withRouter
export default class DocsList extends Component {

  componentDidMount() {
    // 第一次渲染，初始化第一页的数据
    const {eventTable} = this.props.bindingData;
   this.props.updateBindingData('eventTable');
 }

 refresh = () => {
    // 刷新功能，更新数据
   this.props.updateBindingData('eventTable');
 };

 changePage = (pageNo) => {
   // 有些参数可能需要从数据中获取
   const {eventTable} = this.props.bindingData;
   this.props.updateBindingData('eventTable', {
     params: {
       ...eventTable.pagination,
       page: pageNo,
       pagesize: 8,
     },
     // 通过设置这个数据，可以快速将页码切换，避免等接口返回才会切换页面
     // 这里的变更是同步生效的
     // 需要注意多层级数据更新的处理，避免丢掉某些数据
     defaultBindingData: {
       ...eventTable,
       pagination: {
         ...eventTable,
         page: pageNo,
         pagesize: 8,
       }
     }
   });
 };


  render() {
    
    const { eventTable } = this.props.bindingData;

    return (
      <IceContainer style={styles.container}>
        <ContainerTitle
          title="系统事件记录"

        />

        <Timeline className="project-timeline">
        {eventTable.list.map((item, index) => {
            return (
                // <Icon type="office" style={styles.icon} />
                <TimelineItem title={item.event}
                              content={item.content}
                              time={item.recordTime}
                  />
            );
          })}
        </Timeline>
        
      </IceContainer>
    );
  }
}

const styles = {
  container: {
    padding: '0',
    minHeight: '800px',
  },
  item: {
    padding: '20px',
    borderBottom: '1px solid #f0f0f0',
    position: 'relative',
    display: 'block',
  },
  title: {
    marginLeft: '16px',
    marginRight: '24px',
    color: '#314659',
    fontSize: '14px',
  },
  icon: {
    color: '#697b8c',
  },
  description: {
    color: '#697b8c',
    fontSize: '14px',
  },
  time: {
    position: 'absolute',
    right: '20px',
    color: '#314659',
  },
};
