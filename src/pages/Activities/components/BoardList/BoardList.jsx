import React, { Component } from 'react';
import Board from 'react-trello';

export default class BoardList extends Component {
  static displayName = 'BoardList';

  handleDragStart = (cardId, laneId) => {
    console.log('handleDragStart:', cardId, laneId);
  };

  handleDragEnd = (cardId, sourceLaneId, targetLaneId, position) => {
    console.log('handleDragEnd:', cardId, sourceLaneId, targetLaneId, position);
  };

  shouldReceiveNewData = (nextData) => {
    console.log(nextData);
  };

  handleCardAdd = (card, laneId) => {
    console.log(`New card added to lane ${laneId}`);
  };

  render() {
    const data = {
      lanes: [
        {
          id: '1',
          label: '3/3',
          title: '待处理',
          cards: [
            {
              id: 'Card1',
              title: '栾小亦',
              description: '提交短信发送任务，任务量80（条）',
              label: '30 mins',
            },
            {
              id: 'Card2',
              title: '栾小洛',
              description: '提交短信发送任务，任务量66（条）',
              label: '5 mins',
              metadata: { sha: 'be312a1' },
            },
            {
              id: 'Card3',
              title: '栾小乙',
              description: '提交短信发送任务，任务量40（条）',
              label: '5 mins',
              metadata: { sha: 'be312a1' },
            },
          ],
        },
        {
          id: '2',
          title: '进行中',
          label: '0/0',
          cards: [],
        },
        {
          id: '3',
          title: '已完成',
          label: '0/0',
          cards: [],
        },
        {
          id: '4',
          title: '已归档',
          label: '0/0',
          cards: [],
        },
      ],
    };
    return (
      <div style={styles.boardList}>
        <Board
          style={{ background: '#fff', padding: '12px' }}
          data={data}
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
