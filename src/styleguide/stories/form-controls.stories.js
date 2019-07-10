import React from "react";
import { storiesOf } from "@storybook/react";
import {
  EmailValidator,
  ZipCodeValidator,
  PhoneValidator
} from "../../uswds/utils/validators";
import TextInput from "../../uswds/components/TextInput";
import TextArea from "../../uswds/components/TextArea";
import Dropdown from "../../uswds/components/Dropdown";
import Checkbox from "../../uswds/components/Checkbox";
import Radio from "../../uswds/components/Radio";
import Fieldset from "../../uswds/components/Fieldset";
import FormGroup from "../../uswds/components/FormGroup";

storiesOf("USWDS|Components/FormControls/TextInput", module)
  .add("default", () => <TextInput label="Text input label" id="firstInput" />)
  .add("required", () => (
    <div className="wrapper">
      <TextInput label="This input is required" id="secondInput" required />
    </div>
  ))
  .add("validated", () => (
    <div className="wrapper">
      <TextInput
        id="email-input"
        label="Email address"
        type="email"
        value="gwashington@potus.com"
        isValid
        validators={[EmailValidator]}
      />
    </div>
  ))
  .add("has an error(invalid)", () => (
    <div className="wrapper">
      <FormGroup hasError>
        <TextInput
          id="phone-error"
          label="ZIP code"
          value="666"
          errorMessage="Not a valid ZIP Code"
          validators={[ZipCodeValidator]}
        />
      </FormGroup>
    </div>
  ))
  .add("phone (with validation)", () => (
    <div className="wrapper">
      <TextInput
        id="phone-validator"
        type="tel"
        label="Phone number"
        validators={[PhoneValidator]}
      />
    </div>
  ));

storiesOf("USWDS|Components/FormControls/Textarea", module)
  .add("default", () => (
    <div className="wrapper">
      <TextArea label="How did you hear about us?" />
    </div>
  ))
  .add("with error message", () => (
    <div className="wrapper">
      <TextArea
        label="How did you hear about us?"
        errorMessage="Computer says no"
        value="I googled and actually clicked next page several times until I found you"
      />
    </div>
  ));

storiesOf("USWDS|Components/FormControls/Dropdown", module)
  .add("default", () => (
    <div className="wrapper">
      <Dropdown id="dropdown1" label="Dropdown label">
        <option value="value1">Option A</option>
        <option value="value2">Option B</option>
        <option value="value3">Option C</option>
      </Dropdown>
    </div>
  ))
  .add("with error", () => (
    <div className="wrapper">
      <Dropdown
        id="dropdown2"
        label="Dropdown label"
        errorMessage="Wrong choice!"
        value={"value3"}
      >
        <option value="value1">Option A</option>
        <option value="value2">Option B</option>
        <option value="value3">Option C</option>
      </Dropdown>
    </div>
  ));

storiesOf("USWDS|Components/FormControls/Checkboxes", module)
  .add("default", () => (
    <div className="wrapper">
      <Fieldset
        name="historical-figures-1"
        legend="Historial figures"
        legendHidden
      >
        <Checkbox label="Sojourner Truth" />
        <Checkbox label="Frederick Douglass" />
        <Checkbox label="Booker T. Washington" />
        <Checkbox label="George Washington Carver" />
      </Fieldset>
    </div>
  ))
  .add("with option selected by default", () => (
    <div className="wrapper">
      <Fieldset
        name="historical-figures-1a"
        legend="Historial figures"
        legendHidden
      >
        <Checkbox label="Sojourner Truth" defaultChecked />
        <Checkbox label="Frederick Douglass" />
        <Checkbox label="Booker T. Washington" />
        <Checkbox label="George Washington Carver" />
      </Fieldset>
    </div>
  ))
  .add("with option disabled", () => (
    <div className="wrapper">
      <Fieldset
        name="historical-figures-1b"
        legend="Historial figures"
        legendHidden
      >
        <Checkbox label="Sojourner Truth" />
        <Checkbox label="Frederick Douglass" disabled />
        <Checkbox label="Booker T. Washington" disabled />
        <Checkbox label="George Washington Carver" />
      </Fieldset>
    </div>
  ));

storiesOf("USWDS|Components/FormControls/Radio buttons", module)
  .add("default", () => (
    <div className="wrapper">
      <Fieldset
        name="historical-figures-2a"
        legend="Historial figures"
        legendHidden
      >
        <Radio id="truth" label="Sojourner Truth" />
        <Radio id="douglass" label="Frederick Douglass" />
        <Radio id="washington" label="Booker T. Washington" />
        <Radio id="carver" label="George Washington Carver" />
      </Fieldset>
    </div>
  ))
  .add("with option selected by default", () => (
    <div className="wrapper">
      <Fieldset
        name="historical-figures-2b"
        legend="Historial figures"
        legendHidden
      >
        <Radio id="truth" label="Sojourner Truth" />
        <Radio id="douglass" label="Frederick Douglass" defaultChecked />
        <Radio id="washington" label="Booker T. Washington" />
        <Radio id="carver" label="George Washington Carver" />
      </Fieldset>
    </div>
  ))
  .add("with option disabled", () => (
    <div className="wrapper">
      <Fieldset
        name="historical-figures-2c"
        legend="Historial figures"
        legendHidden
      >
        <Radio id="truth" label="Sojourner Truth" />
        <Radio id="douglass" label="Frederick Douglass" />
        <Radio id="washington" label="Booker T. Washington" disabled />
        <Radio id="carver" label="George Washington Carver" />
      </Fieldset>
    </div>
  ));

storiesOf("USWDS|Components/FormControls/Fieldset", module)
  .add("default", () => (
    <div className="wrapper">
      <Fieldset name="choices" legend="Best choices">
        <Checkbox id="value1" label="Option A" />
        <Checkbox id="value2" label="Option B" />
        <Checkbox id="value3" label="Option C" />
      </Fieldset>
    </div>
  ))
  .add("with legend hidden", () => (
    <div className="wrapper">
      <Fieldset name="choices" legend="Best choices" legendHidden>
        <Checkbox id="value1" label="Option A" />
        <Checkbox id="value2" label="Option B" />
        <Checkbox id="value3" label="Option C" />
      </Fieldset>
    </div>
  ));
