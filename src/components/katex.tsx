import katex from "katex";
import "katex/dist/katex.min.css";

export default function Katex({ math }: { math: string }) {
  return (
    <span
      className="my-2"
      dangerouslySetInnerHTML={{
        __html: katex.renderToString(math, {
          displayMode: false,
        }),
      }}
    />
  );
}
