import React from 'react';
import '../style/styles.css';

export function Sidebar() {
  
  return (
    <div className="sidebar">
      <h2>People in Chat</h2>
      <ul>
        <li>John Doe</li>
        <li>Jane Doe</li>
        <li>Bob Smith</li>
      </ul>
      {/* 参加者の一覧を表示する */}
      {/* 例: <div className="participant">User A</div> */}
    </div>
  );
}