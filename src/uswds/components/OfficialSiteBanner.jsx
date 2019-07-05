import React from "react";

import  flagSmall from '../assets/img/us_flag_small.png';
import dotgov from '../assets/img/icon-dot-gov.svg';
import iconHttps from '../assets/img/icon-https.svg';

/**
 * Renders the standard official site banner indicating that this site is an
 * official government site.
 *
 * This component is usually rendered in the common {@link Header}. You should
 * only need to add this manually if you are implementing your own header.
 * In that case, this should be the element that is at the very top of the
 * window.
 *
 * For more information, please consult the
 * [U.S. Web Design Standards](https://standards.usa.gov).
 */
export default class OfficialSiteBanner extends React.Component {
  /**
   * Constructor.
   *
   * @param {Object} props The props that will be applied to this component.
   */
  constructor(props) {
    super(props);
    this.state = {
      contentVisible: false
    };
  }

  /**
   * Toggles the visiblity of the content section.
   */
  toggleDetails = () => {
    this.setState({ contentVisible: !this.state.contentVisible });
  }

  /**
   * Renders the content of the accordion that expands when the user clicks
   * on the "Here's how you know" link.
   *
   * @returns {Node|String} The rendered DOM node or an empty string.
   */
  renderContent() {
    return (
          <div
            className="usa-banner__content usa-accordion__content"
            id="gov-banner"
            hidden>
            <div className="grid-row grid-gap-lg">
              <div className="usa-banner__guidance tablet:grid-col-6">
                <img
                  className="usa-banner__icon usa-media-block__img"
                  src={dotgov}
                  alt="Dot gov" />
                <div className="usa-media-block__body">
                  <p>
                    <strong>The .gov means it’s official.</strong>
                    <br />
                    Federal government websites often end in .gov or .mil.
                    Before sharing sensitive information, make sure you’re on a
                    federal government site.
                  </p>
                </div>
              </div>
              <div className="usa-banner__guidance tablet:grid-col-6">
                <img
                  className="usa-banner__icon usa-media-block__img"
                  src={iconHttps}
                  alt="Https" />
                <div className="usa-media-block__body">
                  <p>
                    <strong>The site is secure.</strong>
                    <br />
                    The <strong>https://</strong> ensures that you are
                    connecting to the official website and that any information
                    you provide is encrypted and transmitted securely.
                  </p>
                </div>
              </div>
            </div>
          </div>
    );
  }

  /**
   * Renders the component.
   *
   * @returns {Node|null} The rendered DOM node.
   */
  render() {
    return (
      <div className="site-banner usa-banner">
        <div className="usa-accordion">
          <header className="usa-banner__header">
            <div className="usa-banner__inner">
              <div className="grid-col-auto">
                <img
                  className="usa-banner__header-flag"
                  src={flagSmall}
                  alt="U.S. flag" />
              </div>
              <div className="grid-col-fill tablet:grid-col-auto">
                <p className="usa-banner__header-text">
                  An official website of the United States government
                </p>
                <p className="usa-banner__header-action" aria-hidden="true">
                  Here’s how you know
                </p>
              </div>
              <button
                className="usa-accordion__button usa-banner__button"
                aria-expanded="false"
                aria-controls="gov-banner"
                onClick={this.toggleDetails}>
                <span className="usa-banner__button-text">
                  Here's how you know
                </span>
              </button>
            </div>
          </header>
          {this.renderContent()}
        </div>
      </div>
    );
  }
}
