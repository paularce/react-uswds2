import React from 'react';
import PropTypes from 'prop-types';

export function DocsPage(props) {
  return (
    <div className='styleguide-content usa-content'>
      <header>
        <h1>{props.title}</h1>
      </header>

      {props.children}
    </div>
  );
}
DocsPage.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
};

export function DocsComponent(props) {
  let title = null;

  if (props.title) {
    title = <h2 className='usa-heading'>{props.title}</h2>;
  }
  return (
    <section id={props.id} className='docs-component'>
      {title}
      {props.children}
    </section>
  );
}
DocsComponent.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.node
};

export function DocsSection(props) {
  let title = null;

  if (props.title) {
    title = <h3>{props.title}</h3>;
  }
  return (
    <section className='docs-section'>
      {title}
      {props.children}
    </section>
  );
}
DocsSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export function DocsExample(props) {
  return <div className='example'>{props.children}</div>;
}
DocsExample.propTypes = {
  children: PropTypes.node
};

export function DocsPreview(props) {
  return <div className={'preview ' + props.className}>{props.children}</div>;
}
DocsPreview.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
