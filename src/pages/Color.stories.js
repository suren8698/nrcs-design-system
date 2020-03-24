import React from "react";
import {
  ContentHeaderH1,
  ContentHeaderH2
} from "components/text/ContentHeader";

export default {
  title: "Design System|Color"
};

export const ColorStory = () => (
  <div className="container docs-color">
    <ContentHeaderH1>Color</ContentHeaderH1>

    <p>
      The NRCS Color Palette is anchored around the USDA/FPAC Primary Geen and
      Secondary Blue colors and their goal of meeting strict 508 requirements of
      high color contrast.
    </p>
    <p>
      Several NRCS applications currently use Blue as the primary color coming
      from their water theme. So this design system simply swaps the Blue for
      our Primary and the Green for our Secondary. NRCS gray tertiary and accent
      colors are adjusted slightly to match the coolness of the blue as primary.
    </p>
    <p>
      New projects, especially if public facing, should consider using the Green
      as the Primary color and you'll see that we provide header components that
      use it as an option.
    </p>

    <ContentHeaderH2>Base Palette</ContentHeaderH2>

    <div className="row">
      <div className="col-md-4">
        <div className="p-3 mb-3 bg-dark text-white docs-color-swatch">
          Dark (gray-900) #212529
          <p>
            <small>Default text color</small>
          </p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="p-3 mb-3 bg-light text-dark border docs-color-swatch">
          Light (gray-100) #f8f9fa
          <p>
            <small>Background</small>
          </p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="p-3 mb-3 bg-white text-dark docs-color-swatch">
          White #fff
          <p>
            <small>
              Background of Card, Outline Buttons, and other components
            </small>
          </p>
        </div>
      </div>
    </div>

    <ContentHeaderH2>Color Palette</ContentHeaderH2>

    <div className="row">
      <div className="col-md-4">
        <div className="p-3 mb-3 bg-primary text-white docs-color-swatch">
          Primary #205493
          <p>
            <small>
              FPAC blue - Header, primary buttons, actions and controls
            </small>
          </p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="p-3 mb-3 bg-secondary text-white docs-color-swatch">
          Secondary #236430{" "}
          <p>
            <small>FPAC green</small>
          </p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="p-3 mb-3 docs-color-primaryoutline docs-color-swatch">
          Primary Outline #205493, bg: #fff/white
          <p>
            <small>Secondary buttons</small>
          </p>
        </div>
      </div>
    </div>

    <ContentHeaderH2>Accent Palette</ContentHeaderH2>

    <div className="row">
      <div className="col-md-4 mb-3">
        <div className="p-3 bg-info text-white docs-color-swatch">
          Information #296cbd
          <p>
            <small>10% lighter than Primary blue</small>
          </p>
        </div>
        <div className="p-3 alert-info">
          Information Background / Active Highlight
        </div>
      </div>

      <div className="col-md-4 mb-3">
        <div className="p-3 bg-success text-white docs-color-swatch">
          Success #308a42
          <p>
            <small>10% lighter than Secondary green</small>
          </p>
        </div>
        <div className="p-3 alert alert-banner alert-success">
          Successs Background
        </div>
      </div>

      <div className="col-md-4 mb-3">
        <div className="p-3 bg-danger text-white docs-color-swatch">
          Danger #b70f0a
        </div>
        <div className="p-3 alert alert-banner alert-danger">
          Danger Background
        </div>
      </div>

      <div className="col-md-4 mb-3">
        <div className="p-3 bg-warning text-dark docs-color-swatch">
          Warning #fdb81e
        </div>
        <div className="p-3 alert alert-banner alert-warning">
          Danger Background
        </div>
      </div>

      <div className="col-md-4">
        <div className="p-3 mb-3 bg-white text-dark docs-color-swatch">
          Focus Outline #TO-DO
          <p>
            <small>Focus indicator outline/highlight for accessibility</small>
          </p>
        </div>
      </div>
    </div>

    <ContentHeaderH2>Grays</ContentHeaderH2>

    <div className="row mb-3">
      <div className="col-md-12">
        <div className="p-3 docs-gray-100">100 - Default BACKGROUND color</div>

        <div className="p-3 docs-gray-200">
          200 - Default HOVER for menus and row selections
        </div>

        <div className="p-3 docs-gray-300">300</div>

        <div className="p-3 docs-gray-400">400</div>

        <div className="p-3 docs-gray-500">
          500 - Defaults BORDERS other than inputs
        </div>

        <div className="p-3 docs-gray-600 text-white">600</div>

        <div className="p-3 docs-gray-700 text-white">
          700 - Default ICON and INPUT border colors for accessibilty (high
          contrast)
        </div>

        <div className="p-3 docs-gray-800 text-white">800</div>

        <div className="p-3 docs-gray-900 text-white">
          900 - Default TEXT color
        </div>
      </div>
    </div>
  </div>
);