import style from "./InnerHtmlContent.module.css";
import classNames from "classnames";

interface InnerHtmlContentProps {
  className?: string;
  htmlContent?: string;
}

export function InnerHtmlContent({
  className,
  htmlContent,
}: InnerHtmlContentProps) {
  if (typeof htmlContent !== "string") {
    return <></>;
  }
  return (
    <div
      className={classNames(style.root, className)}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
