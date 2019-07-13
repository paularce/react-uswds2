import React from 'react';
import { DocsPage, DocsSection, DocsExample, DocsPreview } from './Docs.jsx';
import Highlight from 'react-highlight';
import {
  Table,
  TableRow,
  TableHeaderCell,
  TableCell
} from '../../uswds/components/Tables';
import { Grid, Col } from '../../uswds/components/Grid';
import Tag from '../../uswds/components/Tag';

export default function GridContainer() {
  return (
    <DocsPage title='Grid'>
      <DocsSection title='Importing'>
        <Highlight language='javascript'>
          {`import { Grid, Col } from '../../uswds/components/Grid';`}
        </Highlight>
      </DocsSection>

      <DocsSection title='Props'>
        <h4>Grid</h4>
        <Table columns={['Prop', 'Type', 'Default', 'Description']}>
          <TableRow>
            <TableHeaderCell>full</TableHeaderCell>
            <TableCell>bool</TableCell>
            <TableCell>false</TableCell>
            <TableCell>Denotes if grid is full width</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell>children</TableHeaderCell>
            <TableCell>node</TableCell>
            <TableCell>&nbsp;</TableCell>
            <TableCell>
              Expected to be one or more <code>Col</code>'s
            </TableCell>
          </TableRow>
        </Table>

        <h4>Col</h4>
        <Table columns={['Prop', 'Type', 'Default', 'Description']}>
          <TableRow>
            <TableHeaderCell>
              classes
              <br />
              <Tag>Required</Tag>
            </TableHeaderCell>
            <TableCell>string</TableCell>
            <TableCell>&nbsp;</TableCell>
            <TableCell>grid-col classes </TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell>children</TableHeaderCell>
            <TableCell>node</TableCell>
            <TableCell>&nbsp;</TableCell>
            <TableCell>Contents of the column</TableCell>
          </TableRow>
        </Table>
      </DocsSection>

      <DocsSection title='Usage'>
        <DocsExample>
          <h5>Column width in number of columns</h5>
          <DocsPreview className='grid-example'>
            <Grid full>
              <Col classes='grid-col-1'>1</Col>
              <Col classes='grid-col-1'>1</Col>
              <Col classes='grid-col-1'>1</Col>
              <Col classes='grid-col-1'>1</Col>
              <Col classes='grid-col-1'>1</Col>
              <Col classes='grid-col-1'>1</Col>
              <Col classes='grid-col-1'>1</Col>
              <Col classes='grid-col-1'>1</Col>
              <Col classes='grid-col-1'>1</Col>
              <Col classes='grid-col-1'>1</Col>
              <Col classes='grid-col-1'>1</Col>
              <Col classes='grid-col-1'>1</Col>
            </Grid>
            <Grid full>
              <Col classes='grid-col-12'>12</Col>
            </Grid>
            <Grid full>
              <Col classes='grid-col-6'>6</Col>
              <Col classes='grid-col-6'>6</Col>
            </Grid>
            <Grid full>
              <Col classes='grid-col-5'>5</Col>
              <Col classes='grid-col-7'>7</Col>
            </Grid>
            <Grid full>
              <Col classes='grid-col-4'>4</Col>
              <Col classes='grid-col-8'>8</Col>
            </Grid>
            <Grid full>
              <Col classes='grid-col-3'>3</Col>
              <Col classes='grid-col-9'>9</Col>
            </Grid>
            <Grid full>
              <Col classes='grid-col-2'>2</Col>
              <Col classes='grid-col-10'>10</Col>
            </Grid>
            <Grid full>
              <Col classes='grid-col-1'>1</Col>
              <Col classes='grid-col-5'>5</Col>
              <Col classes='grid-col-6'>6</Col>
            </Grid>
          </DocsPreview>
          <Highlight className='html'>
            {`<Grid full>
  <Col classes="grid-col-1">1</Col>
  <Col classes="grid-col-1">1</Col>
  <Col classes="grid-col-1">1</Col>
  <Col classes="grid-col-1">1</Col>
  <Col classes="grid-col-1">1</Col>
  <Col classes="grid-col-1">1</Col>
  <Col classes="grid-col-1">1</Col>
  <Col classes="grid-col-1">1</Col>
  <Col classes="grid-col-1">1</Col>
  <Col classes="grid-col-1">1</Col>
  <Col classes="grid-col-1">1</Col>
  <Col classes="grid-col-1">1</Col>
</Grid>
<Grid full>
  <Col classes="grid-col-12">12</Col>
</Grid>
<Grid full> 
  <Col classes="grid-col-6">6</Col>
  <Col classes="grid-col-6">6</Col>
</Grid>
<Grid full>
  <Col classes="grid-col-5">5</Col>
  <Col classes="grid-col-7">7</Col>
</Grid>
<Grid full>
  <Col classes="grid-col-4">4</Col>
  <Col classes="grid-col-8">8</Col>
</Grid>
<Grid full>
  <Col classes="grid-col-3">3</Col>
  <Col classes="grid-col-9">9</Col>
</Grid>
<Grid full>
  <Col classes="grid-col-2">2</Col>
  <Col classes="grid-col-10">10</Col>
</Grid>
<Grid full>
  <Col classes="grid-col-1">1</Col>
  <Col classes="grid-col-5">5</Col>
  <Col classes="grid-col-6">6</Col>
</Grid>`}
          </Highlight>
        </DocsExample>

        <DocsExample>
          <h5>Media Query Stacked</h5>
          <DocsPreview className='grid-example'>
            <Grid full>
              <Col classes='tablet:grid-col'>tablet:grid-col</Col>
              <Col classes='tablet:grid-col'>tablet:grid-col</Col>
              <Col classes='tablet:grid-col'>tablet:grid-col</Col>
            </Grid>
          </DocsPreview>
          <Highlight className='html'>
            {`<Grid full>
  <Col classes="tablet:grid-col">tablet:grid-col</Col>
  <Col classes="tablet:grid-col">tablet:grid-col</Col>
  <Col classes="tablet:grid-col">tablet:grid-col</Col>
</Grid>
`}
          </Highlight>
        </DocsExample>

        <DocsExample>
          <h5>Variable width content</h5>
          <DocsPreview className='grid-example'>
            <Grid full>
              <Col classes='grid-col-auto'>grid-col-auto</Col>
              <Col classes='grid-col-fill'>grid-col-fill</Col>
              <Col classes='grid-col-fill'>grid-col-fill</Col>
              <Col classes='grid-col-auto'>grid-col-auto</Col>
            </Grid>
          </DocsPreview>
          <Highlight className='html'>
            {`<Grid full>
<Col classes="grid-col-auto">grid-col-auto</Col>
<Col classes="grid-col-fill">grid-col-fill</Col>
<Col classes="grid-col-fill">grid-col-fill</Col>
<Col classes="grid-col-auto">grid-col-auto</Col>
</Grid>
`}
          </Highlight>
        </DocsExample>

        <DocsExample>
          <h5>Offsetting Columns</h5>
          <DocsPreview className='grid-example'>
            <Grid full>
              <Col classes='grid-col-1'>1</Col>
              <Col classes='grid-col-1'>1</Col>
              <Col classes='grid-col-1'>1</Col>
              <Col classes='grid-col-1'>1</Col>
              <Col classes='grid-col-1'>1</Col>
              <Col classes='grid-col-1'>1</Col>
              <Col classes='grid-col-1'>1</Col>
              <Col classes='grid-col-1'>1</Col>
              <Col classes='grid-col-1'>1</Col>
              <Col classes='grid-col-1'>1</Col>
              <Col classes='grid-col-1'>1</Col>
              <Col classes='grid-col-1'>1</Col>
            </Grid>
            <Grid full>
              <Col classes='grid-col-8 grid-offset-4'>
                grid-col-8.grid-offset-4
              </Col>
            </Grid>
          </DocsPreview>
          <Highlight className='html'>
            {`<Grid full>
<Col classes="grid-col-8 grid-offset-4">grid-col-8.grid-offset-4</Col>
</Grid>
`}
          </Highlight>
        </DocsExample>
      </DocsSection>
    </DocsPage>
  );
}
