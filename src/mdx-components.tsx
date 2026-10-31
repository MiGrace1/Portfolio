import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h2: (props) => (
    <h2 className="mt-12 mb-4 font-display text-2xl first:mt-0" {...props} />
  ),
  p: (props) => <p className="mb-4 leading-relaxed text-muted" {...props} />,
  ul: (props) => (
    <ul className="mb-4 list-disc space-y-2 pl-5 text-muted" {...props} />
  ),
  strong: (props) => (
    <strong className="font-medium text-foreground" {...props} />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
