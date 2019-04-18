import React, { Component } from 'react';
import NoticeList from './components/NoticeList';
import NoticeList1 from './components/NoticeList1';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="search-page">
        {/* 展示站点公告列表 */}
        <NoticeList />
        {/* 展示站点公告列表 */}
      </div>
    );
  }
}
