import React from "react";
import { DocsPage, DocsSection, DocsExample, DocsPreview } from './Docs.jsx';
import Highlight from 'react-highlight';
import { Table, TableRow, TableHeaderCell, TableCell } from '../../uswds/components/Tables';


import Tag from '../../uswds/components/Tag';


//  * Displays the Styleguide content for Colors.
 
export default class ColorsContainer extends React.Component {
  //  Renders the component.
  // 
  //  @returns {Node|null} The rendered DOM node.

  render() {
    return (
      <DocsPage title="Tag">
          
          <DocsSection title="Importing">
            <Highlight className="javascript">
              {`import Tag from '.%path%/uswds/components/Tag.jsx';`}
            </Highlight>
          </DocsSection>
          
          <DocsSection title="Props">
            <Table columns={['Prop', 'Type', 'Default', 'Description']}>
              <TableRow>
                <TableHeaderCell>classes</TableHeaderCell>
                <TableCell>string</TableCell>
                <TableCell>''</TableCell>
                <TableCell>any additional css class to be added to Tag</TableCell>
              </TableRow>
            </Table>
          </DocsSection>
          
          <DocsSection title="Usage">
            <DocsExample>
              <DocsPreview>
                <Tag>New</Tag>
              </DocsPreview>
              <Highlight className="html">
                {`<Tag>New</Tag>`}
              </Highlight>
            </DocsExample>
          </DocsSection>
          
      </DocsPage>
    );
  }
}
