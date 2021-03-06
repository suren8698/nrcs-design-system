import React from "react";
import Icon from "@mdi/react";
import { ContentHeaderH1 } from "components/text/ContentHeader";
import { mdiCheckCircle } from "@mdi/js";
import { AlertBanner } from "./AlertBanner";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Feedback/Alert Banners",
};

export const BannersDefault = () => (
  <div>
    <ContentHeaderH1>Alert Banners - Default</ContentHeaderH1>
    <p className="lead">
      Alert banners are used under a ModalHeader or ContenHeader 100% width
      edge-to-edge when Growls are not practical.
    </p>

    <AlertBanner color="info">
      This is an <strong>info</strong> banner with{" "}
      <a href="/#" className="alert-link">
        an example link
      </a>
      . Give it a click if you like.
    </AlertBanner>
    <AlertBanner color="success">
      This is a <strong>success</strong> banner with{" "}
      <a href="/#" className="alert-link">
        an example link
      </a>
      . Give it a click if you like.
    </AlertBanner>
    <AlertBanner color="danger">
      This is a <strong>error</strong> banner with{" "}
      <a href="/#" className="alert-link">
        an example link
      </a>
      . Give it a click if you like.
    </AlertBanner>
    <AlertBanner color="warning">
      This is a <strong>warning</strong> banner with{" "}
      <a href="/#" className="alert-link">
        an example link
      </a>
      . Give it a click if you like.
    </AlertBanner>

    <h3 className="mt-4">Small</h3>
    <AlertBanner color="info" size="sm">
      This is a SMALL <strong>info</strong> banner.
    </AlertBanner>
  </div>
);

export const BannersNoIcon = () => (
  <div>
    <h3 className="mt-4">Alert Banners - No Icon</h3>
    <p>
      Alert banners come with icons by default as it aids in accessibility
      (color blind individuals). If you really want to remove the icon you can
      do so using the <code>noIcon</code> prop.
    </p>

    <AlertBanner color="info" noIcon>
      This is an <strong>info</strong> banner with{" "}
      <a href="/#" className="alert-link">
        an example link
      </a>
      . Give it a click if you like.
    </AlertBanner>
  </div>
);

export const BannersDismissable = () => {
  return (
    <div>
      <h3 className="mt-4">Alert Banners - Dismissable</h3>
      <p>
        Use the <code>dismissable</code> property to make a Banner dismissable.
      </p>
      <AlertBanner color="info" dismissable>
        This is a dismissable <strong>banner</strong> banner with{" "}
        <a href="/#" className="alert-link">
          an example link
        </a>
        . Go ahead, make me go away.
      </AlertBanner>
    </div>
  );
};

export const BannersContent = () => (
  <div>
    <h3 className="mt-4">Alert Banners - with Content</h3>

    <p>
      In rare cases you may want more control of content in a Banner. In this
      example, we use <code>noIcon</code> to remove the default icon and do our
      own thang...
    </p>

    <AlertBanner color="success" noIcon>
      <h4>
        <Icon className="mdi mr-2" path={mdiCheckCircle} size={1.1} />
        Well done!
      </h4>
      <p>
        Aww yeah, you successfully read this important banner message. This
        example text is going to run a bit longer so that you can see how
        spacing within an banner works with this kind of content.
      </p>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
    </AlertBanner>
  </div>
);

BannersDefault.story = {
  name: "Alert Banners - Default",
};

BannersNoIcon.story = {
  name: "Alert Banners - No Icon",
};

BannersDismissable.story = {
  name: "Alert Banners - Dismissable",
};

BannersContent.story = {
  name: "Alert Banners - with Content",
};
