// import { useEffect } from 'react'
import Link from 'next/link';
import Layout from '../components/Layout/Layout';

const IndexPage = () => {
  return (
    <Layout title="たいぴんぐげーむ">
      <p>
        <Link href="/game">
          <a>げーむをはじめる。</a>
        </Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
