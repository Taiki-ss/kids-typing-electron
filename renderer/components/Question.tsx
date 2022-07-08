import React, {ReactNode} from 'react'
import Image from 'next/image'
import testImage from "../img/test.jpeg";

type Props={
	text:string,
}

const Question=({text}: Props) => (
	<>
		{text}
		<Image src={testImage} />
	</>
)

export default Question
