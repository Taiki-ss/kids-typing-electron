import React, { useCallback, useState, useMemo } from 'react';
import QuestionData from '../../store/QuestionData';
import styled from 'styled-components';
import Image from 'next/image';

type Question = {
  jp: string;
  en: string;
};

// styled-components --------------------------------------------------

const Component=styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw !important;
  padding-top: 32px;
  .answerCount {
    padding: 24px;
    position: absolute;
    top: 3%;
    right: 10%;
    font-size: 2rem;
    color: white;
    span {
		padding-right: 8px;
      font-size: 4rem;
      color: #ba0000;
      font-weight: bold;
    }
  }
  .focus {
    &:focus-visible {
      outline: none;
    }
  }
  h2 {
    margin: 0 auto;
    position: relative;
    font-size: ${(props) => (props.large ? '80px' : '60px')};
    color: ${(props) => (props.large ? '#fff' : '#fff')};
    font-weight: bold;
    text-align: center;
    transition: all 0.3s;
    &::after {
      display: ${(props) => (props.large ? 'block' : 'none')};
      content: 'GREAT！';
      position: absolute;
      top: 0;
      left: 50%;
      z-index: 1;
      font-size: 40px;
      color: #ba0000;
      transform: translate(-50%, -50%);
      transition: all 0.3s;
    }
  }
  p {
	width: 80%;
	margin: 24px auto;
    text-align: center;
    font-size: 60px;
    font-weight: bold;
	letter-spacing: 8px;
    background: linear-gradient(90deg,#acacac,#343434);
    color: #fff;
    border-radius: 48px;
  }
  .img-wrapp {
    display: flex;
    justify-content: center;
    width: 80%;
    height: 400px;
    margin: 100px auto;
    background-color: rgba(0, 0, 0, 0.7);
    img {
      object-fit: contain;
    }
  }
`;

// ---------------------------------------------------------------------

// Questionコンポーネント本体
const Question = () => {
  const [question, setQuestion] = useState<Question>(QuestionData);
  const [position, setPosition] = useState(0);
  const [answerCount, seetAnswerCount] = useState(0);
  const textLength: number = question.en.length;
  const imgPath: string = require(`../../img/${question.en}.jpg`);

  const handleKey = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key !== question.en[position]) return;
      setPosition(position + 1);

      // 最後のキー押下
      if (textLength === position + 1) {
        setTimeout(() => {
          setPosition(0);
          setQuestion(QuestionData);
          seetAnswerCount(answerCount + 1);
        }, 1000);
      }
    },
    [question, position]
  );

  const chars: string[] = useMemo(() => question.en.toUpperCase().split('').slice(0), [question]);

  return (
    <Component large={textLength === position}>
      <div className="answerCount">
        <span>{answerCount}</span>CLEAR！
      </div>
      {/* キー押下イベント発火 */}
      <div onKeyDown={handleKey} tabIndex={0} className="focus">
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
            {chars.map((char: string, i: number) => (
              <span style={i < position ? { color: '#ba0000' } : {}}>{char}</span>
            ))}
          </div>
        </p>
      </div>
    </Component>
  );
};

export default Question;
