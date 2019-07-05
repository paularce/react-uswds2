import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './styleguide/styles/styleguide.scss';

import Helmet from "react-helmet";
import Header from "./uswds/components/Header";
import { Sidebar, SidebarLink } from "./uswds/components/Sidebar";

import AppIndex from "./styleguide/containers/App";
import AccordionsContainer from "./styleguide/containers/AccordionsContainer";
import AlertsContainer from "./styleguide/containers/AlertsContainer";
import ButtonsContainer from "./styleguide/containers/ButtonsContainer";
import FootersContainer from "./styleguide/containers/FootersContainer";
import GridContainer from "./styleguide/containers/GridContainer";
import FormControlsContainer from "./styleguide/containers/FormControlsContainer";
import FormTemplatesContainer from "./styleguide/containers/FormTemplatesContainer";
import HeadersContainer from "./styleguide/containers/HeadersContainer";
import SearchBarContainer from "./styleguide/containers/SearchBarContainer";
import SidebarContainer from "./styleguide/containers/SidebarContainer";
import TablesContainer from "./styleguide/containers/TablesContainer";
import TagContainer from "./styleguide/containers/TagContainer";

function App() {
  return (
    <Router>
      <Helmet
          defaultTitle="USWDS React Components"
          titleTemplate="%s - asdf"
          meta={[
            {
              name: "description",
              content:
                "A boilerplate doing universal/isomorphic rendering with Redux + React-router + Express"
            }
          ]}
          htmlAttributes={{ lang: "en" }} />
      <Header title="United States Web Design System" />
      <div className="grid-container">
        <div className="grid-row">
          <div className="grid-col-3">
            <aside className="sidenav">
              <Sidebar classes="site-sidenav">
                <SidebarLink label="Accordions" to="/accordions" />
                <SidebarLink label="Alerts" to="/alerts" />
                <SidebarLink label="Buttons" to="/buttons" />
                <SidebarLink label="Footers" to="/footers" />
                <SidebarLink label="Form Controls" to="/form-controls">
                  <SidebarLink label="Text inputs" to="/form-controls#text-input"/>
                  <SidebarLink label="Textarea" to="/form-controls#text-area" />
                  <SidebarLink label="Dropdown" to="/form-controls#dropdown" />
                  <SidebarLink label="Checkboxes" to="/form-controls#checkboxes" />
                  <SidebarLink label="Radio buttons" to="/form-controls#radio-buttons" />
                  <SidebarLink label="Fieldset" to="/form-controls#field-set" />
                </SidebarLink>
                <SidebarLink label="Form Templates" to="/form-templates" />
                <SidebarLink label="Grid" to="/grid" />
                <SidebarLink label="Headers" to="/headers" />
                <SidebarLink label="Search" to="/search-bar" />
                <SidebarLink label="Side Navigation" to="/sidebar" />
                <SidebarLink label="Tables" to="/tables" />
                <SidebarLink label="Tag" to="/tag" />
              </Sidebar>
            </aside>
          </div>
          <div className="grid-col-9">
            <div className="App">
                <Route path="/accordions" component={AccordionsContainer} />
                <Route path="/alerts" component={AlertsContainer} />
                <Route path="/buttons" component={ButtonsContainer} />
                <Route path="/footers" component={FootersContainer} />
                <Route path="/form-controls" component={FormControlsContainer} />
                <Route path="/form-templates" component={FormTemplatesContainer} />
                <Route path="/grid" component={GridContainer} />
                <Route path="/headers" component={HeadersContainer} />
                <Route path="/search-bar" component={SearchBarContainer} />
                <Route path="sidebar" component={SidebarContainer} />
                <Route path="/tables" component={TablesContainer} />
                <Route path="/tag" component={TagContainer} />
                <Route path="/" exact component={AppIndex} />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
