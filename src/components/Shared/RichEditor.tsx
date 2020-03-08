import React,
{
  KeyboardEvent,
  MouseEvent,
  useRef,
  useEffect,
  FunctionComponent,
  Dispatch,
  SetStateAction,
} from 'react';
import { Editor, RichUtils, EditorState, ContentBlock } from 'draft-js';

type Props = {
  onChange: Dispatch<SetStateAction<EditorState>>;
  editorState: EditorState;
  containerClassName?: string;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
};

type TInlineStyleControls = { onToggle: (inlineStyle: string) => void };

type InlineStyleControlsProps = Pick<Props, 'editorState'> & TInlineStyleControls;

type TStyleButton = {
  style: string;
  active: boolean;
  label: string;
};

type StyleButtonProps = TInlineStyleControls & TStyleButton;

type BlockStyleControlsProps = Pick<Props, 'editorState'> & TInlineStyleControls;

export const RichEditor: FunctionComponent<Props> = (props) => {
  const { editorState } = props;
  let className = 'RichEditor-editor';
  const contentState = editorState.getCurrentContent();

  const editor = useRef(null);

  const _focusEditor = () => {
    editor.current.focus();
  };

  useEffect(() => {
    _focusEditor();
  }, []);

  const _onChange = (editorStateValue: EditorState) => {
    props.onChange(editorStateValue);
    props.setFieldValue('bio', editorStateValue);
  };

  const _handleKeyCommand = (command: string) => {
      const newState = RichUtils.handleKeyCommand(editorState, command);
      if (newState) {
        _onChange(newState);
        return 'handled';
      }
      return 'not-handled';
  };

  const _onTab = (e: KeyboardEvent) => {
    const maxDepth = 2;
    _onChange(RichUtils.onTab(e, editorState, maxDepth));
  };

  const _toggleBlockType = (blockType: string) => {
    _onChange(RichUtils.toggleBlockType(editorState, blockType));
  };

  const _toggleInlineStyle = (inlineStyle: string) => {
    _onChange(
      RichUtils.toggleInlineStyle(editorState, inlineStyle),
    );
  };

  if (!contentState.hasText()) {
    if (contentState.getBlockMap().first().getType() !== 'unstyled') {
      className += ' RichEditor-hidePlaceholder';
    }
  }

  return (
    <div className={`RichEditor-root ${props.containerClassName}`}>
      <BlockStyleControls
        editorState={editorState}
        onToggle={_toggleBlockType}
      />
      <InlineStyleControls
        editorState={editorState}
        onToggle={_toggleInlineStyle}
      />
      <div className={className} onClick={_focusEditor}>
        <Editor
          blockStyleFn={getBlockStyle}
          customStyleMap={styleMap}
          editorState={editorState}
          handleKeyCommand={_handleKeyCommand}
          onChange={_onChange}
          onTab={_onTab}
          placeholder="Tell your audience about yourself..."
          ref={editor}
          spellCheck={true}
        />
      </div>
    </div>
  );
};

const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};

function getBlockStyle(block: ContentBlock) {
  switch (block.getType()) {
    case 'blockquote':
      return 'RichEditor-blockquote';
    default:
      return '';
  }
}

const StyleButton = (props: StyleButtonProps) => {
  const _onToggle = (e: MouseEvent) => {
    e.preventDefault();
    props.onToggle(props.style);
  };

  let className = 'RichEditor-styleButton';
  if (props.active) {
    className += ' RichEditor-activeButton';
  }

  return (
    <span className={className} onMouseDown={_onToggle}>
      {props.label}
    </span>
  );
};

const BLOCK_TYPES = [
  { label: 'H1', style: 'header-one' },
  { label: 'H2', style: 'header-two' },
  { label: 'H3', style: 'header-three' },
  { label: 'H4', style: 'header-four' },
  { label: 'H5', style: 'header-five' },
  { label: 'H6', style: 'header-six' },
  { label: 'Blockquote', style: 'blockquote' },
  { label: 'UL', style: 'unordered-list-item' },
  { label: 'OL', style: 'ordered-list-item' },
  { label: 'Code Block', style: 'code-block' },
];

const BlockStyleControls = (props: BlockStyleControlsProps) => {
  const { editorState } = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();
  return (
    <div className="RichEditor-controls">
      {BLOCK_TYPES.map((type) =>
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />,
      )}
    </div>
  );
};

const INLINE_STYLES = [
  { label: 'Bold', style: 'BOLD' },
  { label: 'Italic', style: 'ITALIC' },
  { label: 'Underline', style: 'UNDERLINE' },
  { label: 'Monospace', style: 'CODE' },
];

const InlineStyleControls = (props: InlineStyleControlsProps) => {
  const currentStyle = props.editorState.getCurrentInlineStyle();

  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map((type) =>
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />,
      )}
    </div>
  );
};
