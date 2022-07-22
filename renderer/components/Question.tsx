import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import testImage from "../img/test.jpeg";

const QuestionWapp = styled.div`
  padding: 16px;
  background-color: lightgray;
`;

const QuestionTitle = styled.h2`
  font-size: 60px;
  font-weight: bold;
  text-align: center;
  color: red;
`;

const TypingText = styled.p`
  text-align: center;
  font-size: 60px;
  font-weight: bold;
  background-color: gray;
`;

const ImgWrapp = styled.div`
  width: 60%;
  margin: 0 auto;
`;

const questionData = {
  しんうるとらまん: "sinnurutoraman",
  ぜっとん: "zettonn",
};

const question = (() => {
  const length = Object.keys(questionData).length;
  const randomNum = Math.floor(Math.random() * length);
  return {
    title: Object.keys(questionData)[randomNum],
    text: Object.values(questionData)[randomNum],
  };
})();

const Question = () => {
  const [text, setText] = useState(question.text);
  const [position, setPosition] = useState(0);

  const handleKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const textSpans = document.getElementById("textbox").children;
    if (e.key === text[position]) {
      textSpans[position].classList.add("typed-letters");
      textSpans[position].classList.add("current-letter");
      setPosition(position + 1);
      console.log(text[position]);
    }
  };

  return (
    <>
      <style jsx>{`
        .typed-letters {
          color: blue;
        }
      `}</style>

      <div onKeyPress={(e) => handleKey(e)} tabIndex={0}>
        <QuestionWapp>
          <ImgWrapp>
            <Image src={testImage} />
          </ImgWrapp>
          <QuestionTitle>{question.title}</QuestionTitle>
          <TypingText>
            <div id="textbox">
              <span className="current-letter">{text[0]}</span>
              {text
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
