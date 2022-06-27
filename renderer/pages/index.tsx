import { useEffect } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => {

  return (
    <Layout title="たいぴんぐげーむ">
      <h1>たいぴんぐげーむ</h1>
		<p>
     		<Link href="/game">
          		<a>げーむをはじめる。</a>
        	</Link>
      	</p>
    </Layout>
  )
}

export default IndexPage
