import React from "react";
import { storiesOf } from "@storybook/react";
import {
  Table,
  TableRow,
  TableHeaderCell,
  TableCell
} from "../../uswds/components/Tables";

const cols = [
  {
    colId: "title",
    displayName: "Document title"
  },
  {
    colId: "desc",
    displayName: "Description"
  },
  {
    colId: "Year"
  }
];

const data = [
  {
    title: "Declaration of Independence",
    desc:
      "Statement adopted by the Continental Congress declaring independence from the British Empire.",
    Year: "1776"
  },
  {
    title: "Bill of Rights",
    desc:
      "The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms.",
    Year: "1791"
  },
  {
    title: "Declaration of Sentiments",
    desc:
      "A document written during the Seneca Falls Convention outlining the rights that American women should be entitled to as citizens.",
    Year: "1848"
  }
];

storiesOf("USWDS|Components/Tables", module)
  .add("default", () => (
    <div className="wrapper">
      <Table columns={cols} data={data} />
    </div>
  ))
  .add("borderless", () => (
    <div className="wrapper">
      <Table borderless columns={["Document title", "Description", "Year"]}>
        <TableRow>
          <TableHeaderCell>Declaration of Independence</TableHeaderCell>
          <TableCell>
            Statement adopted by the Continental Congress declaring independence
            from the British Empire.
          </TableCell>
          <TableCell>1776</TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>Bill of Rights</TableHeaderCell>
          <TableCell>
            The first ten amendments of the U.S. Constitution guaranteeing
            rights and freedoms.
          </TableCell>
          <TableCell>1791</TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>Declaration of Sentiments</TableHeaderCell>
          <TableCell>
            A document written during the Seneca Falls Convention outlining the
            rights that American women should be entitled to as citizens.
          </TableCell>
          <TableCell>1848</TableCell>
        </TableRow>
      </Table>
    </div>
  ));
