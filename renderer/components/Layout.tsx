import React, { ReactNode } from "react";
import styled from "styled-components";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children: ReactNode;
  title?: string;
};

const MainContainer = styled.div`
  min-height: 100vh;
  height: 100%;
  background-color: #20b2aa;
`;

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <MainContainer>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>はじめのぺーじ</a>
        </Link>
        |
        <Link href="/game">
          <a>げーむをはじめる</a>
        </Link>
        |
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>footer</span>
    </footer>
  </MainContainer>
);

export default Layout;
