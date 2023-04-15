import React from 'react';
import '../style/sidebar.css';

import { SideItem } from './sideItem';

export function Sidebar() {
  return (
    <div className="sidebar">
      <h2>People in Chat</h2>
        <SideItem name={"ずんだもん"}/>
        <SideItem name={"sample"}/>
        <SideItem name={"sample"}/>
        <SideItem name={"sample"}/>

      {/* 参加者の一覧を表示する */}
      {/* 例: <div className="participant">User A</div> */}
    </div>
  );
}