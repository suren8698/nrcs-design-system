import React, { useState } from "react";
import { Alert as RsAlert, AlertProps, Container, Row, Col } from "reactstrap";
import Icon from "@mdi/react";
import {
  mdiInformation,
  mdiAlert,
  mdiAlertCircle,
  mdiCheckCircle,
  mdiClose,
} from "@mdi/js";
import { FlatButton } from "../../buttons/Buttons";

export const AlertBanner = ({
  color,
  noIcon,
  size,
  dismissable,
  children,
  ...rest
}: AlertProps) => {
  let icon;
  if (!noIcon) {
    switch (color) {
      case "warning":
        icon = mdiAlert;
        break;
      case "danger":
        icon = mdiAlertCircle;
        break;
      case "success":
        icon = mdiCheckCircle;
        break;
      default:
      case "info":
        icon = mdiInformation;
        break;
    }
  }

  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);

  let cmp;
  if (icon) {
    cmp = (
      <RsAlert
        className={size === "sm" ? "alert-banner alert-sm" : "alert-banner"}
        color={color}
        isOpen={visible}
        // toggle={dismissable ? onDismiss : undefined}
        {...rest}
      >
        <Container fluid>
          <Row>
            <Col xs="auto" className="p-0 pr-2">
              <Icon
                className="mdi"
                size={size === "sm" ? 0.9 : 1}
                path={icon}
              />
            </Col>
            <Col className="p-0">{children}</Col>
            {dismissable ? (
              <Col className="pr-0" xs="auto">
                <FlatButton
                  className="close"
                  size="sm"
                  iconOnly={mdiClose}
                  onClick={onDismiss}
                />
              </Col>
            ) : (
              ""
            )}
          </Row>
        </Container>
      </RsAlert>
    );
  } else {
    cmp = (
      <RsAlert
        className={size === "sm" ? "alert-banner alert-sm" : "alert-banner"}
        color={color}
        {...rest}
      >
        {children}
      </RsAlert>
    );
  }

  return cmp;
};
