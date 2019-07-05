import React from "react";
import {
  DocsPage,
  DocsComponent,
  DocsSection,
  DocsExample,
  DocsPreview
} from "./Docs.jsx";
import Highlight from "react-highlight";

import Form from '../../uswds/components/Form';
import Fieldset from '../../uswds/components/Fieldset';
import TextInput from '../../uswds/components/TextInput';

/**
 * Displays the Styleguide content for Form Templates.
 */
export default class FormTemplatesContainer extends React.Component {
  /**
   * Renders the component.
   *
   * @returns {Node|null} The rendered DOM node.
   */
  render() {
    return (
      <DocsPage title="Form templates">
        {/* If multiple component or component groups on the page, wrap each in a DocsComponent */}
        <DocsComponent title="Component name" id="XXXX_THE_ID_XXXX">
          {/* Accessibility */}
          <DocsSection title="Accessibility">
            <h4>Known issues with screen readers</h4>
            <p>
              VoiceOver on iOS currently does not support fieldset and legend
              for forms. You can address this by using
              aria-labelledby="for-attribute-of-label id-of-legend
              id-of-additional-info" on each input in the fieldset. Using
              aria-labelledby will overwrite the default text read by the screen
              reader, so it is important to include all relevant information.
            </p>
            <p>
              VoiceOver on OS X currently does not support aria-describedby. Use
              aria-labelledby instead, and include all related fields,
              including, labels, legend, and hint text
            </p>
          </DocsSection>

          {/* Usage */}
          <DocsSection title="Usage">
            <DocsExample>
              <DocsPreview>
                <Form>
                  <Fieldset legend="Name">
                    <TextInput id="title" label="Title" labelHint="(optional)" classes="usa-input--small" />
                    <TextInput id="first-name" label="First name" />
                    <TextInput id="middle-name" label="Middle name" labelHint="(optional)"/>
                    <TextInput id="last-name" label="Last name" />
                  </Fieldset> 
                </Form>
              </DocsPreview>
              <Highlight className="html">
                {`<Form>
  <Fieldset legend="Name">
  <TextInput id="title" label="Title" labelHint="(optional)" classes="usa-input--small" />
  <TextInput id="first-name" label="First name" />
  <TextInput id="middle-name" label="Middle name" labelHint="(optional)"/>
  <TextInput id="last-name" label="Last name" />
  </Fieldset>
</Form>`}
              </Highlight>
            </DocsExample>
          </DocsSection>
        </DocsComponent>
      </DocsPage>
    );
  }
}
