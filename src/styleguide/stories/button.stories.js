import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "../../uswds/components/Button";

storiesOf("USWDS|Components/Button", module)
  .add("states", () => (
    <div className="wrapper">
      <Button text={"Default"} />
      <Button text={"Active"} status="active" />
      <Button text={"Hover"} status="hover" />
    </div>
  ))
  .add("disabled", () => <div className="wrapper"><Button text={"Default"} disabled /></div>)
  .add('as "big" variant', () => <div className="wrapper"><Button text={"Default"} size="big" /></div>);
