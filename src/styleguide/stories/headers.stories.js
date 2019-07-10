import React from "react";
import { storiesOf } from "@storybook/react";

import OfficialSiteBanner from '../../uswds/components/OfficialSiteBanner';

storiesOf("USWDS|Components/Headers", module)
  .add("Official Site Banner", () => <OfficialSiteBanner />);