import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import { ContentHeaderH1 } from "components/text/ContentHeader";
import Icon from "@mdi/react";
import { mdiHuman, mdiGrid, mdiHammerWrench } from "@mdi/js";

class Guides extends React.Component {
  render() {
    return (
      <div className="container">
        <ContentHeaderH1>Guides</ContentHeaderH1>

        <p className="lead">
          The following guides, references, and examples provide supplemental
          information and guidance to effectively implement the components and
          styles that are inherent within the NRCS Design System.
        </p>

        <Row xs="1" md="2">
          <Col className="nav-card mb-3">
            <a
              className="btn btn-link d-block text-left p-0"
              href="/nrcs-design-system/guides/accessibility"
            >
              <Card>
                <CardBody className="h5 mb-0">
                  <Icon className="mdi mr-1" path={mdiHuman} size={1.3} />
                  Accessibility
                </CardBody>
              </Card>
            </a>
          </Col>
          <Col className="nav-card mb-3">
            <a
              className="btn btn-link d-block text-left p-0"
              href="/nrcs-design-system/guides/grid-and-layout"
            >
              <Card>
                <CardBody className="h5 mb-0">
                  <Icon className="mdi mr-1" path={mdiGrid} size={1.3} />
                  Grid and Layout
                </CardBody>
              </Card>
            </a>
          </Col>
          <Col className="nav-card mb-3">
            <a
              className="btn btn-link d-block text-left p-0"
              href="/nrcs-design-system/guides/utilities"
            >
              <Card>
                <CardBody className="h5 mb-0">
                  <Icon
                    className="mdi mr-1"
                    path={mdiHammerWrench}
                    size={1.3}
                  />
                  Utilities
                </CardBody>
              </Card>
            </a>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Guides;
