import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const QuestionWapp = styled.div`
  padding: 16px;
`;

const QuestionTitle = styled.h2.attrs((props) => ({
  type: "text",
  size: props.size || "60px",
}))`
  font-size: ${(props) => props.size};
  font-weight: bold;
  text-align: center;
  color: #fff;
`;

const TypingText = styled.p`
  text-align: center;
  font-size: 60px;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  border-radius: 48px;
`;

const ImgWrapp = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  height: 400px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.7);
  img {
    object-fit: contain;
  }
`;

const questionData = {
  しんうるとらまん: "sinnurutoramann",
  がぼら: "gabora",
  うるとらまんぜっと: "urutoramannzetto",
  しんごじら: "sinngozira",
  れっどきんぐ: "reddokinngu",
  とりがー: "toriga-",
  きょうりゅう: "kyouryuu",
  どんぶらざーず: "donnburaza-zu",
  ごもら: "gomora",
  せぶんがー: "sebunnga-",
  ざらぶ: "zarabu",
  めふぃらす: "mefirasu",
};

const definQuestion = () => {
  const length = Object.keys(questionData).length;
  const randomNum = Math.floor(Math.random() * length);
  return {
    title: Object.keys(questionData)[randomNum],
    text: Object.values(questionData)[randomNum],
  };
};

const Question = () => {
  const [question, setQuestion] = useState(definQuestion());
  const [position, setPosition] = useState(0);
  const textLength = question.text.length;

  const handleKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const textSpans = document.getElementById("textbox").children;
    if (e.key === question.text[position]) {
      textSpans[position].classList.add("typed-letters");
      textSpans[position].classList.add("current-letter");
      setPosition(position + 1);
      if (textLength === position + 1) {
        setTimeout(() => {
          setPosition(0);
          setQuestion(definQuestion());
          const typed = document.querySelectorAll(".typed-letters");
          typed.forEach((el) => {
            el.classList.remove("typed-letters");
          });
        }, 1000);
      }
    }
  };
  const imgPath = require(`../img/${question.text}.jpg`);

  return (
    <>
      <style jsx>{`
        .typed-letters {
          color: #8a2be2;
        }
      `}</style>

      <div onKeyPress={(e) => handleKey(e)} tabIndex={0}>
        <QuestionWapp>
          <ImgWrapp>
            <Image src={imgPath} />
            {/* <img
              src={`file:///Users/taiki/typing-img/${question.text}.jpg`}
              alt=""
            /> */}
          </ImgWrapp>
          <QuestionTitle>{question.title}</QuestionTitle>
          <TypingText>
            <div id="textbox">
              <span className="current-letter">
                {question.text[0].toUpperCase()}
              </span>
              {question.text
                .toUpperCase()
                .split("")
                .slice(1)
                .map((char) => (
                  <span className="waiting-letters">{char}</span>
                ))}
            </div>
          </TypingText>
        </QuestionWapp>
      </div>
    </>
  );
};

export default Question;
