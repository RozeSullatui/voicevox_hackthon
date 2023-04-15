import React from 'react';
import '../style/sidebar.css';

import { SideItem } from './sideItem';
import Image from '../images/Zundamon.png';
import RedGirl from '../images/red_girl.png';
import TwinTail from '../images/twin_tail.png';
import WhiteGirl from '../images/white_girl.png';
import Cool from '../images/cool.png';

export function Sidebar() {
  return (
    <div className="sidebar">
      <h2>People in Chat</h2>
        <SideItem image={Image} name={"ずんだもん"} speaker_id={1}/>
        <SideItem image={RedGirl} name={"あかね"}/>
        <SideItem image={TwinTail} name={"ミサキ"}/>
        <SideItem image={WhiteGirl} name={"れむ"}/>
        <SideItem image={Cool} name={"だるさん"} speaker_id={42}/>

      {/* 参加者の一覧を表示する */}
      {/* 例: <div className="participant">User A</div> */}
    </div>
  );
}