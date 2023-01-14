import React from 'react';
import {
  Mjml,
  MjmlHead,
  MjmlTitle,
  MjmlPreview,
  MjmlBody,
} from "@faire/mjml-react";
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ children, userName }) => (
  <Mjml>
    <MjmlHead>
      <MjmlTitle>Last Minute Offer</MjmlTitle>
      <MjmlPreview>Last Minute Offer...</MjmlPreview>
    </MjmlHead>
    <MjmlBody width={500}>
      <Header userName={userName} />
      {children}
      <Footer />
    </MjmlBody>
  </Mjml>
);
