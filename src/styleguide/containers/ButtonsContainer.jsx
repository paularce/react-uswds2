import React from "react";
import Label from '../../uswds/components/Label';
import { DocsPage, DocsSection, DocsExample, DocsPreview } from './Docs.jsx';
import Highlight from 'react-highlight';
import { Table, TableRow, TableHeaderCell, TableCell } from '../../uswds/components/Tables';
import Button from "../../uswds/components/Button";

/**
 * Buttons content
 * @returns {node} node
 */
export default function ButtonsContainer () {
  return (
    <DocsPage title="Buttons">
      
      {/* Importing */}
      <DocsSection title="Importing">
        <Highlight language="javascript">
          {`import Button from ".%path%/uswds/components/Button";`}
        </Highlight>
      </DocsSection>

      {/* Props */}
      <DocsSection title="Props">
        <Table columns={['Prop', 'Type', 'Default', 'Description']}>
          <TableRow>
            <TableHeaderCell>text  <Label>Required</Label></TableHeaderCell>
            <TableCell>string</TableCell>
            <TableCell>&nbsp;</TableCell>
            <TableCell>...</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell>disabled</TableHeaderCell>
            <TableCell>bool</TableCell>
            <TableCell>false</TableCell>
            <TableCell>If true, makes button disabled</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell>classes</TableHeaderCell>
            <TableCell>string</TableCell>
            <TableCell>additional classes added to button</TableCell>
            <TableCell>...</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell>onClick</TableHeaderCell>
            <TableCell>func</TableCell>
            <TableCell>&nbsp;</TableCell>
            <TableCell>...</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell>size</TableHeaderCell>
            <TableCell>oneOf ['', 'big']</TableCell>
            <TableCell>''</TableCell>
            <TableCell>...</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell>status</TableHeaderCell>
            <TableCell>oneOf ["", 'active', "hover"]</TableCell>
            <TableCell>''</TableCell>
            <TableCell>...</TableCell>
          </TableRow>
        </Table>
      </DocsSection>

      {/* Usage */}
      <DocsSection title="Usage">
        <DocsExample>
          <DocsPreview>
            <h4>Primary Buttons</h4>
            <div className="button_wrapper">
              <Button text={'Default'} />
              <Button text={'Active'} status="active" />
              <Button text={'Hover'} status="hover" />
            </div>
            <h4>Disabled Button</h4>
            <div className="button_wrapper">
              <Button text={'Default'} disabled />
            </div>
            <h4>Big Button</h4>
            <div className="button_wrapper">
              <Button text={'Default'} size="big" />
            </div>
          </DocsPreview>
          <Highlight className="html">
{`<h4>Primary Buttons</h4>
<div className="button_wrapper">
  <Button text={'Default'} />
  <Button text={'Active'} status="active" />
  <Button text={'Hover'} status="hover" />
</div>
<h4>Disabled Button</h4>
<div className="button_wrapper">
  Button text={'Default'} disabled />
</div>
<h4>Big Button</h4>
<div className="button_wrapper">
  <Button text={'Default'} size="big" />
</div>`}
          </Highlight>
        </DocsExample>
      </DocsSection>
    </DocsPage>
  );
}
