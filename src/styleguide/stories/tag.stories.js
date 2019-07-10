import React from "react";
import { storiesOf } from "@storybook/react";

import Tag from "../../uswds/components/Tag";

storiesOf("USWDS|Components/Tag", module)
  .add("default", () => (
    <div className="wrapper">
      <Tag>Tag Text</Tag>
    </div>
  ))
  .add("with custom classes or css landmarks", () => (
    <div className="wrapper">
      <Tag classes="required">required</Tag>
    </div>
  ));
