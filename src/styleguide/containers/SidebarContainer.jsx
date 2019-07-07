import React from "react";
import { DocsPage, DocsComponent, DocsSection, DocsExample, DocsPreview } from './Docs.jsx';
import Highlight from 'react-highlight';
import { Table, TableRow, TableHeaderCell, TableCell } from '../../uswds/components/Tables';
import Tag from '../../uswds/components/Tag';

/**
 * Displays the Styleguide content for Sidebars.
 */
export default class SidebarContainer extends React.Component
{
  /**
   * Renders the component.
   *
   * @returns {Node|null} The rendered DOM node.
   */
  render()
  {
    return (
      <React.Fragment>
        <h1>Side Navigation</h1>
    
        <p> For the Side Navigation code and its variants, visit <a href="https://components.designsystem.digital.gov/" target="_blank" rel="noopener noreferrer">components.designsystem.digital.gov <span className="usa-sr-only">opens in new window</span></a>.</p>
      </React.Fragment>
    );
  }
}
