import React, { useState } from "react";
import { Table } from "reactstrap";
import {
  ContentHeaderH1,
  ContentHeaderH2,
} from "components/text/ContentHeader";
// import { Alert, Container, Row, Col } from "reactstrap";
// import Icon from "@mdi/react";
// import {
//   mdiInformation,
//   mdiAlert,
//   mdiAlertCircle,
//   mdiCheckCircle
// } from "@mdi/js";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Tables",
};

export const TablesDefault = () => (
  <div>
    <ContentHeaderH1>Tables</ContentHeaderH1>
    <p className="lead">Baisc HTML Tables.</p>
    <p>
      Offering two styles and two sizes. If you need sorting, filtering or other
      features, take a look at the DataTable component.
    </p>
    <Table>
      <thead className="thead-light">
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>

    <h3 className="mt-4">Small</h3>

    <Table className="table-sm">
      <thead className="thead-light">
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  </div>
);

export const TablesAlt = () => (
  <div>
    <ContentHeaderH2>Alternate Borderless</ContentHeaderH2>

    <Table className="table-alt">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>

    <h3 className="mt-4">Small</h3>

    <Table className="table-alt table-sm">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  </div>
);

TablesDefault.story = {
  name: "Tables - Default",
};

TablesAlt.story = {
  name: "Tables - Alternate",
};
