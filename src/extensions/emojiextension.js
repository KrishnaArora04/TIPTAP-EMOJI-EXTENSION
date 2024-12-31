import { Extension } from '@tiptap/core';

const EmojiExtension = Extension.create({
  name: 'emoji',

  addCommands() {
    return {
      insertEmoji:
        (emoji) =>
        ({ commands }) => {
          return commands.insertContent(emoji);
        },
    };
  },
});

export default EmojiExtension;
