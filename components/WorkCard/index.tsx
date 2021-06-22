import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

import ButtonLink, { LinkInterface } from "../ButtonLink";
import ImageModal from "../ImageModal";
import Tag from "../Tag";

import style from "./style";

export interface WorkInterface {
  title: string;
  description: string;
  image: string;
  links: LinkInterface[];
  tags: string[];
}

export default function WorkCard(props: { work: WorkInterface }) {
  const {
    work: { title, description, image, links, tags },
  } = props;

  const [showImage, setShowImage] = useState(false);

  return (
    <>
      {showImage && (
        <ImageModal handleClose={() => setShowImage(false)} show={showImage}>
          <img className="modal-img" src={image} />
        </ImageModal>
      )}
      <div className="card-container">
        <div className="spacer top-left"></div>
        <div className="spacer top-right"></div>
        <div className="spacer bottom-left"></div>
        <div className="spacer bottom-right"></div>

        <h2>{title}</h2>

        <div className="left-container">
          {image ? (
            <img
              className="img"
              onClick={() => setShowImage(true)}
              src={image}
            />
          ) : null}
          <ul className="tag-container">
            {tags ? tags.map((tag, i) => <Tag key={i} text={tag} />) : null}
          </ul>
        </div>

        <div className="right-container">
          <ReactMarkdown className="work-description" source={description} />
          <ul className="button-container">
            {links
              ? links.map((link, i) => (
                  <ButtonLink key={i} link={link} target="_blank" />
                ))
              : null}
          </ul>
        </div>
      </div>

      <style jsx>{style}</style>
    </>
  );
}
