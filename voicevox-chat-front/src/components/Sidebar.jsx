import React, { useState } from 'react';
import '../style/sidebar.css';

import { SideItem } from './sideItem';
import Image from '../images/Zundamon.png';
import RedGirl from '../images/red_girl.png';
import TwinTail from '../images/twin_tail.png';
import WhiteGirl from '../images/white_girl.png';
import Cool from '../images/cool.png';

export function Sidebar() {
  const [active, setActive] = useState(1);

  const handleClick = (id) => {
    setActive(id);
  };

  return (
    <div className="sidebar">
      <h2>People in Chat</h2>
        <SideItem image={Image} name={"ずんだもん"} speaker_id={1} active={active === 1} handleClick={() => handleClick(1)}/>
        <SideItem image={RedGirl} name={"あかね"} active={active === 2} handleClick={() => handleClick(2)}/>
        <SideItem image={TwinTail} name={"ミサキ"} active={active === 3} handleClick={() => handleClick(3)}/>
        <SideItem image={WhiteGirl} name={"れむ"} active={active === 4} handleClick={() => handleClick(4)}/>
        <SideItem image={Cool} name={"だるさん"} speaker_id={42} active={active === 5} handleClick={() => handleClick(5)}/>

      {/* 参加者の一覧を表示する */}
      {/* 例: <div className="participant">User A</div> */}
    </div>
  );
}
