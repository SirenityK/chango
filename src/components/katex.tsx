import katex from "katex";
import "katex/dist/katex.css";

interface KatexProps {
  tex: Parameters<typeof katex.renderToString>[0];
  options?: Parameters<typeof katex.renderToString>[1];
}

export default function Katex({
  tex: math,
  options = { displayMode: false },
}: KatexProps) {
  return (
    <span
      className="my-2"
      dangerouslySetInnerHTML={{
        __html: katex.renderToString(math, options),
      }}
    />
  );
}
