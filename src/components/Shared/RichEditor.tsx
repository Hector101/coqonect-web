import React,
{
  MouseEvent,
  useRef,
  FunctionComponent,
  Dispatch,
  SetStateAction,
} from 'react';
import { Editor, RichUtils, EditorState, ContentBlock } from 'draft-js';
import { observer } from 'mobx-react-lite';

import { useStore } from 'src/store';

type Props = {
  onChange: Dispatch<SetStateAction<EditorState>>;
  editorState: EditorState;
  containerClassName?: string;
  readOnly?: boolean;
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

export const RichEditor: FunctionComponent<Props> = observer((props) => {
  const { uiStore } = useStore();

  const { editorState } = props;
  let className = 'RichEditor-editor';
  const contentState = editorState.getCurrentContent();

  const editor = useRef(null);

  const _focusEditor = () => {
    editor.current.focus();
  };

  const _onChange = (editorStateValue: EditorState) => {
    uiStore.validateEditorState(editorStateValue);
    props.onChange(editorStateValue);
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
          onChange={_onChange}
          placeholder="Write Here..."
          ref={editor}
          spellCheck={true}
          readOnly={props.readOnly}
        />
      </div>
    </div>
  );
});

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
