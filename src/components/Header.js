import React from 'react';
import { MjmlSection, MjmlColumn, MjmlText } from "@faire/mjml-react";

export const Header = ({ userName }) => (
  <MjmlSection fullWidth backgroundColor="#efefef">
    <MjmlColumn>
      <MjmlText>
        <h2>
          Hello, {userName}!
        </h2>
      </MjmlText>
    </MjmlColumn>
  </MjmlSection>
);
