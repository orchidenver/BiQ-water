import * as React from "react";
import "./TextBlock.css";

interface TextBlockProps {
  children: string;
  header?: string;
}

export default function TextBlock({ children, header }: TextBlockProps) {
  return (
    <>
      <p className="text-block-header">{header}</p>
      <p className="text-block-paragraph">{children}</p>
    </>
  );
}
