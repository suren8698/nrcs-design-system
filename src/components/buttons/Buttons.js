import React from "react";
import { Button } from "reactstrap";
import Icon from "@mdi/react";

export const PrimaryButton = ({
  size,
  iconLeft,
  iconRight,
  iconOnly,
  children,
  ...rest
}) => {
  let cmp;

  if (iconLeft) {
    cmp = (
      <Button className="btn-main" color="primary" size={size} {...rest}>
        <Icon
          className="mdi mr-1"
          path={iconLeft}
          size={size === "sm" ? 0.8 : 1}
        />
        {children}
      </Button>
    );
  } else if (iconRight) {
    cmp = (
      <Button className="btn-main" color="primary" size={size} {...rest}>
        {children}
        <Icon
          className="mdi ml-1"
          path={iconRight}
          size={size === "sm" ? 0.8 : 1}
        />
      </Button>
    );
  } else if (iconOnly) {
    cmp = (
      <Button className="btn-icon" color="primary" size={size} {...rest}>
        <Icon className="mdi" path={iconOnly} size={size === "sm" ? 0.8 : 1} />
      </Button>
    );
  } else {
    cmp = (
      <Button className="btn-main" color="primary" size={size} {...rest}>
        {children}
      </Button>
    );
  }

  return cmp;
};

export const SecondaryButton = ({
  size,
  iconLeft,
  iconRight,
  iconOnly,
  children,
  ...rest
}) => {
  let cmp;

  if (iconLeft) {
    cmp = (
      <Button
        className="btn-main"
        outline
        color="primary"
        size={size}
        {...rest}
      >
        <Icon
          className="mdi mr-1"
          path={iconLeft}
          size={size === "sm" ? 0.8 : 1}
        />
        {children}
      </Button>
    );
  } else if (iconRight) {
    cmp = (
      <Button
        className="btn-main"
        outline
        color="primary"
        size={size}
        {...rest}
      >
        {children}
        <Icon
          className="mdi ml-1"
          path={iconRight}
          size={size === "sm" ? 0.8 : 1}
        />
      </Button>
    );
  } else if (iconOnly) {
    cmp = (
      <Button
        className="btn-icon"
        outline
        color="primary"
        size={size}
        {...rest}
      >
        <Icon className="mdi" path={iconOnly} size={size === "sm" ? 0.8 : 1} />
      </Button>
    );
  } else {
    cmp = (
      <Button
        className="btn-main"
        outline
        color="primary"
        size={size}
        {...rest}
      >
        {children}
      </Button>
    );
  }

  return cmp;
};

export const FlatButton = ({
  size,
  iconLeft,
  iconRight,
  iconOnly,
  children,
  ...rest
}) => {
  let cmp;

  if (iconLeft) {
    cmp = (
      <Button className="btn-main" color="link" size={size} {...rest}>
        <Icon
          className="mdi mr-1"
          path={iconLeft}
          size={size === "sm" ? 0.8 : 1}
        />
        {children}
      </Button>
    );
  } else if (iconRight) {
    cmp = (
      <Button className="btn-main" color="link" size={size} {...rest}>
        {children}
        <Icon
          className="mdi ml-1"
          path={iconRight}
          size={size === "sm" ? 0.8 : 1}
        />
      </Button>
    );
  } else if (iconOnly) {
    cmp = (
      <Button className="btn-icon" color="link" size={size} {...rest}>
        <Icon className="mdi" path={iconOnly} size={size === "sm" ? 0.8 : 1} />
      </Button>
    );
  } else {
    cmp = (
      <Button className="btn-main" color="link" size={size} {...rest}>
        {children}
      </Button>
    );
  }

  return cmp;
};

export class ButtonSet extends React.Component {
  render() {
    return <div className="btn-set" {...this.props}></div>;
  }
}

export const ButtonFooter = ({ className, children }) => (
  <div className={`pt-3 mt-3 border-top ${className}`}>{children}</div>
);
