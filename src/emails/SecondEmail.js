import React from 'react';
import { MjmlSection, MjmlColumn, MjmlText } from "@faire/mjml-react";
import { Layout } from '../components/Layout';

export const SecondEmail = () => (
  <Layout userName="{{имя_юзера_из_HTML_шаблона}}">
    <MjmlSection fullWidth backgroundColor="#efefef">
      <MjmlColumn>
        <MjmlText>
          <p>
            Второе письмо!
          </p>
        </MjmlText>
      </MjmlColumn>
    </MjmlSection>
  </Layout>
);
