import React, {ReactNode} from 'react'
import Image from "../img/test.jpeg";

type Props={
	text:string,
}

const Question=({text}: Props) => (
	<>
		{text}
		<img src={Image.src} alt="" width="100%" />
	</>
)

export default Question
