import Markdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import atomOneDark from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark';
import remarkGfm from 'remark-gfm';

export const customMdComponents = {
  h1(props) {
    const { node: _, ...rest } = props;

    return (
      <h1
        {...rest}
        className="mb-4 border-b-2 border-slate-300 pb-4 font-space-grotesk text-4xl font-bold lg:text-5xl"
      />
    );
  },
  h2(props) {
    const { node: _, ...rest } = props;

    return (
      <h2
        {...rest}
        className="mb-4 border-b-2 border-slate-300 pb-4 font-space-grotesk text-3xl font-bold lg:text-4xl"
      />
    );
  },
  h3(props) {
    const { node: _, ...rest } = props;

    return (
      <h3
        {...rest}
        className="mb-4 border-b-2 border-slate-300 pb-2 font-space-grotesk text-2xl font-bold lg:text-3xl"
      />
    );
  },
  h4(props) {
    const { node: _, ...rest } = props;

    return (
      <h4
        {...rest}
        className="mb-4 border-b-2 border-slate-300 pb-2 font-space-grotesk text-xl font-bold lg:text-2xl"
      />
    );
  },
  h5(props) {
    const { node: _, ...rest } = props;

    return (
      <h5
        {...rest}
        className="mb-4 border-b-2 border-slate-300 pb-2 font-space-grotesk text-lg font-bold lg:text-xl"
      />
    );
  },
  h6(props) {
    const { node: _, ...rest } = props;

    return (
      <h6
        {...rest}
        className="mb-4 border-b-2 border-slate-300 pb-2 font-space-grotesk font-bold lg:text-lg"
      />
    );
  },
  p(props) {
    const { node: _, ...rest } = props;

    return <p {...rest} className="mb-4 lg:text-lg" />;
  },
  blockquote(props) {
    const { node: _, ...rest } = props;

    return (
      <blockquote
        {...rest}
        className="mb-4 border-l-4 border-slate-600 pl-2 text-slate-600"
      />
    );
  },
  a(props) {
    const { node: _, ...rest } = props;

    return (
      <a
        {...rest}
        className="inline-block text-blue-600 transition hover:underline"
      >
        {props.children}
      </a>
    );
  },
  hr(props) {
    const { node: _, ...rest } = props;

    return <hr {...rest} className="mb-4" />;
  },
  img(props) {
    const { node: _, ...rest } = props;

    return (
      <span className="block text-center">
        <img {...rest} className="inline-block" />
      </span>
    );
  },
  ul(props) {
    const { node: _, ...rest } = props;

    return (
      <div className="mb-4 pl-4 ">
        <ul
          {...rest}
          className="list-inside list-disc [&_ul]:mb-0 [&_ul]:pl-2"
        />
      </div>
    );
  },
  ol(props) {
    const { node: _, ...rest } = props;

    return (
      <div className="mb-4 pl-4 ">
        <ol
          {...rest}
          className="list-inside list-decimal [&_ul]:mb-0 [&_ul]:pl-2"
        />
      </div>
    );
  },
  li(props) {
    const { node: _, ...rest } = props;
    return <li {...rest} className="lg:text-lg" />;
  },
  code(props) {
    const { node: _, children, className, ...rest } = props;
    const match = /language-(\w+)/.exec(className || '');

    return match ? (
      <div className="mb-4 overflow-hidden rounded [&_code]:!font-jetbrains-mono md:[&_code]:!text-lg">
        <SyntaxHighlighter
          {...rest}
          showLineNumbers
          PreTag="div"
          language={match[1]}
          style={atomOneDark}
        >
          {String(children || '').replace(/\n$/, '')}
        </SyntaxHighlighter>
      </div>
    ) : (
      <code
        {...rest}
        className="inline-block rounded-md bg-slate-900 px-3 py-1 font-jetbrains-mono text-slate-100"
      >
        {children}
      </code>
    );
  },
  table(props) {
    const { node: _, ...rest } = props;

    return (
      <table
        {...rest}
        className="mb-4 border-collapse border-2 border-slate-800"
      />
    );
  },
  th(props) {
    const { node: _, ...rest } = props;

    return (
      <th
        {...rest}
        className="border-2 border-slate-800 bg-slate-200 p-4 font-space-grotesk "
      />
    );
  },
  td(props) {
    const { node: _, ...rest } = props;

    return <td {...rest} className="border-2 border-slate-800 p-4" />;
  },
};

export const customMDEditorComponents = {
  preview: (source) => {
    return (
      <Markdown remarkPlugins={[remarkGfm]} components={customMdComponents}>
        {source}
      </Markdown>
    );
  },
};
