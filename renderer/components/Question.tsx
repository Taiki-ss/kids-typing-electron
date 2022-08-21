import React, { useState } from 'react';
import QuestionData from '../store/QuestionData';
import styled from 'styled-components';
import Image from 'next/image';

// styled-components --------------------------------------------------

const Component = styled.div`
  padding: 32px;
  h2 {
    margin: 0 auto;
    position: relative;
    font-size: ${(props) =>
      props.large ? '80px' : '60px'};
    color: ${(props) => (props.large ? '#fff' : '#fff')};
    font-weight: bold;
    text-align: center;
    transition: all 0.3s;
    &::after {
      display: ${(props) =>
        props.large ? 'block' : 'none'};
      content: 'くりあー！';
      position: absolute;
      top: 0;
      left: 50%;
      z-index: 1;
      font-size: 40px;
      color: red;
      transform: translate(-50%, -50%);
      transition: all 0.3s;
    }
  }
  p {
    text-align: center;
    font-size: 60px;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    border-radius: 48px;
  }
  .img-wrapp {
    display: flex;
    justify-content: center;
    width: 80%;
    height: 400px;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.7);
    img {
      object-fit: contain;
    }
  }
`;

// ---------------------------------------------------------------------

// Questionコンポーネント本体
const Question = () => {
  const [question, setQuestion] = useState(QuestionData);
  const [position, setPosition] = useState(0);
  const textLength = question.en.length;
  const imgPath = require(`../img/${question.en}.jpg`);

  const handleKey = (
    e: React.KeyboardEvent<HTMLDivElement>
  ) => {
    const textSpans =
      document.getElementById('textbox').children;

    // 正解のキー押下
    if (e.key === question.en[position]) {
      textSpans[position].classList.add('typed-letters');
      textSpans[position].classList.add('current-letter');
      setPosition(position + 1);

      // 最後のキー押下
      if (textLength === position + 1) {
        setTimeout(() => {
          setPosition(0);
          setQuestion(QuestionData);
          const typed = document.querySelectorAll(
            '.typed-letters'
          );
          typed.forEach((el) => {
            el.classList.remove('typed-letters');
          });
        }, 1000);
      }
    }
  };

  return (
    <Component large={textLength === position}>
      {/* 入力成功したキーのカラー変更用 */}
      <style jsx>{`
        .typed-letters {
          color: #8a2be2;
        }
      `}</style>

      {/* キー押下イベント発火 */}
      <div onKeyPress={(e) => handleKey(e)} tabIndex={0}>
        <div className="img-wrapp">
          <Image src={imgPath} />
          {/* パッケージングの際にimgタグを使う */}
          {/* <img
              src={`file:///home/zorinos/typing-img/${question.text}.jpg`}
              alt=""
            /> */}
        </div>
        {/* propsのlergeを判定styled-componentに渡してる */}
        <h2>{question.jp}</h2>
        <p>
          <div id="textbox">
            <span className="current-letter">
              {question.en[0].toUpperCase()}
            </span>
            {question.en
              .toUpperCase()
              .split('')
              .slice(1)
              .map((char) => (
                <span className="waiting-letters">
                  {char}
                </span>
              ))}
          </div>
        </p>
      </div>
    </Component>
  );
};

export default Question;
