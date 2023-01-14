import React from 'react';
import { MjmlSection, MjmlColumn, MjmlText } from "@faire/mjml-react";

export const Footer = ({ userName }) => (
  <MjmlSection fullWidth backgroundColor="#efefef">
    <MjmlColumn>
      <MjmlText>
        <h3>
          Footer &#169; {new Date().getFullYear()}
        </h3>
      </MjmlText>
    </MjmlColumn>
  </MjmlSection>
);
