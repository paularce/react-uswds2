import React from "react";
import PropTypes from 'prop-types';
import Link from "./Link";

/**
 * Provides a common sidebar.
 *
 * This class is meant to be used in conjunction with the {@link SidebarItem} 
 * component.  {@link SidebarItem}s can be nested to provide a hierarchy of 
 * links.
 *
 * Example:
 * <code>
 *   <Sidebar>
 *     <SidebarLink label="Index" to="/" onlyActiveOnIndex={true} />
 *     <SidebarLink label="First" to="/first" />
 *     <SidebarLink label="Second" to="/second">
 *       <SidebarLink label="TwoPointOne" to="/second/one" />
 *       <SidebarLink label="TwoPointTwo" to="/second/two" />
 *     </SidebarLink>
 *   </Sidebar>
 * </code>
 */
export class Sidebar extends React.Component{

  static propTypes = {
    children: PropTypes.node,
    classes: PropTypes.string
  };
  
  /**
   * Renders the component.
   *
   * @returns {Node|null} The rendered DOM node.
   */
  render()
  {
    return (
      <ul className={`usa-sidenav ${this.props.classes}`}>
        {this.props.children}
      </ul>
    );
  }
}


// =============================================================================


/**
 * Returns a link suitable for displaying in the {@link Sidebar} component.
 *
 * This class can optionally take children that are also {@link SidebarLink} 
 * components.  This allows for nested links in the sidebar.
 *
 * For more information on how to use the {@link Sidebar} and {@link SidebarLink}s, 
 * please see the documentation for {@link Sidebar}.
 */
export class SidebarLink extends React.Component
{
  /**
   * Renders the children of this component.
   *
   * It's possible that this link doesn't have any children, in which case, 
   * it returns an empty string. Otherwise, it return a `ul` element with all 
   * the children.
   *
   * @returns {Node|String} The rendered DOM node or an empty string.
   */

  static propTypes = {
    label: PropTypes.string.isRequired, 
    children: PropTypes.node
  }
  renderChildren()
  {
    let children = "";
    if (React.Children.count(this.props.children) > 0) {
      children = (
        <ul className="usa-sidenav__sublist">
          {this.props.children}
        </ul>
      );
    }
    return children;
  }
  
  /**
   * Renders the component.
   *
   * @returns {Node|null} The rendered DOM node.
   */
  render() {
    return (
      <li className="usa-sidenav__item">
        <Link {...this.props}>{this.props.label}</Link>
        
        {this.renderChildren()}
      </li>
    );
  }
}
