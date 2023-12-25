import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { customMdComponents } from '../utils/custom-components';

export default function MarkdownContent({ children }) {
  const remarkPlugins = [remarkGfm];

  return (
    <Markdown remarkPlugins={remarkPlugins} components={customMdComponents}>
      {children}
    </Markdown>
  );
}

MarkdownContent.propTypes = {
  children: PropTypes.string.isRequired,
};
