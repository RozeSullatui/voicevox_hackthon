import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

  // SpeechRecogniton API を叩いてインスタンス化
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

export const SpeechRecBtn = ({ onRecognitionEnd }) => {
  // レコーディング状態の追跡
  const [isRecording, setIsRecording] = useState(false);
  const [rectext, setRecText] = useState("");

// オブジェクトのインスタンス化
  const recognition = new SpeechRecognition();
  recognition.lang = "ja-JP"; // 日本語
  recognition.continuous = false; // 連続認識
  recognition.interimResults = false; //　途中入力をよしとするか

  recognition.onstart = () => {
    setIsRecording(true);
  };

  recognition.onend = () => {
    setIsRecording(false);
    onRecognitionEnd(rectext);
  };  
  
  // 認識結果
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    setRecText(transcript);
  };


  const handleClick = () => {
    if (isRecording) {
      recognition.stop();
    } else {
      recognition.start();
    }
  };

  return (
    <button onClick={handleClick}>
      {/* アイコンの切り替え */}
      {isRecording ? <FontAwesomeIcon icon={faMicrophone} beatFade /> : <FontAwesomeIcon icon={faMicrophone} />}
    </button>
  );
};