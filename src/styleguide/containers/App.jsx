import React from "react";
import PropTypes from "prop-types";

/**
 * The main app component for the Styleguide.
 *
 * This component will render the main page layout items as well as any header
 * metadata supplied to the `<Helmet .../>` component.
 */
export default class App extends React.Component {
  /**
   * Renders the component.
   *
   * @returns {Node|null} The rendered DOM node.
   */

   static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <React.Fragment>
        <h1>USWDS Components</h1>
        <p>Included here are some frequently used components from v2.0.3 ofthe United States Web Design System, implemented as React components.</p>
        <p><strong>See all USWDS components.</strong> To browse the entire collection of USWDS components, visit <a href="https://components.designsystem.digital.gov/" target="_blank" rel="noopener noreferrer">components.designsystem.digital.gov <span className="usa-sr-only">opens in new window</span></a>.</p>
      </React.Fragment>
    );
  }
}


