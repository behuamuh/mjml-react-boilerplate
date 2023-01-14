import React from 'react';
import { render } from "@faire/mjml-react/utils/render";
import path from "path";
import fs from "fs";

import { emails } from './emails';

const outDir = path.resolve(__dirname, '..', 'build');

if (!fs.existsSync(outDir)){
  fs.mkdirSync(outDir);
}

for (const Email of emails) {
  const { html, errors } = render(<Email />);
  const fileName = path.resolve(outDir, `${Email.name}.html`);

  try {
    fs.writeFileSync(fileName, html)
  } catch (error) {
    console.log(errors);
  }
}
