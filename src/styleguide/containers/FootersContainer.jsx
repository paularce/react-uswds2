import React from "react";


//  Displays the Styleguide content for Footers.
 
export default class FootersContainer extends React.Component {

  //  Renders the component.
  // 
  //  @returns {Node|null} The rendered DOM node.
  
  render() {
    return (
      <React.Fragment>
        <h1>Footers</h1>
    
        <p> For the Footer code and its variants, visit <a href="https://components.designsystem.digital.gov/" target="_blank" rel="noopener noreferrer">components.designsystem.digital.gov <span className="usa-sr-only">opens in new window</span></a>.</p>
      </React.Fragment>
    );
  }
}
