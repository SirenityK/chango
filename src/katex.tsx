import katex from "katex";
import "./katex.css";

export default function Katex({ math }: { math: string }) {
  return (
    <div className="my-2">
      <span
        dangerouslySetInnerHTML={{
          __html: katex.renderToString(math),
        }}
      />
    </div>
  );
}
