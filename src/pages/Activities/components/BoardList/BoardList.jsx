import React, { Component } from 'react';
import DataBinder from '@icedesign/data-binder';
import Board from 'react-trello';

@DataBinder({
  TableContent: {
    url: 'http://localhost:9000/taskrecord/querypage',
    type: 'get',
    defaultBindingData: {
      lanes: []
    },
  },
})

export default class BoardList extends Component {

  componentDidMount() {
    // 第一次渲染，初始化第一页的数据
    const {TableContent} = this.props.bindingData;
   this.props.updateBindingData('TableContent');
 }

 refresh = () => {
  // 刷新功能，更新数据
 this.props.updateBindingData('TableContent');
};

  static displayName = 'BoardList';

  // handleDragStart = (cardId, laneId) => {
  //   console.log('handleDragStart:', cardId, laneId);
  // };

  // handleDragEnd = (cardId, sourceLaneId, targetLaneId, position) => {
  //   console.log('handleDragEnd:', cardId, sourceLaneId, targetLaneId, position);
  // };

  // shouldReceiveNewData = (nextData) => {
  //   console.log(nextData);
  // };

  // handleCardAdd = (card, laneId) => {
  //   console.log(`New card added to lane ${laneId}`);
  // };

  render() {

    // const data = {
    //   lanes: [
    //     {
    //       id: '1',
    //       label: '3/3',
    //       title: '待处理',
    //       cards: [
    //         {
    //           id: 'Card1',
    //           title: '栾小亦',
    //           description: '提交短信发送任务，任务量80（条）',
    //           label: '30 mins',
    //         },
    //         {
    //           id: 'Card2',
    //           title: '栾小洛',
    //           description: '提交短信发送任务，任务量66（条）',
    //           label: '5 mins',
    //           // metadata: { sha: 'be312a1' },
    //         },
    //         {
    //           id: 'Card3',
    //           title: '栾小乙',
    //           description: '提交短信发送任务，任务量40（条）',
    //           label: '5 mins',
    //           // metadata: { sha: 'be312a1' },
    //         },
    //       ],
    //     },
    //     {
    //       id: '2',
    //       title: '进行中',
    //       label: '0/0',
    //       cards: [],
    //     },
    //     {
    //       id: '3',
    //       title: '已完成',
    //       label: '0/0',
    //       cards: [],
    //     },
    //     {
    //       id: '5',
    //       title: '备注信息',
    //       label: '0/0',
    //       cards: [],
    //     },
    //   ],
    // };

    const { TableContent } = this.props.bindingData;


    return (
      <div style={styles.boardList}>
        <Board
          style={{ background: '#fff', padding: '12px' }}
          // data={data}
          data={JSON.stringify(TableContent) && TableContent}
          draggable
          collapsibleLanes
          handleDragStart={this.handleDragStart}
          handleDragEnd={this.handleDragEnd}
          onDataChange={this.shouldReceiveNewData}
          onCardAdd={this.handleCardAdd}
        />
      </div>
    );
  }
}

const styles = {
  boardList: {
    width: '100%',
  },
};