import React from "react";
import PropTypes from "prop-types";

//  The main app component for the Styleguide.
// 
//  This component will render the main page layout items as well as any header
//  metadata supplied to the `<Helmet .../>` component.

export default class HeadersContainer extends React.Component {

  //  Renders the component.
  // 
  //  @returns {Node|null} The rendered DOM node.


   static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <React.Fragment>
        <h1>Headers</h1>
    
        <p> For the Header code and its variants, visit <a href="https://components.designsystem.digital.gov/" target="_blank" rel="noopener noreferrer">components.designsystem.digital.gov <span className="usa-sr-only">opens in new window</span></a>.</p>
      </React.Fragment>
    );
  }
}
