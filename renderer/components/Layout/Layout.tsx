import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import backgroundImage from '../../img/bg-planet.jpg';

type Props = {
  children: ReactNode;
  title?: string;
};

const MainContainer = styled.div`
  height: 100vh;
  font-family: sans-serif;
  position: relative;
  .background-image {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
  }
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
    background-color: #ba0000;
  }
  header {
    position: absolute;
    top: 0;
    z-index: 1;
    padding: 24px 0;
  }
  footer {
    position: absolute;
    bottom: 0;
    z-index: 1;
    width: 100%;
    background: linear-gradient(180deg, #5c5c5c, #121212);
    text-align: center;
    color: white;
    padding: 8px 0;
    h2 {
      font-size: 1rem;
      letter-spacing: 6px;
      .kensei {
        font-size: 0.5rem;
        letter-spacing: 10px;
      }
      .i-text {
        color: #ba0000;
      }
    }
  }
`;

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <MainContainer>
    {/* <Image src={backgroundImage} className="background-image" /> */}
    <img src="Users/taiki/Dev/kids-typing/renderer/img/bg-planet.jpg" className='background-image' alt="" />
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>＜ はじめのぺーじ</a>
        </Link>
        <Link href="/game">
          <a>げーむをはじめる ＞</a>
        </Link>
      </nav>
    </header>
    {children}
    <footer>
      <h2>
        <span className="kensei">KENSEI</span>
        <br />
        <span className="i-text">I</span>MAG<span className="i-text">I</span>NAT
        <span className="i-text">I</span>ON
      </h2>
    </footer>
  </MainContainer>
);

export default Layout;
