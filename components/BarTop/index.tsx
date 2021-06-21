import ButtonLinkFlex from "../ButtonLinkFlex";

import style from "./style";
import BarSpacers from "../BarSpacers";

export default function BarTop() {
  return (
    <>
      <div id="bar-top">
        <BarSpacers location="top" />
        <div id="buttons-container">
          <ButtonLinkFlex
            id="left-button"
            target="_blank"
            link={{ url: "/docs/Resume - Zunaib imtiaz.pdf", name: "Resume" }}
          />
          <ButtonLinkFlex
            id="right-button"
            link={{ url: "mailto:zunaib60@gmail.com", name: "Email" }}
            target="_self"
          />
        </div>
      </div>
      <style jsx>{style}</style>
    </>
  );
}
