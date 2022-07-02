import React, { ReactNode } from 'react'

type Props={
	text:string,
}

const Question=({text }:Props) => (
	<>
		{text}
		<img src="img/test.jpeg" alt="" />
	</>
)

export default Question
