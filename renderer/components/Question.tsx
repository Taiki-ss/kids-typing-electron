import React, {ReactNode} from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import testImage from "../img/test.jpeg";

type Props={
	text:string,
}

const QuestionWapp=styled.div`
	padding: 16px;
	background-color: lightgray;
`;

const QuestionTitle=styled.h2`
	font-size: 60px;
	font-weight: bold;
	text-align: center;
	color: red;
`;

const TypingText=styled.p`
	text-align: center;
	font-size: 60px;
	font-weight: bold;
	background-color: gray;
`

const ImgWrapp=styled.div`
	width: 60%;
	margin:0 auto;
`;

const question_data={
	"しんうるとらまん": "sinnurutoraman",
	"ぜっとん": "zettonn",
}

const question=(() => {
	const length=Object.keys(question_data).length;
	const randomNum=Math.floor(Math.random()*length)
	return {
		title: Object.keys(question_data)[randomNum],
		text: Object.values(question_data)[randomNum],

	}
})()

const Question=() => (

	<>
		<QuestionWapp>
			<ImgWrapp>
				<Image src={testImage} />
			</ImgWrapp>
			<QuestionTitle>{question.title}</QuestionTitle>
			<TypingText>{question.text}</TypingText>
		</QuestionWapp>
	</>
)

export default Question
