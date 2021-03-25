import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown/with-html'
import Gfm from 'remark-gfm'
import CodeBlock from './code-block'

export default function Markdown({ source }) {
    return (
        <ReactMarkdown
            children={source}
            renderers={{
                code: CodeBlock,
            }}
            plugins={[Gfm]}
            allowDangerousHtml={true}
            escapeHtml={false}
        />
    );
}

Markdown.propTypes = {
    source: PropTypes.string.isRequired,
};
