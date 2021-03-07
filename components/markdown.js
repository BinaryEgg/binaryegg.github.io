import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './code-block'

export default function Markdown({ source }) {
    return (
        <ReactMarkdown
            source={source}
            renderers={{
                code: CodeBlock,
            }}
        />
    );
}

Markdown.propTypes = {
    source: PropTypes.string.isRequired,
};
