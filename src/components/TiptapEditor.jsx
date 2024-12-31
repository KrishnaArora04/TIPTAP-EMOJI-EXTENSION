import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import EmojiExtension from '../extensions/emojiextension';

const TiptapEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit, EmojiExtension],
    content: '<p>Type something and add emojis!</p>',
  });

  const addEmoji = (emoji) => {
    if (editor) {
      editor.chain().focus().insertEmoji(emoji).run();
    }
  };

  return (
    <div>
      <h2>Tiptap Editor with Emoji Extension</h2>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => addEmoji('😊')} style={{ padding: '5px 10px', marginRight: '5px' }}>
          😊
        </button>
        <button onClick={() => addEmoji('🚀')} style={{ padding: '5px 10px', marginRight: '5px' }}>
          🚀
        </button>
        <button onClick={() => addEmoji('🎉')} style={{ padding: '5px 10px' }}>
          🎉
        </button>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
};

export default TiptapEditor;
