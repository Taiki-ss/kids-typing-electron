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

const H2=styled.h2`
	font-size: 24px;
	font-weight: bold;
	text-align: center;
	color: red;
`;

const Question=({text}: Props) => (

	<>
		<QuestionWapp>
			<H2>{ text }</H2>
			<Image src={testImage} />
		</QuestionWapp>
	</>
)

export default Question
