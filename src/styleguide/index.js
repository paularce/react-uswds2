import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";

import Button from "../uswds/components/Button";

import "./styles/styleguide.scss";

addDecorator(withInfo);
addDecorator(withA11y);

storiesOf("USWDS/Components/Button", module)
  .add("states", () => (
    <div className="button_wrapper">
      <Button text={"Default"} />
      <Button text={"Active"} status="active" />
      <Button text={"Hover"} status="hover" />
    </div>
  ))
  .add("disabled", () => <Button text={"Default"} disabled />)
  .add('as "big" variant', () => <Button text={"Default"} size="big" />);
