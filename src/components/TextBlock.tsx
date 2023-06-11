import * as React from "react";
import "./TextBlock.css";

interface TextBlockProps {
  children: string | JSX.Element;
  header?: string;
  element?: string;
}

export default function TextBlock({
  children,
  header,
  element,
}: TextBlockProps) {
  return (
    <>
      <p className="text-block-header">{header}</p>
      {element === "DIV" ? (
        <div className="text-block-paragraph">{children}</div>
      ) : (
        <p className="text-block-paragraph">{children}</p>
      )}
    </>
  );
}
