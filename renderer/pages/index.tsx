// import { useEffect } from 'react'
import Link from 'next/link';
import Layout from '../components/Layout/Layout';
import styled from 'styled-components';

const MainContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	h1 {
		font-size: 4rem;
	}
`;

const IndexPage = () => {
  return (
    <Layout title="たいぴんぐげーむ">
      <MainContainer>
        <h1>けんせいのたいぴんぐげーむ</h1>
      </MainContainer>
    </Layout>
  );
};

export default IndexPage;
