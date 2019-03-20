import React, { Component } from 'react';

import './list.scss';

export default class List extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  request() {
    // mock request
    return new Promise((resolve) => {
      setTimeout(() => {
        let data = [
          { title: 'item1' },
          { title: 'item2' },
          { title: 'item3' }
        ];
        resolve(data);
      }, 500);
    });
  }

  async fetchList() {
    let res = await this.request();

    this.setState({
      list: res
    });
  }

  listBuilder() {
    return this.state.list.map((item, i) => <li key={i}>{item.title}</li>);
  }

  componentDidMount() {
    this.fetchList();
  }

  render() {
    return (
      <div className="lists">
        <ul>
          {this.listBuilder()}
        </ul>
      </div>
    );
  }
}
