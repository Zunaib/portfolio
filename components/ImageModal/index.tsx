import { ReactNode } from "react";
import { LinkInterface } from "../ButtonLink";

import style from "./style";

export default function ImageModal(props: {
  handleClose: () => void;
  show?: boolean;
  children?: ReactNode;
}) {
  const { handleClose, show, children } = props;
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <>
      <div className={showHideClassName} onClick={handleClose}>
        <section className="modal-main">{children}</section>
      </div>
      <style jsx>{style}</style>
    </>
  );
}
