import ReactMarkdown from "react-markdown";

import style from "./style";

export default function Bio(props: { bio: string }) {
  const { bio } = props;
  return (
    <>
      <div className="bio-outer-container">
        <div className="bio-content-container">
          <div className="left-col">
            <h1>Hey There!</h1>
          </div>
          <div className="right-col">
            <ReactMarkdown className="bio-markdown" source={bio} />
          </div>
        </div>
      </div>
      <style jsx>{style}</style>
    </>
  );
}
