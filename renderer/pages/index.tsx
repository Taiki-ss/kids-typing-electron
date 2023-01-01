// import { useEffect } from 'react'
import Layout from '../components/Layout/Layout';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  h1 {
    font-size: 4rem;
	letter-spacing: 16px;
	.kensei {
		font-size: 2rem;
		letter-spacing: 40px;
	}
    .i-text {
      color: #ba0000;
    }
  }
`;

const IndexPage = () => {
  return (
    <Layout title="たいぴんぐげーむ">
      <MainContainer>
        <h1>
          <span className='kensei'>KENSEI</span>
          <br />
          <span className="i-text">I</span>MAG<span className="i-text">I</span>NAT
          <span className="i-text">I</span>ON
        </h1>
      </MainContainer>
    </Layout>
  );
};

export default IndexPage;
