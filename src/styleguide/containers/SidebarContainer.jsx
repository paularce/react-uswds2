import React from 'react';

export default class SidebarContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Side Navigation</h1>

        <p>
          {' '}
          For the Side Navigation code and its variants, visit{' '}
          <a
            href='https://components.designsystem.digital.gov/'
            target='_blank'
            rel='noopener noreferrer'
          >
            components.designsystem.digital.gov{' '}
            <span className='usa-sr-only'>opens in new window</span>
          </a>
          .
        </p>
      </React.Fragment>
    );
  }
}
