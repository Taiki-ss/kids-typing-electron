import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
  children: ReactNode;
  title?: string;
};

const MainContainer = styled.div`
  height: 100%;
  background-color: #0000AA;
  font-family: sans-serif;
  h1 {
	text-align: center;
	color: white;
  }
  a {
	display: inline-block;
	margin: 6px;
    padding: 6px 8px;
    border-radius: 6px;
    font-size: 18px;
    text-decoration: none;
    color: white;
    background-color: #FF88FF;
  }
  footer {
	background-color: #222;
	text-align: center;
	color: white;
	padding: 24px;
  }
`;

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <MainContainer>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>＜　はじめのぺーじ</a>
        </Link>
        <Link href="/game">
          <a>げーむをはじめる　＞</a>
        </Link>
      </nav>
    </header>
    {children}
    <footer>
      <h2>けんせいのたいぴんぐげーむ</h2>
    </footer>
  </MainContainer>
);

export default Layout;
