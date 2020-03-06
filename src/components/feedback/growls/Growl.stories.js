import React, { useState } from "react";
import {
  Alert,
  Button,
  Toast,
  ToastBody,
  ToastHeader,
  Container,
  Row,
  Col,
  Card,
  CardBody
} from "reactstrap";
import Icon from "@mdi/react";
import {
  mdiInformation,
  mdiAlert,
  mdiAlertCircle,
  mdiCheckCircle
} from "@mdi/js";

export default {
  title: "Components|Feedback/Growls"
};

export const Growls = () => {
  const [show, setShow] = useState(false);
  const [showGrowl, setShowGrowl] = useState(false);
  const [showAltGrowl, setShowAltGrowl] = useState(false);
  const [showAutoGrowl, setShowAutoGrowl] = useState(false);
  const [showCntGrowl, setShowCntGrowl] = useState(false);
  const [showCntGrowl2, setShowCntGrowl2] = useState(false);

  const toggle = () => setShow(!show);
  const toggleGrowl = () => setShowGrowl(!showGrowl);
  const toggleAltGrowl = () => setShowAltGrowl(!showAltGrowl);
  const toggleAutoGrowl = () => setShowAutoGrowl(!showAutoGrowl);
  const toggleCntGrowl = () => setShowCntGrowl(!showCntGrowl);
  const toggleCntGrowl2 = () => setShowCntGrowl2(!showCntGrowl2);

  return (
    <div aria-live="polite" aria-atomic="true" className="docs-btn">
      <h1 className="docs">Growls</h1>

      <p>
        Growls are 'Alerts' wrapped in a 'Toast', and we like to call them a
        'Growl' because it's fun.
      </p>
      <p>
        <strong>Growls are generally preferrable over Inline Alerts</strong> as
        they don't disturb or pop-into a layout, they overlay on top in a
        consistent location.
      </p>
      <p>
        Growls will stack, and since they are built with our Alerts, can be
        static, dissmisable, with or without an icon or content.
      </p>
      <p>
        Growls can optionally 'autohide' after a 'delay.' (INCOMPLETE NOT
        WORKING)
      </p>

      <Row>
        <Col>
          <Card>
            <CardBody>
              {/* <Button color="primary" onClick={toggle}>
                Show Toast
              </Button> */}

              <Button
                className="btn-main"
                color="primary"
                onClick={toggleGrowl}
              >
                Show Growl
              </Button>

              {/* <Button color="primary" onClick={toggleAltGrowl}>
                Show Alt Growl
              </Button> */}

              <Button
                className="btn-main"
                color="primary"
                onClick={toggleAutoGrowl}
              >
                Show Auto-Hide Growl
              </Button>

              <Button
                className="btn-main"
                color="primary"
                onClick={toggleCntGrowl}
              >
                Show Top-Center Growl
              </Button>

              <Button
                className="btn-main"
                color="primary"
                onClick={toggleCntGrowl2}
              >
                Show Top-Center Growl 2
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Position it */}
      <div className="growl growl-top-right">
        {/* Then put toasts within */}
        <Toast isOpen={show}>
          <ToastHeader toggle={toggle}>Toast title</ToastHeader>
          <ToastBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ToastBody>
        </Toast>
        <Toast isOpen={showGrowl}>
          <Alert
            className="alert-fpac"
            color="warning"
            isOpen={true}
            toggle={toggleGrowl}
          >
            <Container className="m-0">
              <Row>
                <Col xs="auto" className="p-0 pr-2">
                  <Icon className="mdi" path={mdiAlert} />
                </Col>
                <Col className="p-0">
                  This is a dismissable warning Growl with. Go ahead, dismiss
                  me!
                </Col>
              </Row>
            </Container>
          </Alert>
        </Toast>
        <Toast isOpen={showAltGrowl}>
          <Alert color="success" isOpen={true} toggle={toggleAltGrowl}>
            <Container className="m-0">
              <Row>
                <Col xs="auto" className="p-0 pr-2">
                  <Icon className="mdi" path={mdiAlert} />
                </Col>
                <Col className="p-0">
                  This is a dismissable success Growl with. Go ahead, dismiss
                  me!
                </Col>
              </Row>
            </Container>
          </Alert>
        </Toast>
        <Toast isOpen={showAutoGrowl} data-autohide={true}>
          <Alert
            className="alert-fpac"
            color="info"
            isOpen={true}
            toggle={toggleAutoGrowl}
          >
            <Container className="m-0">
              <Row>
                <Col xs="auto" className="p-0 pr-2">
                  <Icon className="mdi" path={mdiAlert} />
                </Col>
                <Col className="p-0">
                  This is a dismissable info Growl that will automatically hide
                  after a brief delay. NOT WORKING - WORK IN PROGRESS
                </Col>
              </Row>
            </Container>
          </Alert>
        </Toast>
      </div>
      {/* Position it */}
      <div className="growl growl-top-center">
        <Toast isOpen={showCntGrowl}>
          <Alert
            className="alert-fpac"
            color="danger"
            isOpen={true}
            toggle={toggleCntGrowl}
          >
            <Container className="m-0">
              <Row>
                <Col xs="auto" className="p-0 pr-2">
                  <Icon className="mdi" path={mdiAlert} />
                </Col>
                <Col className="p-0">
                  This is a centered dismissable error Growl with. Go ahead,
                  dismiss me!
                </Col>
              </Row>
            </Container>
          </Alert>
        </Toast>
        <Toast isOpen={showCntGrowl2}>
          <Alert
            className="alert-fpac"
            color="warning"
            isOpen={true}
            toggle={toggleCntGrowl2}
          >
            <Container className="m-0">
              <Row>
                <Col xs="auto" className="p-0 pr-2">
                  <Icon className="mdi" path={mdiAlert} />
                </Col>
                <Col className="p-0">
                  This is a centered dismissable warning Growl with. Go ahead,
                  dismiss me!
                </Col>
              </Row>
            </Container>
          </Alert>
        </Toast>
      </div>
    </div>
  );
};