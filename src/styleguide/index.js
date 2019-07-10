import { configure, addDecorator } from '@storybook/react';
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
import "./styles/styleguide.scss";

const req = require.context('./stories', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withInfo);
addDecorator(withA11y);

configure(loadStories, module);
