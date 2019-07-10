import React from "react";
import { storiesOf } from "@storybook/react";

import SearchField from "../../uswds/components/SearchField";

storiesOf("USWDS|Components/Search Field", module)
  .add("default", () => <div className="wrapper"><SearchField id="search-default" /></div>)
  .add("'Small' variant", () => <div className="wrapper"><SearchField id="search-small" size='small' /></div>)
  .add("'Big' variant", () => <div className="wrapper"><SearchField id="search-big" size='big' /></div>);