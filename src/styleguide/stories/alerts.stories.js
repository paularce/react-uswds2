import React from "react";
import { storiesOf } from "@storybook/react";

import Alert from "../../uswds/components/Alert";

const longMessage = (
  <div>
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque.
    </p>
    <p>
      Beard skateboard bushwick, affogato vegan normcore pinterest offal
      intelligentsia stumptown fam iPhone hoodie sustainable poke.
    </p>
  </div>
);
const message =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.";
storiesOf("USWDS|Components/Alerts", module)
  .add("with string body", () => (
    <div className="wrapper"><Alert title="Info Alert" body="This is an info alert." /></div>
  ))
  .add("with HTML in body", () => (
    <div className="wrapper"><Alert title="Info Status" body={longMessage} /></div>
  ))
  .add("variants", () => (
    <div className="wrapper">
      <Alert type="success" title="Success Status" body={message} />
      <Alert type="warning" title="Warning Status" body={message} />
      <Alert type="error" title="Error Status" body={message} />
    </div>
  ));
