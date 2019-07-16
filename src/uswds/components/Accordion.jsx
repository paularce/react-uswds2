
import React from 'react';
import PropTypes from 'prop-types';

import utilities from '../helpers/utilities.js';

//  Provides a standard accordion component.
// 
//  This component expects that its children will be {@link AccordionItem}s.
// 
//  Accordion components can be displayed using one of two styles.  The default
//  style is borderless, where the active content does not have a border around
//  it.  If a border is desired, you can supply a `bordered` prop with the value
//  of `true`.
// 
//  Example:
//  <code>
//    // Borderless accordion
//    <Accordion>
//      <AccordionItem ... />
//    </Accordion>
// 
//    // Bordered accordion
//    <Accordion bordered>
//      <AccordionItem ... />
//    </Accordion>
//  </code>
// 
//  By default the Accordion will expand the first item.  To prevent this behavior,
//  you can supply the `startCollapsed` prop.
// 
//  Example:
//  <code>
//    <Accordion startCollapsed>
//      <AccordionItem ... />
//    </Accordion>
//  </code>
 
export class Accordion extends React.Component {
  static propTypes = {
    bordered: PropTypes.bool,
    children: PropTypes.node,
    startCollapsed: PropTypes.bool
  };

  static defaultProps = {
    bordered: false,
    startCollapsed: false
  };

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: props.startCollapsed ? -1 : 0
    };
  }

  
  //  Before the component mounts, loop through the children to see if any of
  //  them have the `expanded` prop.  This allows consumers of this class to
  //  specify which specific item they want expanded when the component is
  //  rendered.
  // 
  //  If no items have `expanded` passed as a prop, then the default behavior
  //  will take effect.
  // 
  //  If more than one item has `expanded`, the last one wins and a console
  //  warning will be printed.
  
  componentWillMount() {
    let foundExpandedItem = false;
    let children = React.Children.toArray(this.props.children);
    for (let i = 0; i < children.length; i++) {
      let child = children[i];
      if (child.props.expanded) {
        if (foundExpandedItem) {
          console.warn(
            'Only one AccordionItem can be expanded at a time. You have marked more than one for expansion by default.'
          ); // eslint-disable-line no-console
        }
        this.setState({ activeIndex: i });
        foundExpandedItem = true;
      }
    }
  }

  //  Sets the active accordion item.
  // 
  //  This method is assigned as the `action` of child {@link AccordionItem}
  //  components.  When the user clicks on a header of one of the accordion items,
  //  it will invoke this method with its index.  We can simply update our state,
  //  which will cause the children to be re-rendered so that the correct item
  //  has its content displayed.
  // 
  //  To collapse all the items, pass -1 as the value.
  // 
  //  @param {Number} index The item index that should be the active item.
  // 
  setActiveItem(index) {
    this.setState({ activeIndex: index });
  }

  render() {
    let index = 0;
    let children = React.Children.map(this.props.children, child => {
      let i = index++;
      return React.cloneElement(child, {
        accordionIndex: i,
        action: this.setActiveItem.bind(this),
        expanded: i === this.state.activeIndex
      });
    });
    return (
      <div
        className={`usa-accordion ${
          this.props.bordered ? 'usa-accordion--bordered' : ''
        }`}
      >
        {children}
      </div>
    );
  }
}

// =============================================================================


//  Represents a single item in an Accordion object.
// 
//  Accordion items have two parts.  The first is the header element that is
//  always displayed.  The second is the content element that is only displayed
//  if this item is the active one.  The {@link Accordion} class is responsible
//  for managing which item is active.  When this component is rendered as a
//  child of the {@link Accordion} class, it will automatically set the
//  `accordionIndex` and `action` props which indicate which index we are and the
//  function to call when our header element is clicked to make us the active
//  item.
// 
//  The header element can be specified in one of two ways.  The first is
//  to simply supply the `title` prop to have that string rendered as the
//  header.  In this case, the content should be supplied as the child of
//  this component.
// 
//  The second way to specify the header is to provide two child elements. In this
//  case the first will be used as the header, and the second as the content.
// 
//  See the example below for sample code for each method.
// 
//  Example:
//  <code>
//    <AccordionItem title='First Amendment'>
//      <p>Congress shall make no law respecting an establishment of ...</p>
//    </AccordionItem>
//    <AccordionItem>
//      <span>First Amendment</span>
//      <p>Congress shall make no law respecting an establishment of ...</p>
//    </AccordionItem>
//  </code>
 
export class AccordionItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      uuid: ''
    };
  }

  static propTypes = {
    accordionIndex: PropTypes.number,
    action: PropTypes.func,
    children: PropTypes.node,
    expanded: PropTypes.bool,
    title: PropTypes.string
  };

  static defaultProps = {
    action: function() {},
    expanded: false,
    title: ''
  };


  //  Generates a unique ID for this element using the {@link Utilities}
  //  function {@link uniqueIdForComponent}.
  // 
  //  This must happen after the component has been mounted because the
  //  {@link uniqueIdForComponent} method will check to see if the DOM element
  //  has a `data-reactid` attribute and use that if present.  This helps keep
  //  continuity between what was rendered on the server and what the client
  //  sees.
  // 
  //  After retrieving the appropriate unique ID, we set our state's `uuid`
  //  variable to that ID which will cause the component to re-render.

  componentDidMount() {
    let id = utilities.uniqueIdForComponent(this);
    this.setState({ uuid: id });
  }

  //  Click handler for the title element.
  // 
  //  This method calls the method defined in our `action` prop (usually set
  //  by the parent {@link Accordion} class) with our index to make ourselves
  //  the active element and show our content.
  // 
  //  If this item is currently active, it will pass -1 as the value to the
  //  parent {@link Accordion} so that it will collapse the item.
  makeActive = () => {
    if (this.props.expanded) {
      this.props.action(-1);
    } else {
      this.props.action(this.props.accordionIndex);
    }
  };

  //  Renders the title element of this accordion item.
  // 
  //  This element will act as a button and invoke our {@link makeActive}
  //  method whenever it is clicked.
  // 
  //  See the class documentation for more information on how to supply the value
  //  for this element.
  // 
  //  @returns {Node} The rendered DOM node.
  renderTitleElement() {
    let element;
    if (this.props.title.length > 0) {
      element = <span>{this.props.title}</span>;
    } else {
      if (React.Children.count(this.props.children) !== 2) {
        throw new Error('Either a title or 2 child elements must be supplied.');
      }
      let children = React.Children.toArray(this.props.children);
      element = children[0];
    }
    return (
      <h2 className='usa-accordion__heading'>
        <button
          className='usa-accordion__button'
          aria-expanded={this.props.expanded}
          aria-controls={`${this.state.uuid}-content`}
          onClick={this.makeActive}>
          {element}
        </button>
      </h2>
    );
  }


  //  Renders our content element
  // 
  //  @returns {Node} The rendered DOM node 
   
  renderContentElement() {
    let children = React.Children.toArray(this.props.children);
    let element = children.length === 2 ? children[1] : children[0];
    return (
      <div
        id={`${this.state.uuid}-content`}
        className='usa-accordion__content usa-prose'>
        {element}
      </div>
    );
  }

  render() {
    // Ensure there are only 2 children.
    if (React.Children.count(this.props.children) > 2) {
      throw new Error('AccordionItem elements must have no more than 2 children.');
    }

    return (
      <React.Fragment>
        {this.renderTitleElement()}
        {this.renderContentElement()}
      </React.Fragment>
    );
  }
}
