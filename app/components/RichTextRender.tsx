import React from "react";

interface ContentNode {
  text?: string;
  bold?: boolean;
  children?: ContentNode[];
  type?: string;
  url?: string;
  newTab?: boolean;
}

const RichTextRenderer: React.FC<{ content: ContentNode[] }> = ({
  content,
}) => {
  return (
    <>
      {content.map((node, index) => {
        if (node.type === "link") {
          return (
            <a
              href={node.url}
              target={node.newTab ? "_blank" : "_self"}
              rel="noopener noreferrer"
              key={index}
            >
              {node.children?.map((child, idx) => (
                <RichTextRenderer content={[child]} key={idx} />
              ))}
            </a>
          );
        } else if (node.text?.includes("<iframe")) {
          return (
            <div key={index} dangerouslySetInnerHTML={{ __html: node.text }} />
          );
        } else {
          const style = node.bold ? { fontWeight: "bold" } : {};
          return (
            <div key={index} style={style} className="mb-2">
              {node.text}
              {node.children && <RichTextRenderer content={node.children} />}
            </div>
          );
        }
      })}
    </>
  );
};

export default RichTextRenderer;
