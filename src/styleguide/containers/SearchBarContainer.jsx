import React from 'react';
import { DocsPage, DocsSection, DocsExample, DocsPreview } from './Docs.jsx';
import Highlight from 'react-highlight';
import {
  Table,
  TableRow,
  TableHeaderCell,
  TableCell
} from '../../uswds/components/Tables';
import SearchField from '../../uswds/components/SearchField';
import { Grid, Col } from '../../uswds/components/Grid';
import Tag from '../../uswds/components/Tag';

//  * Displays the Styleguide content for Search Bars.

export default class SearchBarContainer extends React.Component {
  //  Renders the component.
  // 
  //  @returns {Node|null} The rendered DOM node.

  render() {
    return (
      <DocsPage title='Search Field'>
        <DocsSection title='Importing'>
          <Highlight className='javascript'>
            {`import SearchField from '.%path%/uswds/components/SearchField';`}
          </Highlight>
        </DocsSection>

        <DocsSection title='Props'>
          <Table columns={['Prop', 'Type', 'Default', 'Description']}>
            <TableRow>
              <TableHeaderCell>
                id <br />
                <Tag>Required</Tag>
              </TableHeaderCell>
              <TableCell>string</TableCell>
              <TableCell>''</TableCell>
              <TableCell>Page unique Id for the input</TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell>size </TableHeaderCell>
              <TableCell>big | small | ''</TableCell>
              <TableCell>''</TableCell>
              <TableCell>Denotes size variant to display</TableCell>
            </TableRow>
          </Table>
        </DocsSection>

        <DocsSection title='Usage'>
          <DocsExample>
            <DocsPreview>
              <Grid full>
                <Col classes='grid-col-8 grid-offset-2'>
                  <h4>Search Big</h4>
                  <SearchField id='search-big' size='big' />
                  <h4>Search (Default)</h4>
                  <SearchField id='search-default' />
                  <h4>Search Small</h4>
                  <SearchField id='search-small' size='small' />
                  <br />
                </Col>
              </Grid>
            </DocsPreview>
            <Highlight className='html'>
              {`<h4>Search Big</h4>
  <SearchField id="search-big" size='big' />
<h4>Search (Default)</h4>
  <SearchField id="search-default" />
<h4>Search Small</h4>
  <SearchField id="search-small" size='small' />`}
            </Highlight>
          </DocsExample>
        </DocsSection>
      </DocsPage>
    );
  }
}
