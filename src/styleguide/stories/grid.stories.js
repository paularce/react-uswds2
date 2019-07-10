import React from "react";
import { storiesOf } from "@storybook/react";

import { Grid, Col } from "../../uswds/components/Grid";

storiesOf("USWDS|Components/Grid", module)
  .add("column width in number of columns", () => (
    <div className="wrapper--grid">
      <Grid>
        <Col classes="grid-col-1">1</Col>
        <Col classes="grid-col-1">1</Col>
        <Col classes="grid-col-1">1</Col>
        <Col classes="grid-col-1">1</Col>
        <Col classes="grid-col-1">1</Col>
        <Col classes="grid-col-1">1</Col>
        <Col classes="grid-col-1">1</Col>
        <Col classes="grid-col-1">1</Col>
        <Col classes="grid-col-1">1</Col>
        <Col classes="grid-col-1">1</Col>
        <Col classes="grid-col-1">1</Col>
        <Col classes="grid-col-1">1</Col>
      </Grid>
      <Grid>
        <Col classes="grid-col-12">12</Col>
      </Grid>
      <Grid>
        <Col classes="grid-col-6">6</Col>
        <Col classes="grid-col-6">6</Col>
      </Grid>
      <Grid>
        <Col classes="grid-col-5">5</Col>
        <Col classes="grid-col-7">7</Col>
      </Grid>
      <Grid>
        <Col classes="grid-col-4">4</Col>
        <Col classes="grid-col-8">8</Col>
      </Grid>
      <Grid>
        <Col classes="grid-col-3">3</Col>
        <Col classes="grid-col-9">9</Col>
      </Grid>
      <Grid>
        <Col classes="grid-col-2">2</Col>
        <Col classes="grid-col-10">10</Col>
      </Grid>
      <Grid>
        <Col classes="grid-col-1">1</Col>
        <Col classes="grid-col-5">5</Col>
        <Col classes="grid-col-6">6</Col>
      </Grid>
    </div>
  ))
  .add("media stacked", () => (
    <div className="wrapper--grid">
      <Grid full>
        <Col classes="tablet:grid-col">tablet:grid-col</Col>
        <Col classes="tablet:grid-col">tablet:grid-col</Col>
        <Col classes="tablet:grid-col">tablet:grid-col</Col>
      </Grid>
    </div>
  ))
  .add("Variable width content", () => (
    <div className="wrapper--grid">
      <Grid full>
        <Col classes="grid-col-auto">grid-col-auto</Col>
        <Col classes="grid-col-fill">grid-col-fill</Col>
        <Col classes="grid-col-fill">grid-col-fill</Col>
        <Col classes="grid-col-auto">grid-col-auto</Col>
      </Grid>
    </div>
  ))
  .add("Offsetting Columns", () => (
    <div className="wrapper--grid">
      <Grid full>
        <Col classes="grid-col-8 grid-offset-4">grid-col-8.grid-offset-4</Col>
      </Grid>
    </div>
  ));
